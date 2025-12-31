// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  blogPosts: create.doc("blogPosts", {"ndk-roadmap.mdx": () => import("../content/blog/ndk-roadmap.mdx?collection=blogPosts"), }),
  docs: create.doc("docs", {"ui/index.mdx": () => import("../content/docs/ui/index.mdx?collection=docs"), "ui/installation.mdx": () => import("../content/docs/ui/installation.mdx?collection=docs"), "cli/index.mdx": () => import("../content/docs/cli/index.mdx?collection=docs"), "ui/motion/scroll-animations.mdx": () => import("../content/docs/ui/motion/scroll-animations.mdx?collection=docs"), "ui/primitives/backgrounds.mdx": () => import("../content/docs/ui/primitives/backgrounds.mdx?collection=docs"), "ui/primitives/section.mdx": () => import("../content/docs/ui/primitives/section.mdx?collection=docs"), "ui/primitives/shadcn-radix.mdx": () => import("../content/docs/ui/primitives/shadcn-radix.mdx?collection=docs"), "ui/primitives/typography.mdx": () => import("../content/docs/ui/primitives/typography.mdx?collection=docs"), "ui/blocks/navs/start-end.mdx": () => import("../content/docs/ui/blocks/navs/start-end.mdx?collection=docs"), "ui/blocks/heroes/simple-centered.mdx": () => import("../content/docs/ui/blocks/heroes/simple-centered.mdx?collection=docs"), "ui/blocks/sheets/basic-sheet.mdx": () => import("../content/docs/ui/blocks/sheets/basic-sheet.mdx?collection=docs"), "ui/blocks/sheets/mintlify-sheet.mdx": () => import("../content/docs/ui/blocks/sheets/mintlify-sheet.mdx?collection=docs"), "ui/utilities/hooks/use-platform.mdx": () => import("../content/docs/ui/utilities/hooks/use-platform.mdx?collection=docs"), "ui/utilities/hooks/use-share.mdx": () => import("../content/docs/ui/utilities/hooks/use-share.mdx?collection=docs"), }),
};
export default browserCollections;