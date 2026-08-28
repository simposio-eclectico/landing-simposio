import { defineCollection, z } from 'astro:content';

const escritosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('S1MPOSIO ECLÉCTICO'),
  }),
});

export const collections = {
  escritos: escritosCollection,
};
