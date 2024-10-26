import { Router } from 'express';
import UserController from './userController';
import UserService from './userService';
import UserRepository from './userRepository';
import { schemaValidator } from '../shared/auth/schemaValidatorMiddleware';
import { creationUserSchema } from './usersSchemas/userSchema';

const router = Router();

const userRepository = new UserRepository();
const userService = new UserService(userRepository); 
const userController = new UserController(userService);

// Create a new user
router.post('/users', schemaValidator(creationUserSchema) ,userController.createUser);

// Get all users
router.get('/users', userController.getAllUsers);

// Get a single user by ID
router.get('/users/:id', userController.getUserById);

// Update a user by ID
router.put('/users/:id', userController.updateUser);

// Delete a user by ID
router.delete('/users/:id', userController.deleteUser);

export const demoUserRoutes = router;
