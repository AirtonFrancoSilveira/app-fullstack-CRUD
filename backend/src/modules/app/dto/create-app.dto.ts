// src/modules/app/dto/create-app.dto.ts
import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class NotaBimestreInput {
  @Field()
  bimestre: string;

  @Field(() => Float)
  nota: number;
}

@InputType()
export class CreateAppDto {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  age?: number;

  @Field(() => [NotaBimestreInput], { nullable: true })
  notasPorBimestre?: NotaBimestreInput[];

  @Field({ nullable: true })
  curso?: string;
}
