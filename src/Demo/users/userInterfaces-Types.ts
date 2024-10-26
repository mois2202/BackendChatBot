import { Optional } from 'sequelize';
import UserModel from './userModel'


// Interfaz completa para manejo interno de la aplicacion
export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    role: UserRole;
    created_at: Date;  
  }

  // Interfaz sin contraseña para la exposicion de usuarios
  export type UserWithoutPassword = Omit<User, 'password'>;

  //Enum para el role del user
  export enum UserRole {
    Admin = '1',
    Employee = '2',
    Seller = '3',
  };


// Interfaz para manejo de datos opcionales autogenerados por la DB solo en contexto de creacion de registros
export interface IUserCreation extends Optional<User, 'id' | 'created_at'> {}


export interface IUserRepository {
  createUser(userDTO: IUserCreation): Promise<UserModel>;
  getAllUsersWithoutPassword(): Promise<UserWithoutPassword[]>;
  getUserWithoutPassword(id: number): Promise<UserWithoutPassword | null>;
  updateUser(id: number, updatedData: Partial<User>): Promise<UserModel | null>;
  deleteUser(id: number): Promise<boolean>;
}

export interface IUserService {
  createUser(userDTO: IUserCreation): Promise<UserModel>;
  getAllUsersWithoutPassword(): Promise<UserWithoutPassword[]>;
  getUserWithoutPassword(id: number): Promise<UserWithoutPassword | null>;
  updateUser(id: number, updatedData: Partial<User>): Promise<UserModel | null>;
  deleteUser(id: number): Promise<boolean>;
}