import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { RpcGlobalExceptionInterceptor } from './interceptors/rpcglobal.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Task-8 Blog-Post PlateForm')
    .setDescription('Implement Clean Code, Validations, JWT Auth, API')
    .setVersion('8.0')
    .addTag('JWT Auth & Guards')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); 
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useGlobalInterceptors(new RpcGlobalExceptionInterceptor());
  await app.listen(process.env.PORT ?? 3000); 
}
bootstrap();
