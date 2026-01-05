"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@_ndk/ui/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

type BreadcrumbConfig = {
  label: string;
  href?: string;
};

const BREADCRUMB_MAP: Record<string, BreadcrumbConfig> = {
  blocks: {
    label: "Blocks",
    href: "/blocks",
  },
  "app-blocks": {
    // entries without href(s) will be rendered as pages and non-navigable
    label: "App Blocks",
  },
};

const formatLabel = (segment: string) =>
  segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

export function BlocksBreadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  let accumulatedPath = "";

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments.map((segment, index) => {
          accumulatedPath += `/${segment}`;
          const isLast = index === segments.length - 1;
          const config = BREADCRUMB_MAP[segment];

          const label = config?.label ?? formatLabel(segment);
          const href = config?.href;

          return (
            <div key={index} className="contents">
              {index > 0 && <BreadcrumbSeparator />}
              <BreadcrumbItem key={accumulatedPath}>
                {isLast || !href ? (
                  <BreadcrumbPage>{label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
