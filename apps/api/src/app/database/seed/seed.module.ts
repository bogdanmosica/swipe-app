import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Joi = require('joi');

import { ColourPalettesSeedModule } from './colour-palettes-seed/colour-palettes-seed.module';
import { FavoriteAuthorsSeedModule } from './favorite-authors-seed/favorite-authors-seed.module';
import { FavoriteQuotesSeedModule } from './favorite-quotes-seed/favorite-quotes-seed.module';
import { VideoBackgroundsSeedModule } from './video-backgrounds-seed/video-backgrounds-seed.module';
import { FavoriteQuote } from '../../favorite-quotes/entities/favorite-quote.entity';
import { FavoriteAuthor } from '../../favorite-authors/entities/favorite-author.entity';
import { VideoBackground } from '../../video-backgrounds/entities/video-background.entity';
import { ColourPalette } from '../../colour-palettes/entities/colour-palette.entity';
import { RoleSeedModule } from './role-seed/role-seed.module';
import { StatusSeedModule } from './status-seed/status-seed.module';
import { UserSeedModule } from './user-seed/user-seed.module';
import { Role } from '../../roles/entities/role.entity';
import { User } from '../../users/entities/user.entity';
import { Status } from '../../statuses/entities/status.entity';
import { FileEntity } from '../../files/entities/file.entity';
import databaseConfig from '../../config/database.config';
import appConfig from '../../config/app.config';
import { TypeOrmConfigService } from '../typeorm-config.service';

@Module({
  imports: [
    RoleSeedModule,
    StatusSeedModule,
    UserSeedModule,
    FavoriteAuthorsSeedModule,
    FavoriteQuotesSeedModule,
    VideoBackgroundsSeedModule,
    ColourPalettesSeedModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, appConfig],
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService],
    }),
  ],
})
export class SeedModule {}
