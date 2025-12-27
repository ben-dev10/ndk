// @ts-nocheck
import * as __fd_glob_13 from "../content/docs/ui/blocks/sheets/basic-sheet.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/ui/blocks/navs/start-end.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/ui/blocks/heroes/simple-centered.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/ui/primitives/typography.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/ui/primitives/shadcn-radix.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/ui/primitives/section.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/ui/primitives/backgrounds.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/ui/motion/scroll-animations.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/ui/installation.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/ui/index.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/cli/index.mdx?collection=docs"
import { default as __fd_glob_2 } from "../content/docs/ui/meta.json?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/cli/meta.json?collection=docs"
import * as __fd_glob_0 from "../content/blog/ndk-roadmap.mdx?collection=blogPosts"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const blogPosts = await create.doc("blogPosts", "content\blog", {"ndk-roadmap.mdx": __fd_glob_0, });

export const docs = await create.docs("docs", "content\docs", {"cli/meta.json": __fd_glob_1, "ui/meta.json": __fd_glob_2, }, {"cli/index.mdx": __fd_glob_3, "ui/index.mdx": __fd_glob_4, "ui/installation.mdx": __fd_glob_5, "ui/motion/scroll-animations.mdx": __fd_glob_6, "ui/primitives/backgrounds.mdx": __fd_glob_7, "ui/primitives/section.mdx": __fd_glob_8, "ui/primitives/shadcn-radix.mdx": __fd_glob_9, "ui/primitives/typography.mdx": __fd_glob_10, "ui/blocks/heroes/simple-centered.mdx": __fd_glob_11, "ui/blocks/navs/start-end.mdx": __fd_glob_12, "ui/blocks/sheets/basic-sheet.mdx": __fd_glob_13, });