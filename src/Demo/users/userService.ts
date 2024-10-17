import { IUser, UserWithoutPassword, IUserCreation } from './UsersInterfacesTypes/IUser';
import UserRepository from './userRepository';
import UserModel from '../models/userModel';

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    // Servicio para crear un usuario
    public async createUser(userDTO: IUserCreation): Promise<UserModel> {
        // Aquí puedes añadir lógica adicional como encriptar la contraseña
        // Por ejemplo, bcrypt.hash(userDTO.password, 10)
        return await this.userRepository.createUser(userDTO);
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
    public async updateUser(id: number, updatedData: Partial<IUser>): Promise<UserModel | null> {
        const user = await this.userRepository.updateUser(id, updatedData);

        return user;
    }

    // Servicio para eliminar un usuario por su ID
    public async deleteUser(id: number): Promise<boolean> {
        const isDeleted = await this.userRepository.deleteUser(id);
        return isDeleted;
    }
}

export default new UserService();
