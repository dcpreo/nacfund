import { z } from 'zod';

export const publicationSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  type: z.enum(['paper', 'catalog', 'report']).optional(),
  year: z.string().optional(),
  authors: z.array(z.string()).optional(),
});

export type Publication = z.infer<typeof publicationSchema>;
