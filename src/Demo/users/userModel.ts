import { DataTypes, Model} from 'sequelize';
import { IUser, IUserCreation} from './UsersInterfacesTypes/IUser';
import sequelize from '../config/database';


class UserModel extends Model<IUser, IUserCreation> implements IUser {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public role!: 'admin' | 'employee' | 'seller';
  public created_at!: Date;
}

UserModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('admin', 'employee', 'seller'),
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  }
}, {
  sequelize,
  modelName: 'User',
  timestamps: false,
});

export default UserModel;