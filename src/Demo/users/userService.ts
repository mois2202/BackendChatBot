import { User, UserWithoutPassword, UserCreation, IUserRepository, IUserService } from './userInterfaces-Types';
import UserModel from './userModel';
import bcrypt from 'bcryptjs';

export default class UserService implements IUserService {
    
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    // Servicio para crear un usuario
    public async createUser(userDTO: UserCreation): Promise<UserModel> {
        //Aqui se encripta la contraseña
        const password = await bcrypt.hash(userDTO.password, 10)
        const userForCreate = {
            ...userDTO,
            password
        }
        return await this.userRepository.createUser(userForCreate);
    }

    // Servicio para obtener todos los usuarios sin contraseña
    public async getAllUsersWithoutPassword(): Promise<UserWithoutPassword[]> {
        return await this.userRepository.getAllUsersWithoutPassword();
    }

    // Servicio para obtener un usuario por su ID sin contraseña
    public async getUserWithoutPassword(id: number): Promise<UserWithoutPassword | null> {
        const user = await this.userRepository.getUserWithoutPassword(id);
        return user;
    }

    // Servicio para actualizar un usuario por su ID
    public async updateUser(id: number, updatedData: Partial<User>): Promise<UserModel | null> {
        const user = await this.userRepository.updateUser(id, updatedData);

        return user;
    }

    // Servicio para eliminar un usuario por su ID
    public async deleteUser(id: number): Promise<boolean> {
        const isDeleted = await this.userRepository.deleteUser(id);
        return isDeleted;
    }
}
