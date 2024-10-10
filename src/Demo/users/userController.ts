import { Request, Response } from 'express';
// import userService from './userService'; // Este sería el servicio que interactúa con la base de datos

const createUser = async (_req: Request, res: Response) => {
    try {
        // const user = await userService.createUser(req.body); // Suponiendo que `userService.createUser` maneje la lógica de creación
        // res.status(201).json(user);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'Error desconocido' });
        }
    }
};

const getAllUsers = async (_: Request, res: Response) => {
    try {
        console.log('Test de endpoint')
        // const users = await userService.getAllUsers();
        // res.status(200).json(users);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'Error desconocido' });
        }
    }
};

const getUserById = async (_req: Request, res: Response) => {
    try {
        // const user = await userService.getUserById(req.params.id);
        // if (!user) {
        //     return res.status(404).json({ message: 'Usuario no encontrado' });
        // }
        // res.status(200).json(user);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'Error desconocido' });
        }
    }
};

const updateUser = async (_req: Request, res: Response) => {
    try {
        // const updatedUser = await userService.updateUser(req.params.id, req.body);
        // if (!updatedUser) {
        //     return res.status(404).json({ message: 'Usuario no encontrado' });
        // }
        // res.status(200).json(updatedUser);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'Error desconocido' });
        }
    }
};

const deleteUser = async (_req: Request, res: Response) => {
    try {
        // const deleted = await userService.deleteUser(req.params.id);
        // if (!deleted) {
        //     return res.status(404).json({ message: 'Usuario no encontrado' });
        // }
        // res.status(200).json({ message: 'Usuario eliminado correctamente' });
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
