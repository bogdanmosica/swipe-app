import { Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { JwtRefreshPayloadType } from './types/jwt-refresh-payload.type';
import { OrNeverType } from '../../utils/types/or-never.type';
import { AllConfigType } from '../../config/config.type';
import { CookieExtractor } from '../../utils/utils';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh'
) {
  constructor(private configService: ConfigService<AllConfigType>) {
    super({
      jwtFromRequest: CookieExtractor,
      secretOrKey: configService.get(
        'auth.refreshSecret' as keyof AllConfigType,
        {
          infer: true,
        }
      ),
    });
  }

  public validate(
    payload: JwtRefreshPayloadType
  ): OrNeverType<JwtRefreshPayloadType> {
    if (!payload.sessionId) {
      throw new UnauthorizedException();
    }

    return payload;
  }
}
