import { IUser, UserWithoutPassword, IUserCreation } from './UsersInterfacesTypes/IUser';
import UserModel from '../users/userModel';

// Función que convierte un DTO a modelo de Sequelize
export const createUser = async (userDTO: IUserCreation): Promise<UserModel> => {
    const user = await UserModel.create({
        name: userDTO.name,
        email: userDTO.email,
        password: userDTO.password, // Asegúrate de encriptar aquí la contraseña
        role: userDTO.role
    });
    return user;
}

export const getAllUsersWithoutPassword = async (): Promise<UserWithoutPassword[]> => {
    const users: IUser[] = await UserModel.findAll(); // Obtenemos todos los usuarios

    // Mapeamos los usuarios a la interfaz `IUserWithoutPassword`, omitiendo el campo `password`
    const usersWithoutPassword: UserWithoutPassword[] = users.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        created_at: user.created_at 
    }));
       return usersWithoutPassword;
};

// Función que convierte un modelo de Sequelize a un DTO sin contraseña
export const getUserWithoutPassword = async (id: number): Promise<UserWithoutPassword | null> => {
    const user : IUser | null = await UserModel.findByPk(id);

    if (!user) return null;
    const userWithoutPassword: UserWithoutPassword = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        created_at: user.created_at
    };

    return userWithoutPassword;
}

// Función que actualiza un usuario por su ID
export const updateUser = async (id: number, updatedData: Partial<IUser>): Promise<UserModel | null> => {
    const user = await UserModel.findByPk(id); // Buscamos el usuario por su ID

    if (!user) {
        return null; // Retornamos null si no se encuentra el usuario
    }

    await user.update(updatedData); // Actualizamos los datos del usuario
    return user; // Retornamos el usuario actualizado
};


// Función que elimina un usuario por su ID
export const deleteUser = async (id: number): Promise<boolean> => {
    const deletedCount = await UserModel.destroy({
        where: { id } // Eliminamos el usuario por su ID
    });
    return deletedCount > 0; // Retornamos true si al menos un registro fue eliminado
};
