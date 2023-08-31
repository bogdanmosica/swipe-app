import path from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeaderResolver, I18nModule } from 'nestjs-i18n';
import { DevtoolsModule } from '@nestjs/devtools-integration';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FavoriteAuthorsModule } from './favorite-authors/favorite-authors.module';
import { FavoriteQuotesModule } from './favorite-quotes/favorite-quotes.module';
import { VideoBackgroundsModule } from './video-backgrounds/video-backgrounds.module';
import { ColourPalettesModule } from './colour-palettes/colour-palettes.module';
import { SeedModule } from './database/seed/seed.module';
import { AdministrationEntitiesModule } from './administration-entities/administration-entities.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { MailModule } from './mail/mail.module';
import { ForgotModule } from './forgot/forgot.module';
import { SessionModule } from './session/session.module';
import databaseConfig from './config/database.config';
import authConfig from './config/auth.config';
import appConfig from './config/app.config';
import mailConfig from './config/mail.config';
import fileConfig from './config/file.config';
import facebookConfig from './config/facebook.config';
import googleConfig from './config/google.config';
import twitterConfig from './config/twitter.config';
import appleConfig from './config/apple.config';
import { TypeOrmConfigService } from './database/typeorm-config.service';
import { AllConfigType } from './config/config.type';
import { MailerModule } from './mailer/mailer.module';

@Module({
  imports: [
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
      port: 8000,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        databaseConfig,
        authConfig,
        appConfig,
        mailConfig,
        fileConfig,
        facebookConfig,
        googleConfig,
        twitterConfig,
        appleConfig,
      ],
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService],
    }),
    I18nModule.forRootAsync({
      useFactory: (configService: ConfigService<AllConfigType>) => ({
        fallbackLanguage: configService.getOrThrow('app.fallbackLanguage', {
          infer: true,
        }),
        loaderOptions: {
          path: path.join(__dirname + '/assets/i18n'),
          watch: true,
        },
      }),
      resolvers: [
        {
          use: HeaderResolver,
          useFactory: (configService: ConfigService<AllConfigType>) => {
            return [
              configService.get('app.headerLanguage', {
                infer: true,
              }),
            ];
          },
          inject: [ConfigService],
        },
      ],
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
    FavoriteAuthorsModule,
    FavoriteQuotesModule,
    VideoBackgroundsModule,
    ColourPalettesModule,
    AdministrationEntitiesModule,
    AuthModule,
    UsersModule,
    FilesModule,
    MailModule,
    // AuthFacebookModule,
    // AuthGoogleModule,
    // AuthTwitterModule,
    // AuthAppleModule,
    ForgotModule,
    SessionModule,
    MailerModule,
    SeedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
