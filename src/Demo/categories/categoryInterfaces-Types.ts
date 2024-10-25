import { Optional } from 'sequelize';

export interface ICategory {
    id: number;
    category_name: string;
    description?: string;
    created_at: Date;
  }
  

  export interface ICategoryCreation extends Optional<ICategory, 'id' | 'created_at'> {}