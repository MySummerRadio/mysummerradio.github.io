import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    published: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const sidebars = defineCollection({
  loader: glob({ pattern: "sidebar-*.yaml", base: "./src/content" }),
  schema: z.object({
    sections: z.array(
      z.object({
        heading: z.string(),
        text: z.string(),
      }),
    ),
  }),
});

export const collections = { blog, sidebars };
