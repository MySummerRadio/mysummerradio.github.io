import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    published: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const reviews = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/reviews" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    artist: z.string().optional(),
    cover: image(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    published: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog, reviews };
