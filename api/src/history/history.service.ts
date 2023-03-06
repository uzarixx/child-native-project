import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { History } from './history.model';
import { AddToHistoryDto } from './dto/add-to-history.dto';
import { Game } from '../games/game.model';
import { GamesService } from '../games/games.service';
import { Op } from 'sequelize';

@Injectable()
export class HistoryService {
  constructor(@InjectModel(History) private historyRepository: typeof History, private gamesService: GamesService) {
  }

  async addToHistory(dto: AddToHistoryDto, userId: number) {
    const candidateHistory = await this.historyRepository.findAll({
      where: {
        userId: userId,
        gameId: dto.gameId,
      },
    });
    if (candidateHistory.length) {
      throw new HttpException('You is passed this game', HttpStatus.FORBIDDEN);
    }
    const history = await this.historyRepository.create({ gameId: dto.gameId, userId });
    return history;
  }

  async getFromHistory(userId: number) {
    const history = await this.historyRepository.findAll({ where: { userId } });
    const games = await this.gamesService.getGamesById(history.map((el) => el.gameId));
    return games;
  }

}
