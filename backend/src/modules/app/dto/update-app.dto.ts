// src/modules/app/dto/update-app.dto.ts
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateAppDto } from './create-app.dto';

@InputType()
export class UpdateAppDto extends PartialType(CreateAppDto) {
  @Field()
  id: string;
}
