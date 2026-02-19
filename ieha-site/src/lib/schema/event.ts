import { z } from 'zod';

export const eventSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  date: z.string().optional(),
  location: z.string().optional(),
});

export type Event = z.infer<typeof eventSchema>;
