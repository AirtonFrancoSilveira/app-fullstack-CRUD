// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppService } from './modules/app/services/app.service';
import { AppResolver } from './modules/app/resolvers/app.resolver';
import { App, AppSchema } from './modules/app/entities/app.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: App.name, schema: AppSchema }]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,  // ou 'schema.gql' para salvar o arquivo
    }),
  ],
  providers: [AppService, AppResolver],
})
export class AppModule {}
