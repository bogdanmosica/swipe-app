import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleEnum } from '../../../roles/roles.enum';
import { StatusEnum } from '../../../statuses/statuses.enum';
import { User } from '../../../users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserSeedService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>
  ) {}

  async run() {
    const countSuper = await this.repository.count({
      where: {
        role: {
          id: RoleEnum.super,
        },
      },
    });

    if (!countSuper) {
      Logger.log(
        "Super User Seed: Super User does not exist, I'll create some data for you"
      );
      await this.repository.save(
        this.repository.create({
          firstName: 'Super',
          lastName: 'Admin',
          email: 'super@example.com',
          password: 'secret',
          role: {
            id: RoleEnum.super,
            name: 'Super Admin',
          },
          status: {
            id: StatusEnum.inactive,
            name: 'InActive',
          },
        })
      );

      Logger.log('Super User Seed: Super User added!');
    }

    const countAdmin = await this.repository.count({
      where: {
        role: {
          id: RoleEnum.admin,
        },
      },
    });

    if (!countAdmin) {
      Logger.log(
        "Admin User Seed: Admin User does not exist, I'll create some data for you"
      );
      await this.repository.save(
        this.repository.create({
          firstName: 'Admin',
          lastName: 'Admin',
          email: 'admin@example.com',
          password: 'secret',
          role: {
            id: RoleEnum.admin,
            name: 'Admin',
          },
          status: {
            id: StatusEnum.inactive,
            name: 'InActive',
          },
        })
      );

      Logger.log('Admin User Seed: Admin User added!');
    }

    const countUser = await this.repository.count({
      where: {
        role: {
          id: RoleEnum.user,
        },
      },
    });

    if (!countUser) {
      Logger.log(
        "User Seed: User does not exist, I'll create some data for you"
      );

      await this.repository.save(
        this.repository.create({
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com',
          password: 'secret',
          role: {
            id: RoleEnum.user,
            name: 'User',
          },
          status: {
            id: StatusEnum.inactive,
            name: 'InActive',
          },
        })
      );

      Logger.log('User Seed: User added!');
    }
  }
}
