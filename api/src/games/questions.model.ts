import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import { Game } from './game.model';
import { Variants } from './variants.model';


interface QuestionsCreationAttrs {
  answer: string;
  question: string;
  imageLink: string;
  gameId: number;
}

@Table({ tableName: 'questions' })
export class Questions extends Model<Questions, QuestionsCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  @Column({ type: DataType.STRING, allowNull: false })
  answer: string;
  @Column({ type: DataType.STRING, allowNull: false })
  question: string;
  @Column({ type: DataType.STRING })
  imageLink: string;
  @ForeignKey(() => Game)
  @Column({ type: DataType.INTEGER })
  gameId: number;

  @HasMany(() => Variants)
  variants: Variants[];

}
