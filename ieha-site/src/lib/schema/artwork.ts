import { z } from 'zod';

export const artworkSchema = z.object({
  id: z.string(),
  title: z.string(),
  artist: z.string().optional(),
  year: z.string().optional(),
  medium: z.string().optional(),
  dimensions: z.string().optional(),
  institution: z.string().optional(),
  iiifManifest: z.string().url().optional(),
  thumbnail: z.string().url().optional(),
});

export type Artwork = z.infer<typeof artworkSchema>;
