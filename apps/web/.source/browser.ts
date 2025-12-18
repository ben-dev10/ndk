// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  blogPosts: create.doc("blogPosts", {"ndk-roadmap.mdx": () => import("../content/blog/ndk-roadmap.mdx?collection=blogPosts"), "ndk-ui.mdx": () => import("../content/blog/ndk-ui.mdx?collection=blogPosts"), }),
  docs: create.doc("docs", {"cli/index.mdx": () => import("../content/docs/cli/index.mdx?collection=docs"), "ui/index.mdx": () => import("../content/docs/ui/index.mdx?collection=docs"), "ui/installation.mdx": () => import("../content/docs/ui/installation.mdx?collection=docs"), "ui/why-ndk.mdx": () => import("../content/docs/ui/why-ndk.mdx?collection=docs"), "ui/blocks/heros.mdx": () => import("../content/docs/ui/blocks/heros.mdx?collection=docs"), "ui/blocks/navbars.mdx": () => import("../content/docs/ui/blocks/navbars.mdx?collection=docs"), "ui/primitives/base-ui.mdx": () => import("../content/docs/ui/primitives/base-ui.mdx?collection=docs"), "ui/primitives/shadcn-radix.mdx": () => import("../content/docs/ui/primitives/shadcn-radix.mdx?collection=docs"), "ui/primitives/typography.mdx": () => import("../content/docs/ui/primitives/typography.mdx?collection=docs"), "ui/motion/scroll-animations.mdx": () => import("../content/docs/ui/motion/scroll-animations.mdx?collection=docs"), "ui/primitives/layouts/backgrounds.mdx": () => import("../content/docs/ui/primitives/layouts/backgrounds.mdx?collection=docs"), "ui/primitives/layouts/section.mdx": () => import("../content/docs/ui/primitives/layouts/section.mdx?collection=docs"), }),
};
export default browserCollections;