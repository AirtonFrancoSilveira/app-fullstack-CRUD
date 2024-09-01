// src/user/dto/create-user.dto.ts
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserDto {
  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  role: string;
}
