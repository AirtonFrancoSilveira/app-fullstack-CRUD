// src/modules/app/entities/app.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@Schema()
@ObjectType()
export class App extends Document {
  @Field(() => ID)
  _id: string;

  @Field()
  @Prop()
  name: string;

  @Field()
  @Prop()
  email: string;

  @Field({ nullable: true })
  @Prop()
  age?: number;

  @Field({ nullable: true })
  @Prop()
  nota?: number;

  @Field({ nullable: true })
  @Prop()
  bimestre?: string;

  @Field({ nullable: true })
  @Prop()
  curso?: string;

  @Field({ nullable: true })
  @Prop()
  turma?: string;  // Novo campo para a turma
}

export const AppSchema = SchemaFactory.createForClass(App);
