import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { CreateVariantsDto } from './dto/create-variants.dto';
import { CreateQuestionsDto } from './dto/create-questions.dto';

@Controller('games')
export class GamesController {

  constructor(private gameService: GamesService) {
  }

  @UsePipes(ValidationPipe)
  @Post('/create-game')
  gameCreate(@Body() dto: CreateGameDto) {
    return this.gameService.createGame(dto);
  }

  @UsePipes(ValidationPipe)
  @Post('/create-questions')
  questionsCreate(@Body() dto: CreateQuestionsDto) {
    return this.gameService.createQuestions(dto);
  }

  @UsePipes(ValidationPipe)
  @Post('/create-variants')
  variantsCreate(@Body() dto: CreateVariantsDto) {

    return this.gameService.createVariants(dto);
  }

  @Get('/get-all')
  getAllGames() {
    return this.gameService.getAllGames();
  }

  @Get('/:gameId')
  getGame(@Param('gameId') gameId: number) {
    return this.gameService.getGame(gameId);
  }

  @Get('/question/:questionId')
  getQuestion(@Param('questionId') questionId: number) {
    return this.gameService.getQuestionById(questionId);
  }


}
