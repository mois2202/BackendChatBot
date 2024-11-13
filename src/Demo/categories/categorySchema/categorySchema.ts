import { z } from 'zod';

export const creationCategorySchema = z.object({
    body: z.object({
        category_name: z.string().nonempty('El nombre de la categoría es requerido'),
        description: z.string().optional(), 
    }),
});