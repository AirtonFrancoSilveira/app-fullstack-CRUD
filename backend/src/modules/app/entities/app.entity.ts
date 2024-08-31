// src/modules/app/entities/app.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';

@Schema()
@ObjectType() // Decorador necessário para GraphQL
export class App extends Document {
  @Field() // Decorador para expor o campo no schema GraphQL
  @Prop()
  name: string;

  @Field()
  @Prop()
  email: string;s

  @Field({ nullable: true })
  @Prop()
  age?: number;
}

export const AppSchema = SchemaFactory.createForClass(App);
