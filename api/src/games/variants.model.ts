import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
} from 'sequelize-typescript';
import { Questions } from './questions.model';


interface VariantsCreationAttrs {
  questionId: number;
  textVariant: string;
}

@Table({ tableName: 'variants' })
export class Variants extends Model<Variants, VariantsCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  @Column({ type: DataType.STRING, allowNull: false })
  textVariant: string;
  @ForeignKey(() => Questions)
  @Column({ type: DataType.INTEGER })
  questionId: number;
}
