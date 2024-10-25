import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, Unique } from 'sequelize-typescript';
import { IUser, IUserCreation, UserRole } from './userInterfaces-Types';

// Usamos el decorador @Table para indicar que es una tabla de la base de datos
@Table({
  tableName: 'users',  // Nombre de la tabla en la base de datos
  timestamps: false,   // Si no tienes columnas `createdAt` y `updatedAt`
})
class UserModel extends Model<IUser, IUserCreation> implements IUser {

  // Definimos el campo `id` como llave primaria
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  public id!: number;

  // Definimos el campo `name` como una columna obligatoria
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public name!: string;

  // Definimos el campo `email` como una columna única y obligatoria
  @Unique
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public email!: string;

  // Definimos el campo `password` como una columna obligatoria
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public password!: string;

  // Definimos el campo `role` con un ENUM para tipos de usuario
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      isIn: [[...Object.values(UserRole)]],  // Validamos que el valor esté dentro del rango de UserRole
    }
  })
  public role!: UserRole;

  // Definimos el campo `created_at` con un valor predeterminado de la fecha actual
  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  public created_at!: Date;
}

export default UserModel;
