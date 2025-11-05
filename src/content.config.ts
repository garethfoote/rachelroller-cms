// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const projects = defineCollection({ 
    // loader: glob({ pattern: "**/*.md", base: "./src/pages/projects" }),
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        gallery: z.array(z.string()).optional(),   
        summary: z.string().optional(),
        draft: z.boolean().default(false),
        date: z.coerce.date(), // will parse ISO strings reliably
    })
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    intro: z.string().optional(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { projects, pages };