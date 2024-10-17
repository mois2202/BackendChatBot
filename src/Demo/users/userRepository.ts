import { IUser, UserWithoutPassword, IUserCreation } from './UsersInterfacesTypes/IUser';
import UserModel from '../models/userModel';

export default class UserRepository{
    
    async createUser(userDTO: IUserCreation): Promise<UserModel> {
    const user = await UserModel.create({
        name: userDTO.name,
        email: userDTO.email,
        password: userDTO.password, // Asegúrate de encriptar aquí la contraseña
        role: userDTO.role
    });
    return user;
}

async getAllUsersWithoutPassword() : Promise<UserWithoutPassword[]> {

    const users: IUser[] = await UserModel.findAll();

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


async getUserWithoutPassword (id: number): Promise<UserWithoutPassword | null> {
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

async updateUser(id: number, updatedData: Partial<IUser>): Promise<UserModel | null>{
    const user = await UserModel.findByPk(id);

    if (!user) {
        return null;
    }

    await user.update(updatedData);
    return user;
};



async deleteUser(id: number): Promise<boolean> {
    const deletedCount = await UserModel.destroy({
        where: { id }
    });
    return deletedCount > 0; 
};
}

