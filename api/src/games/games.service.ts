import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Game } from './game.model';
import { Questions } from './questions.model';
import { Variants } from './variants.model';
import { CreateGameDto } from './dto/create-game.dto';
import { CreateVariantsDto } from './dto/create-variants.dto';
import { CreateQuestionsDto } from './dto/create-questions.dto';

@Injectable()
export class GamesService {
  constructor(
    @InjectModel(Game) private gameRepository: typeof Game,
    @InjectModel(Questions) private questionsRepository: typeof Questions,
    @InjectModel(Variants) private variantsRepository: typeof Variants,
  ) {
  }

  async createGame(dto: CreateGameDto) {
    const game = await this.gameRepository.create({ name: dto.name, imageLink: dto.imageLink });
    return game;
  }

  async createVariants(dto: CreateVariantsDto) {
    const variants = await this.variantsRepository.bulkCreate(dto.variants);
    return variants;
  }

  async createQuestions(dto: CreateQuestionsDto) {
    const questions = await this.questionsRepository.bulkCreate(dto.questions);
    return questions;
  }

  async getGame(dto: number) {
    const game = await this.gameRepository.findOne({ where: { id: dto }, include: { all: true } });
    return game;
  }

  async getAllGames() {
    const words = await this.gameRepository.findAll({ where: { gameType: 'Words' }, limit: 10 });
    const math = await this.gameRepository.findAll({ where: { gameType: 'Math' }, limit: 10 });
    return [{ gameType: 'Words', games: words }, { gameType: 'Math', games: math }];
  }

  async getQuestionById(questionId) {
    const question = await this.questionsRepository.findOne({ where: { id: questionId }, include: { all: true } });
    return question;
  }

  async getGamesById(gamesId: string[]) {
    const games = await this.gameRepository.findAll({ where: { id: gamesId } });
    return games;
  }


}
