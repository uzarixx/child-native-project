import {
  Column,
  DataType,
  Model,
  Table,
  HasMany,
} from 'sequelize-typescript';
import { Questions } from './questions.model';
import { History } from '../history/history.model';


interface GameCreationAttrs {
  name: string;
  imageLink: string;
  gameType: string;
}

@Table({ tableName: 'game' })
export class Game extends Model<Game, GameCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;
  @Column({ type: DataType.STRING })
  imageLink: string;
  @Column({ type: DataType.STRING })
  gameType: string;

  @HasMany(() => Questions)
  questions: Questions[];
  @HasMany(() => History)
  history: History[];
}
