import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GrpcToHttpExceptionInterceptor } from './config/interceptors/grpc-to-http-interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new GrpcToHttpExceptionInterceptor());
  await app.listen(3000);
}
bootstrap();
