import CategoryController from './categoryController';
import CategoryRepository from './categoryRepository';
import CategoryService from './categoryService';

export const createCategoryModule = () => {
    const categoryRepository = new CategoryRepository();
    const categoryService = new CategoryService(categoryRepository);
    const categoryController = new CategoryController(categoryService);
    return categoryController;
};
