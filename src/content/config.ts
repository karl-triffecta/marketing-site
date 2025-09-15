import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        date: z.string(), // or z.date() with ISO format
        image: image().optional(),
        alt: z.string(),
        description: z.string(),
        tags: z.string().optional(),
        author: z
          .object({
            name: z.string(),
            avatar: image(),
          })
          .optional(),
        external: z.boolean().optional(),
        href: z.string().optional(),
        platform: z.string().optional(),
        postImage: image().optional(),
        postImageTitle: z.string().optional(),
        postImageCaption: z.string().optional(),
        postImageUrl: z.string().url().optional(),
      })
      .catchall(z.unknown()),
});

export const collections = {
  posts,
};
