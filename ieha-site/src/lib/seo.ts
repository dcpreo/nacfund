import type { Metadata } from 'next';

export function buildMetadata({
  title,
  description,
}: {
  title: string;
  description?: string;
}): Metadata {
  return {
    title: title ? `${title} | materielart.tech` : 'materielart.tech — Material Art',
    description: description ?? 'Platform for material art, creative practice, and artistic research.',
  };
}
