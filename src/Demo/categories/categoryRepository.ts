import { ICategoryRepository, ICategoryCreation, ICategory } from "./categoryInterfaces-Types";
import CategoryModel from "./categoryModel";

export default class CategoryRepository implements ICategoryRepository {


    // Crear una nueva categoría
    async createCategory(categoryData: ICategoryCreation): Promise<CategoryModel> {
      return await CategoryModel.create(categoryData);
    }
  
    // Obtener todas las categorías
    async getAllCategories(): Promise<CategoryModel[]> {
      return await CategoryModel.findAll();
    }
  
    // Obtener una categoría por su ID
    async getCategoryById(id: number): Promise<CategoryModel | null> {
      return await CategoryModel.findByPk(id);
    }
  
    // Actualizar una categoría por su ID
    async updateCategory(id: number, updatedData: Partial<ICategory>): Promise<CategoryModel | null> {
      const category = await CategoryModel.findByPk(id);
      if (!category) return null;
  
      await category.update(updatedData);
      return category;
    }
  
    // Eliminar una categoría por su ID
    async deleteCategory(id: number): Promise<boolean> {
      const deletedCount = await CategoryModel.destroy({
        where: { id }
      });
      return deletedCount > 0;
    }
  }