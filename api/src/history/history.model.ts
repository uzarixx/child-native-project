import {
  Column,
  DataType, ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../users/users.model';
import { Game } from '../games/game.model';


interface HistoryCreationAttrs {
  userId: number;
  gameId: number;
}

@Table({ tableName: 'history' })
export class History extends Model<History, HistoryCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  userId: string;
  @ForeignKey(() => Game)
  @Column({ type: DataType.INTEGER, allowNull: false })
  gameId: string;
}
