import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/db'; // Falta crear el archivo de configuracion de Sequalize

class User extends Model {}

User.init(
    {
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
    },
    {
        sequelize,
        modelName: 'User',
    }
);

export default User;
