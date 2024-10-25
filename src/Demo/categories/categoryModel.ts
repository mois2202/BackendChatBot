import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { ICategory, ICategoryCreation } from './categoryInterfaces-Types';

@Table({
  tableName: 'categories',  // Nombre de la tabla en la base de datos
  timestamps: false,        // Si no tienes columnas `createdAt` y `updatedAt`
})
class CategoryModel extends Model<ICategory, ICategoryCreation> implements ICategory {

  // Definimos el campo `category_id` como llave primaria y autoincremental
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  public id!: number;

  // Definimos el campo `category_name` como una columna obligatoria con longitud máxima de 100
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  public category_name!: string;

  // Definimos el campo `description` como una columna opcional de tipo texto
  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  public description?: string;

  // Definimos el campo `created_at` con un valor predeterminado de la fecha actual
  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  public created_at!: Date;
}

export default CategoryModel;