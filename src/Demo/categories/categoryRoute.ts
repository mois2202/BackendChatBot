import { Router } from 'express';
import { schemaValidator } from '../shared/auth/schemaValidatorMiddleware';
import { creationCategorySchema } from './categorySchema/categorySchema'; 
import { createCategoryModule } from './createCategoryModule';

const router = Router();

// Crear el módulo de categoría
const categoryController = createCategoryModule();

// Crear una nueva categoría
router.post('/categories', schemaValidator(creationCategorySchema), categoryController.createCategory);

// Obtener todas las categorías
router.get('/categories', categoryController.getAllCategories);

// Obtener una categoría por su ID
router.get('/categories/:id', categoryController.getCategoryById);

// Actualizar una categoría por su ID
router.put('/categories/:id', categoryController.updateCategory);

// Eliminar una categoría por su ID
router.delete('/categories/:id', categoryController.deleteCategory);

export const categoryRoutes = router;