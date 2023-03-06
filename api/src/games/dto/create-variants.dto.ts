import { IsArray } from 'class-validator';

export class CreateVariantsDto {
  @IsArray({ message: 'Is not a array' })
  readonly variants: [{ questionId: number, textVariant: string }];
}