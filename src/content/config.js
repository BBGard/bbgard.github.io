// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const projectCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: ({ image }) => z.object({
    title: z.string(),
    info: z.string(),
    tags: z.array(z.string()),
    blogLink: z.string(),
    extLink: z.string(),
    image: image(),
    imgAlt: z.string(),
    imgLink: z.string(),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'project': projectCollection,
};
