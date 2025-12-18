import ThemeImage from "@/components/_ui/theme-image";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

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
            className="w-6"
          />
          ndk
        </>
      ),
    },
    links: [],
  };
}
