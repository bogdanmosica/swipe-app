import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Joi = require('joi');

import { SeedModule } from './seed/seed.module';
import { FavoriteQuote } from '../favorite-quotes/entities/favorite-quote.entity';
import { FavoriteAuthor } from '../favorite-authors/entities/favorite-author.entity';
import { VideoBackground } from '../video-backgrounds/entities/video-background.entity';
import { ColourPalette } from '../colour-palettes/entities/colour-palette.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        DATABASE_HOST: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
        DATABASE_USERNAME: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),
        DATABASE_NAME: Joi.string().required(),
        PORT: Joi.number(),
      }),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_HOST'),
        port: configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        entities: [
          FavoriteQuote,
          FavoriteAuthor,
          VideoBackground,
          ColourPalette,
        ],
        synchronize: true,
      }),
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class DatabaseModule {}
