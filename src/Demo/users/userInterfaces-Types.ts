import { Optional } from 'sequelize';


// Interfaz completa para manejo interno de la aplicacion
export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    role: UserRole;
    created_at: Date;  
  }

  export enum UserRole {
    Admin = '1',
    Employee = '2',
    Seller = '3',
  };

  // Type que omite la contraseña
export type UserWithoutPassword = Omit<IUser, 'password'>;


// Interfaz para manejo de datos opcionales autogenerados por la DB solo en contexto de creacion de registros
export interface IUserCreation extends Optional<IUser, 'id' | 'created_at'> {}
