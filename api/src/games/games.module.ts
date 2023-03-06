import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Game } from './game.model';
import { Questions } from './questions.model';
import { Variants } from './variants.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [GamesService],
  controllers: [GamesController],
  imports: [SequelizeModule.forFeature([Game, Questions, Variants]), JwtModule],
  exports: [GamesService]
})
export class GamesModule {
}
