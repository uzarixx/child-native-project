import { IsArray } from 'class-validator';


export class CreateQuestionsDto {
  @IsArray({ message: 'Is not a array' })
  readonly questions: [{ answer: string, question: string, imageLink: string, gameId: number }];
}