import { ICategoryService, ICategoryCreation, ICategoryRepository, ICategory} from "./categoryInterfaces-Types";
import CategoryModel from "./categoryModel";

export default class CategoryService implements ICategoryService {
    private categoryRepository: ICategoryRepository;
  
    constructor(categoryRepository: ICategoryRepository) {
      this.categoryRepository = categoryRepository;
    }
  
    // Servicio para crear una nueva categoría
    public async createCategory(categoryData: ICategoryCreation): Promise<CategoryModel> {
      return await this.categoryRepository.createCategory(categoryData);
    }
  
    // Servicio para obtener todas las categorías
    public async getAllCategories(): Promise<CategoryModel[]> {
      return await this.categoryRepository.getAllCategories();
    }
  
    // Servicio para obtener una categoría por su ID
    public async getCategoryById(id: number): Promise<CategoryModel | null> {
      return await this.categoryRepository.getCategoryById(id);
    }
  
    // Servicio para actualizar una categoría por su ID
    public async updateCategory(id: number, updatedData: Partial<ICategory>): Promise<CategoryModel | null> {
      return await this.categoryRepository.updateCategory(id, updatedData);
    }
  
    // Servicio para eliminar una categoría por su ID
    public async deleteCategory(id: number): Promise<boolean> {
      return await this.categoryRepository.deleteCategory(id);
    }
  }