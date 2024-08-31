// src/database/database.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,  // Torna o ConfigModule acessível globalmente
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URI'), // Utiliza a variável de ambiente DATABASE_URI
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [MongooseModule],  // Exporta o MongooseModule para que outros módulos possam usá-lo
})
export class DatabaseModule {}
