import type { MDXComponents } from "mdx/types";
import defaultMdxComponents from "fumadocs-ui/mdx";
import Link from "next/link";
import * as icons from "lucide-react";
import * as FilesComponents from "fumadocs-ui/components/files";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import ComponentPreview from "@/components/docs/component-preview";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { ComponentInstallation } from "@/components/docs/component-installation";
import { AutoTypeTable } from "fumadocs-typescript/ui";
import { createGenerator } from "fumadocs-typescript";
import { TypeTable } from "fumadocs-ui/components/type-table";
import ComponentCodeTabs from "@/components/docs/component-code-tabs";

const generator = createGenerator();

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...(icons as unknown as MDXComponents),
    ...TabsComponents,
    ...FilesComponents,
    ComponentPreview,
    ComponentInstallation,
    ComponentCodeTabs,
    pre: ({ ref: _ref, ...props }) => (
      <CodeBlock {...props}>
        <Pre>{props.children}</Pre>
      </CodeBlock>
    ),
    AutoTypeTable: (props) => (
      <AutoTypeTable {...props} generator={generator} />
    ),
    TypeTable,
    ...components,
    Link,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;
