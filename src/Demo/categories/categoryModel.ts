import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database'; 

class Category extends Model {}

Category.init({
  category_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  category_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true, // Campo opcional
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW, // Establece la fecha y hora actual por defecto
  },
}, {
  sequelize, // Instancia de Sequelize importada
  modelName: 'Category',
  tableName: 'categories', // Especifica el nombre de la tabla si es necesario
  timestamps: false, // Deshabilita timestamps automáticos (createdAt, updatedAt)
});

export default Category;