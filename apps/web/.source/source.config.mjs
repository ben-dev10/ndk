// source.config.ts
import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
  defineCollections
} from "fumadocs-mdx/config";
import { z } from "zod";
var docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: frontmatterSchema.extend({
      releaseDate: z.coerce.date().optional(),
      beta: z.boolean().optional(),
      alpha: z.boolean().optional(),
      updated: z.boolean().optional(),
      deprecated: z.boolean().optional(),
      pills: z.string().array().optional(),
      author: z.object({
        name: z.string(),
        url: z.string().optional()
      }).optional()
    })
  },
  meta: {
    schema: metaSchema
  }
});
var source_config_default = defineConfig({
  // lastModifiedTime: "git",
  mdxOptions: {
    providerImportSource: "@/mdx-components"
  }
});
var blogPosts = defineCollections({
  type: "doc",
  dir: "content/blog",
  schema: frontmatterSchema.extend({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.iso.date().or(z.date())
  })
});
export {
  blogPosts,
  source_config_default as default,
  docs
};
