import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swaggerの設定を定義
  const config = new DocumentBuilder()
    .setTitle('APIドキュメント')
    .setDescription('APIの説明文')
    .setVersion('1.0')
    .addBearerAuth() // 必要に応じて認証を追加
    .build();

  // ドキュメントを生成
  const document = SwaggerModule.createDocument(app, config);

  // Swagger UIを設定（例: /apiにアクセス）
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
