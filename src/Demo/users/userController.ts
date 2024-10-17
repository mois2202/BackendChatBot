import { Request, Response } from 'express';
import userService from './userService'; // Servicio que interactúa con la base de datos

// Crear un nuevo usuario
const createUser = async (req: Request, res: Response) => {
    try {
        const user = await userService.createUser(req.body); // Lógica de creación de usuario
        res.status(201).json(user); // Respuesta con el usuario creado
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'Error desconocido' });
        }
    }
};

// Obtener todos los usuarios (sin contraseña)
const getAllUsers = async (_: Request, res: Response) => {
    try {
        const users = await userService.getAllUsersWithoutPassword(); // Lógica para obtener todos los usuarios sin contraseña
        res.status(200).json(users);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'Error desconocido' });
        }
    }
};

// Obtener un usuario por ID (sin contraseña)
const getUserById = async (req: Request, res: Response) => {
    try {
        const user = await userService.getUserWithoutPassword(parseInt(req.params.id)); // Lógica para obtener usuario por ID
        if (!user) {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'Error desconocido' });
        }
    }
};


const updateUser = async (req: Request, res: Response) => {
    try {
        const updatedUser = await userService.updateUser(parseInt(req.params.id), req.body); // Lógica para actualizar usuario
        if (!updatedUser) {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'Error desconocido' });
        }
    }
};


const deleteUser = async (req: Request, res: Response) => {
    try {
        await userService.deleteUser(parseInt(req.params.id)); // Lógica para eliminar usuario
        res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'Error desconocido' });
        }
    }
};

export default {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};
