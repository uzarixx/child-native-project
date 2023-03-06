import { IsNumber } from 'class-validator';

export class AddToHistoryDto {
  @IsNumber({}, { message: 'Is not a number' })
  readonly gameId: number;
}