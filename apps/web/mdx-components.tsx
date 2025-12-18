import type { MDXComponents } from "mdx/types";
import defaultMdxComponents from "fumadocs-ui/mdx";
import Link from "next/link";
import * as icons from "lucide-react";
import * as FilesComponents from "fumadocs-ui/components/files";
import * as TabsComponents from "fumadocs-ui/components/tabs";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...(icons as unknown as MDXComponents),
    ...TabsComponents,
    ...FilesComponents,
    ...components,
    Link,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;
