import {
  HttpException,
  HttpStatus,
  Injectable,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import ms from 'ms';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';
import bcrypt from 'bcryptjs';
import { AuthEmailLoginDto } from './dto/auth-email-login.dto';
import { AuthUpdateDto } from './dto/auth-update.dto';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';
import crypto from 'crypto';
import { Response } from 'express';
import { plainToClass } from 'class-transformer';

import { AuthProvidersEnum } from './auth-providers.enum';
import { AuthRegisterLoginDto } from './dto/auth-register-login.dto';
import { LoginResponseType } from './types/login-response.type';
import { ConfigService } from '@nestjs/config';
import { JwtRefreshPayloadType } from './strategies/types/jwt-refresh-payload.type';
import { JwtPayloadType } from './strategies/types/jwt-payload.type';
import { RoleEnum } from '../roles/roles.enum';
import { StatusEnum } from '../statuses/statuses.enum';
import { Session } from '../session/entities/session.entity';
import { AllConfigType } from '../config/config.type';
import { SessionService } from '../session/session.service';
import { UsersService } from '../users/users.service';
import { ForgotService } from '../forgot/forgot.service';
import { MailService } from '../mail/mail.service';
import { NullableType } from '../utils/types/nullable.type';
import { SocialInterface } from '../social/interfaces/social.interface';
import { Status } from '../statuses/entities/status.entity';
import { Role } from '../roles/entities/role.entity';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
    private forgotService: ForgotService,
    private sessionService: SessionService,
    private mailService: MailService,
    private configService: ConfigService<AllConfigType>
  ) {}

  async validateLogin(
    loginDto: AuthEmailLoginDto,
    onlyAdmin: boolean,
    response: Response
  ): Promise<LoginResponseType> {
    const user = await this.usersService.findOne({ email: loginDto.email });
    if (
      !user ||
      (user?.role &&
        !(onlyAdmin ? [RoleEnum.admin] : [RoleEnum.user]).includes(
          user.role.id
        ))
    ) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            email: 'notFound',
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    }

    if (user.provider !== AuthProvidersEnum.email) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            email: `needLoginViaProvider:${user.provider}`,
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    }

    const isValidPassword = await bcrypt.compare(
      loginDto.password,
      user.password
    );

    if (!isValidPassword) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            password: 'incorrectPassword',
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    }

    const session = await this.sessionService.create({
      user,
    });

    const { token, refreshToken, tokenExpires } = await this.getTokensData({
      id: user.id,
      role: user.role,
      sessionId: session.id,
    });

    response.cookie('refreshToken', refreshToken, {
      expires: new Date(tokenExpires),
      httpOnly: true,
      sameSite: 'none',
      secure: true,
      domain: '.bogdanmosica.ro',
    });
    response.cookie('token', token, {
      expires: new Date(tokenExpires),
      httpOnly: true,
      sameSite: 'none',
      secure: true,
      domain: '.bogdanmosica.ro',
    });

    return {
      // refreshToken,
      // token,
      // tokenExpires,
      user: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    };
  }

  async validateSocialLogin(
    authProvider: string,
    socialData: SocialInterface
  ): Promise<LoginResponseType> {
    let user: NullableType<User>;
    const socialEmail = socialData.email?.toLowerCase();

    const userByEmail = await this.usersService.findOne({
      email: socialEmail,
    });

    user = await this.usersService.findOne({
      socialId: socialData.id,
      provider: authProvider,
    });

    if (user) {
      if (socialEmail && !userByEmail) {
        user.email = socialEmail;
      }
      await this.usersService.update(user.id, user);
    } else if (userByEmail) {
      user = userByEmail;
    } else {
      const role = plainToClass(Role, {
        id: RoleEnum.user,
      });
      const status = plainToClass(Status, {
        id: StatusEnum.active,
      });

      user = await this.usersService.create({
        email: socialEmail ?? null,
        firstName: socialData.firstName ?? null,
        lastName: socialData.lastName ?? null,
        socialId: socialData.id,
        provider: authProvider,
        role,
        status,
      });

      user = await this.usersService.findOne({
        id: user.id,
      });
    }

    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            user: 'userNotFound',
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    }

    const session = await this.sessionService.create({
      user,
    });

    const {
      token: jwtToken,
      refreshToken,
      tokenExpires,
    } = await this.getTokensData({
      id: user.id,
      role: user.role,
      sessionId: session.id,
    });

    return {
      refreshToken,
      token: jwtToken,
      tokenExpires: tokenExpires,
      user,
    };
  }

  async register(dto: AuthRegisterLoginDto): Promise<void> {
    const user = await this.usersService.findOne({ email: dto.email });

    if (user) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          message: 'Email exists, use the login page',
        },
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    }

    const hash = crypto
      .createHash('sha256')
      .update(randomStringGenerator())
      .digest('hex');

    await this.usersService.create({
      ...dto,
      email: dto.email,
      role: {
        id: RoleEnum.user,
      } as Role,
      status: {
        id: StatusEnum.inactive,
      } as Status,
      hash,
    });

    await this.mailService.userSignUp({
      to: dto.email,
      data: {
        hash,
      },
    });
  }

  async confirmEmail(hash: string): Promise<void> {
    const user = await this.usersService.findOne({
      hash,
    });

    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `notFound`,
        },
        HttpStatus.NOT_FOUND
      );
    }

    user.hash = null;
    user.status = plainToClass(Status, {
      id: StatusEnum.active,
    });
    await user.save();
  }

  async forgotPassword(email: string): Promise<void> {
    const user = await this.usersService.findOne({
      email,
    });

    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            email: 'emailNotExists',
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    }

    const hash = crypto
      .createHash('sha256')
      .update(randomStringGenerator())
      .digest('hex');
    await this.forgotService.create({
      hash,
      user,
    });

    await this.mailService.forgotPassword({
      to: email,
      data: {
        hash,
      },
    });
  }

  async resetPassword(hash: string, password: string): Promise<void> {
    const forgot = await this.forgotService.findOne({
      where: {
        hash,
      },
    });

    if (!forgot) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            hash: `notFound`,
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    }

    const user = forgot.user;
    user.password = password;

    await this.sessionService.softDelete({
      user: {
        id: user.id,
      },
    });
    await user.save();
    await this.forgotService.softDelete(forgot.id);
  }

  async me(userJwtPayload: JwtPayloadType): Promise<NullableType<User>> {
    return this.usersService.findOne({
      id: userJwtPayload.id,
    });
  }

  async update(
    userJwtPayload: JwtPayloadType,
    userDto: AuthUpdateDto
  ): Promise<NullableType<User>> {
    if (userDto.password) {
      if (userDto.oldPassword) {
        const currentUser = await this.usersService.findOne({
          id: userJwtPayload.id,
        });

        if (!currentUser) {
          throw new HttpException(
            {
              status: HttpStatus.UNPROCESSABLE_ENTITY,
              errors: {
                user: 'userNotFound',
              },
            },
            HttpStatus.UNPROCESSABLE_ENTITY
          );
        }

        const isValidOldPassword = await bcrypt.compare(
          userDto.oldPassword,
          currentUser.password
        );

        if (!isValidOldPassword) {
          throw new HttpException(
            {
              status: HttpStatus.UNPROCESSABLE_ENTITY,
              errors: {
                oldPassword: 'incorrectOldPassword',
              },
            },
            HttpStatus.UNPROCESSABLE_ENTITY
          );
        } else {
          await this.sessionService.softDelete({
            user: {
              id: currentUser.id,
            },
            excludeId: userJwtPayload.sessionId,
          });
        }
      } else {
        throw new HttpException(
          {
            status: HttpStatus.UNPROCESSABLE_ENTITY,
            errors: {
              oldPassword: 'missingOldPassword',
            },
          },
          HttpStatus.UNPROCESSABLE_ENTITY
        );
      }
    }

    await this.usersService.update(userJwtPayload.id, userDto);

    return this.usersService.findOne({
      id: userJwtPayload.id,
    });
  }

  async refreshToken(
    data: Pick<JwtRefreshPayloadType, 'sessionId'>
  ): Promise<Omit<LoginResponseType, 'user'>> {
    const session = await this.sessionService.findOne({
      where: {
        id: data.sessionId,
      },
    });

    if (!session) {
      throw new UnauthorizedException();
    }

    const { token, refreshToken, tokenExpires } = await this.getTokensData({
      id: session.user.id,
      role: session.user.role,
      sessionId: session.id,
    });

    return {
      token,
      refreshToken,
      tokenExpires,
    };
  }

  async softDelete(user: User): Promise<void> {
    await this.usersService.softDelete(user.id);
  }

  async logout(
    data: Pick<JwtRefreshPayloadType, 'sessionId'>,
    response: Response
  ) {
    response.clearCookie('refreshToken', {
      sameSite: 'strict',
      httpOnly: true,
    });
    response.clearCookie('token', {
      sameSite: 'strict',
      httpOnly: true,
    });

    return this.sessionService.softDelete({
      id: data.sessionId,
    });
  }

  private async getTokensData(data: {
    id: User['id'];
    role: User['role'];
    sessionId: Session['id'];
  }) {
    const tokenExpiresIn = this.configService.getOrThrow(
      'auth.expires' as keyof AllConfigType,
      {
        infer: true,
      }
    ) as string;
    const tokenExpires = Date.now() + ms(tokenExpiresIn);

    const [token, refreshToken] = await Promise.all([
      await this.jwtService.signAsync(
        {
          id: data.id,
          role: data.role,
          sessionId: data.sessionId,
        },
        {
          secret: this.configService.getOrThrow(
            'auth.secret' as keyof AllConfigType,
            { infer: true }
          ),
          expiresIn: tokenExpiresIn,
        }
      ),
      await this.jwtService.signAsync(
        {
          sessionId: data.sessionId,
        },
        {
          secret: this.configService.getOrThrow(
            'auth.refreshSecret' as keyof AllConfigType,
            {
              infer: true,
            }
          ),
          expiresIn: this.configService.getOrThrow(
            'auth.refreshExpires' as keyof AllConfigType,
            {
              infer: true,
            }
          ),
        }
      ),
    ]);

    return {
      token,
      refreshToken,
      tokenExpires,
    };
  }
}
