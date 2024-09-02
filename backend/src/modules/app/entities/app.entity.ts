import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field, ID, Float } from '@nestjs/graphql';

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

  @Field(() => [NotaBimestre], { nullable: true })
  @Prop({ type: [{ bimestre: String, nota: Number }], default: [] })
  notasPorBimestre?: NotaBimestre[]; // Notas por bimestre

  @Field({ nullable: true })
  @Prop()
  media?: number; // Média das notas

  @Field({ nullable: true })
  @Prop()
  status?: string; // Status do aluno

  @Field({ nullable: true })
  @Prop()
  curso?: string;

  @Field({ nullable: true })
  @Prop()
  turma?: string;
}

@ObjectType()
export class NotaBimestre {
  @Field()
  bimestre: string;

  @Field(() => Float)
  nota: number;
}

export const AppSchema = SchemaFactory.createForClass(App);
