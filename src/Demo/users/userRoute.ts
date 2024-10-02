import { Router } from 'express';
import userController from './userController';

const router = Router();

// Create a new user
router.post('/users', userController.createUser);

// Get all users
router.get('/users', userController.getAllUsers);

// Get a single user by ID
router.get('/users/:id', userController.getUserById);

// Update a user by ID
router.put('/users/:id', userController.updateUser);

// Delete a user by ID
router.delete('/users/:id', userController.deleteUser);

export const demoUserRoutes = router;
