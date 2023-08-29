/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { runSeed } from './app/database/seed/run-seed';
import { ConfigService } from '@nestjs/config';
import { AllConfigType } from './app/config/config.type';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  void runSeed();

  const configService = app.get(ConfigService<AllConfigType>);

  app.setGlobalPrefix(
    configService.getOrThrow('app.apiPrefix', { infer: true }),
    {
      exclude: ['/'],
    }
  );
  const options = new DocumentBuilder()
    .setTitle('API')
    .setDescription('API docs')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  const port = process.env.PORT || 3000;
  await app.listen(
    configService.getOrThrow('app.port', { infer: true }) || port
  );
  Logger.log(`🚀 Application is running on: ${await app.getUrl()}`);

  return app;
}

bootstrap();
