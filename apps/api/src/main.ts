/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';

import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';
import { AllConfigType } from './app/config/config.type';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SeedService } from './app/database/seed/seed.service';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: {
      origin: ['http://localhost:4200', process.env.SWIPE_APP_WEB_DOMAIN],
      allowedHeaders: ['Content-Type'],
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      credentials: true,
    },
    snapshot: true,
  });
  app.get(SeedService).runSeed();
  app.use(cookieParser.default());
  const configService = app.get(ConfigService<AllConfigType>);

  app.setGlobalPrefix(
    configService.getOrThrow('app.apiPrefix', { infer: true }),
    {
      exclude: ['/'],
    }
  );

  if (process.env.NODE_ENV !== 'production') {
    const options = new DocumentBuilder()
      .setTitle('API')
      .setDescription('API docs')
      .setVersion('1.0')
      .addCookieAuth('token')
      .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('docs', app, document);
  }

  const port = process.env.PORT || 3000;
  await app.listen(
    configService.getOrThrow('app.port', { infer: true }) || port
  );
  Logger.log(`🚀 Application is running on: ${await app.getUrl()}`);

  return app;
}

bootstrap();
