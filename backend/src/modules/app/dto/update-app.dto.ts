// src/modules/app/dto/update-app.dto.ts
import { InputType, Field, PartialType, Float } from '@nestjs/graphql';
import { CreateAppDto, NotaBimestreInput } from './create-app.dto';

@InputType()
export class UpdateAppDto extends PartialType(CreateAppDto) {
  @Field()
  id: string;

  @Field(() => [NotaBimestreInput], { nullable: true })
  notasPorBimestre?: NotaBimestreInput[];
}
