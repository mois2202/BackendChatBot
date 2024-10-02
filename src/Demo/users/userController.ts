import { Request, Response } from 'express';
import userService from './userService';

class UserController {
    // Create a new user
    async createUser(req: Request, res: Response) {
        try {
            const user = await userService.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Get all users
    async getAllUsers(req: Request, res: Response) {
        try {
            const users = await userService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Get a user by ID
    async getUserById(req: Request, res: Response) {
        try {
            const user = await userService.getUserById(req.params.id);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Update a user by ID
    async updateUser(req: Request, res: Response) {
        try {
            const updatedUser = await userService.updateUser(req.params.id, req.body);
            if (updatedUser) {
                res.status(200).json(updatedUser);
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Delete a user by ID
    async deleteUser(req: Request, res: Response) {
        try {
            const deletedUser = await userService.deleteUser(req.params.id);
            if (deletedUser) {
                res.status(200).json({ message: 'User deleted' });
            } else {
                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default new UserController();
