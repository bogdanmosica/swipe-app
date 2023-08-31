import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from '../../../roles/entities/role.entity';
import { RoleEnum } from '../../../roles/roles.enum';
import { Repository } from 'typeorm';

@Injectable()
export class RoleSeedService {
  constructor(
    @InjectRepository(Role)
    private repository: Repository<Role>
  ) {}

  async run() {
    const countSuper = await this.repository.count({
      where: {
        id: RoleEnum.super,
      },
    });

    if (!countSuper) {
      Logger.log(
        "Super Role Seed: Super roles does not exist, I'll create some data for you"
      );
      await this.repository.save(
        this.repository.create({
          id: RoleEnum.super,
          name: 'Super',
        })
      );

      Logger.log('Super Role Seed: Super role added!');
    }

    const countAdmin = await this.repository.count({
      where: {
        id: RoleEnum.admin,
      },
    });

    if (!countAdmin) {
      Logger.log(
        "Admin Role Seed: Admin role does not exist, I'll create some data for you"
      );
      await this.repository.save(
        this.repository.create({
          id: RoleEnum.admin,
          name: 'Admin',
        })
      );
      Logger.log('Admin Role Seed: Admin role added!');
    }

    const countUser = await this.repository.count({
      where: {
        id: RoleEnum.user,
      },
    });

    if (!countUser) {
      Logger.log(
        "User Role Seed: User role does not exist, I'll create some data for you"
      );
      await this.repository.save(
        this.repository.create({
          id: RoleEnum.user,
          name: 'User',
        })
      );

      Logger.log('User Role Seed: User role added!');
    }
  }
}
