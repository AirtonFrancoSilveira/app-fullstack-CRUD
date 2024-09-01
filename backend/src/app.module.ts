// src/app.module.ts
import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module'; // Rota do módulo Database
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppModule as AppFeatureModule } from './modules/app/app.module'; // Rota do módulo App
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    DatabaseModule, // Importa o módulo DatabaseModule
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    AppFeatureModule,
    AuthModule,
    UserModule
  ],
})
export class AppModule {}
