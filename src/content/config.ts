import { defineCollection, z } from "astro:content";

const topics = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z
      .enum([
        "javascript",
        "typescript",
        "css",
        "html",
        "node",
        "general",
        "UX/UI",
        "devtools",
        "performance",
        "accessibility",
        "security",
        "testing",
        "frameworks",
        "databases",
        "APIs",
        "DX",
      ])
      .default("general"),
    difficulty: z
      .enum(["beginner", "intermediate", "advanced", "n/a"])
      .default("n/a"),
    tags: z.array(z.string()).default([]),
    publishDate: z.coerce.date().default(() => new Date()),
    updatedDate: z.coerce.date().optional(),
    featured: z.boolean().default(false),
    coverImage: z.string().optional(),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
  }),
});

const showcase = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    tech: z.array(z.string()).default([]),
    publishDate: z.date(),
    featured: z.boolean().default(false),
    coverImage: z.string().optional(),
  }),
});

export const collections = {
  topics,
  blog,
  showcase,
};
