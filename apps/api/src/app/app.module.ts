import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { FavoriteAuthorsModule } from './favorite-authors/favorite-authors.module';
import { FavoriteQuotesModule } from './favorite-quotes/favorite-quotes.module';
import { VideoBackgroundsModule } from './video-backgrounds/video-backgrounds.module';
import { ColourPalettesModule } from './colour-palettes/colour-palettes.module';
import { DatabaseModule } from './database/database.module';
import { SeedModule } from './database/seed/seed.module';
import { AdministrationEntitiesModule } from './administration-entities/administration-entities.module';

@Module({
  imports: [
    FavoriteAuthorsModule,
    FavoriteQuotesModule,
    VideoBackgroundsModule,
    ColourPalettesModule,
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
    DatabaseModule,
    SeedModule,
    AdministrationEntitiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
