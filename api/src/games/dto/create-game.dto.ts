import { IsArray, IsString, Length } from 'class-validator';

export class CreateGameDto {
  @IsString({ message: 'Is not a string' })
  @Length(4, 40, { message: 'min length 4 and max 16' })
  @IsString({})
  readonly name: string;
  @IsString({ message: 'Is not a string' })
  @Length(4, 400, { message: 'min length 4 and max 400' })
  readonly imageLink: string;


}