import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/utils/lib/layout.shared";
import { source } from "@/utils/lib/source";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout
      sidebar={{
        defaultOpenLevel: 1,
      }}
      links={[]}
      tree={source.pageTree}
      {...baseOptions()}
    >
      {children}
    </DocsLayout>
  );
}
