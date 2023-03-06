import { Module } from '@nestjs/common';
import { HistoryController } from './history.controller';
import { HistoryService } from './history.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { History } from './history.model';
import { JwtModule } from '@nestjs/jwt';
import { GamesModule } from '../games/games.module';

@Module({
  controllers: [HistoryController],
  providers: [HistoryService],
  imports: [SequelizeModule.forFeature([History]), JwtModule, GamesModule],
})
export class HistoryModule {
}
