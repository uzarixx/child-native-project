import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import * as process from 'process';
import { User } from './users/users.model';
import { AuthModule } from './auth/auth.module';
import { GamesModule } from './games/games.module';
import { Game } from './games/game.model';
import { Questions } from './games/questions.model';
import { History } from './history/history.model';
import { Variants } from './games/variants.model';
import { HistoryModule } from './history/history.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(
        process.env.POSTGRES_PORT,
      ),
      username:
      process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Game, Questions, Variants, History],
      autoLoadModels: true,
      logging: false,
    }),
    UsersModule,
    AuthModule,
    GamesModule,
    HistoryModule,
  ],
})
export class AppModule {
}
