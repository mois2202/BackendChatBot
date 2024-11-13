import { Request, Response } from 'express';
import { ICategoryService } from './categoryInterfaces-Types';

export default class CategoryController {

    private categoryService: ICategoryService;

    constructor(categoryService: ICategoryService) {
        this.categoryService = categoryService;
    }

    // Método para crear una nueva categoría
    createCategory = async (req: Request, res: Response) => {
        try {
            const category = await this.categoryService.createCategory(req.body);
            res.status(201).json(category);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ message: 'Ocurrió un error al crear la categoría.' });
            } else {
                res.status(500).json({ message: 'Error desconocido' });
            }
        }
    };

    // Método para obtener todas las categorías
    getAllCategories = async (_: Request, res: Response) => {
        try {
            const categories = await this.categoryService.getAllCategories();
            res.status(200).json(categories);
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Error desconocido' });
            }
        }
    };

    // Método para obtener una categoría por su ID
    getCategoryById = async (req: Request, res: Response) => {
        try {
            const category = await this.categoryService.getCategoryById(parseInt(req.params.id));
            if (!category) {
                res.status(404).json({ message: 'Categoría no encontrada' });
            } else {
                res.status(200).json(category);
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Error desconocido' });
            }
        }
    };

    // Método para actualizar una categoría por su ID
    updateCategory = async (req: Request, res: Response) => {
        try {
            const updatedCategory = await this.categoryService.updateCategory(parseInt(req.params.id), req.body);
            if (!updatedCategory) {
                res.status(404).json({ message: 'Categoría no encontrada' });
            } else {
                res.status(200).json(updatedCategory);
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Error desconocido' });
            }
        }
    };

    // Método para eliminar una categoría por su ID
    deleteCategory = async (req: Request, res: Response) => {
        try {
            const isDeleted = await this.categoryService.deleteCategory(parseInt(req.params.id));
            if (isDeleted) {
                res.status(200).json({ message: 'Categoría eliminada correctamente' });
            } else {
                res.status(404).json({ message: 'Categoría no encontrada' });
            }
        } catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Error desconocido' });
            }
        }
    };
}