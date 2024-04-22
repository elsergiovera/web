// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// Define a `type` and `schema` for each collection
const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      id: z.number(),
      name: z.string(),
      title: z.string(),
      isFeatured: z.boolean(),
      url: z.string(),
      github: z.string()
    })
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  projects: projectsCollection,
};