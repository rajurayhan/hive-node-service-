import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvConfigService } from './common/services/env-config.service';
import swagger from './common/swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(EnvConfigService);
  const port = configService.get('APP_PORT');
  const docTag = `/docs`;
  swagger(app, configService, docTag);
  await app.listen(port);
  console.log('Application is listening on port', `http://localhost:${port}${docTag}`);

}
bootstrap();
