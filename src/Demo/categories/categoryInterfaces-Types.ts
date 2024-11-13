import { Optional } from 'sequelize';
import CategoryModel from './categoryModel';

export interface ICategory {
    id: number;
    category_name: string;
    description?: string;
    created_at: Date;
  }
  
  export interface ICategoryService {
    createCategory(categoryData: ICategoryCreation): Promise<CategoryModel>;
    getAllCategories(): Promise<CategoryModel[]>;
    getCategoryById(id: number): Promise<CategoryModel | null>;
    updateCategory(id: number, updatedData: Partial<ICategory>): Promise<CategoryModel | null>;
    deleteCategory(id: number): Promise<boolean>;
  }
  
  export interface ICategoryRepository {
    createCategory(categoryData: ICategoryCreation): Promise<CategoryModel>;
    getAllCategories(): Promise<CategoryModel[]>;
    getCategoryById(id: number): Promise<CategoryModel | null>;
    updateCategory(id: number, updatedData: Partial<ICategory>): Promise<CategoryModel | null>;
    deleteCategory(id: number): Promise<boolean>;
  }

  export interface ICategoryCreation extends Optional<ICategory, 'id' | 'created_at'> {}