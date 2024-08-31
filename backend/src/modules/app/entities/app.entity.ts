// src/modules/app/entities/app.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@Schema()
@ObjectType()
export class App extends Document {
  @Field(() => ID) // Decorador GraphQL para o campo ID
  _id: string;  // O campo "_id" é o padrão do MongoDB para IDs

  @Field()
  @Prop()
  name: string;

  @Field()
  @Prop()
  email: string;

  @Field({ nullable: true })
  @Prop()
  age?: number;
}

export const AppSchema = SchemaFactory.createForClass(App);
