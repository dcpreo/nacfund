import { z } from 'zod';

export const expertSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  title: z.string().optional(),
  bio: z.string().optional(),
  image: z.string().url().optional(),
});

export type Expert = z.infer<typeof expertSchema>;
