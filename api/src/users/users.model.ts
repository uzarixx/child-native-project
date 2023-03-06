import {
  Column,
  DataType,
  Model,
  Table,
  HasMany,
} from 'sequelize-typescript';
import { History } from '../history/history.model';


interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;
  @Column({ type: DataType.STRING, defaultValue: 'USER' })
  role: string;
  @HasMany(() => History)
  history: History[];
}
