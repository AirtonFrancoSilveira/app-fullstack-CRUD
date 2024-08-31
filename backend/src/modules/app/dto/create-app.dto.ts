// src/modules/app/dto/create-app.dto.ts
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateAppDto {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  age?: number;

  @Field({ nullable: true })
  nota?: number;

  @Field({ nullable: true })
  bimestre?: string;

  @Field({ nullable: true })
  curso?: string;

  @Field({ nullable: true })
  turma?: string;  // Campo de saída, não precisa ser enviado no input
}
