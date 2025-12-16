import ThemeImage from "@/components/_ui/theme-image";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customize layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <ThemeImage
            width={31}
            height={31}
            alt="ndk logo"
            srcDark="/svgs/ndk-dark.svg"
            srcLight="/svgs/ndk-light.svg"
            className="w-5"
          />
          ndk
        </>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [],
  };
}
