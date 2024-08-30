// app/dto/create-app.dto.ts
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateAppDto {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  age?: number;
}
