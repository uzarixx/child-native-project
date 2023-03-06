import { IsNumber } from 'class-validator';

export class GetGameDto {

  @IsNumber({}, {message: 'Is not a number'})
  readonly gameId: number
}