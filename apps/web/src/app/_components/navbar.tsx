import React from "react";
import Section from "@_ndk/ui/components/_ui/section";
import Link from "next/link";
import ThemeImage from "@/components/_ui/theme-image";
import GithubLogoIcon from "@_ndk/ui/icons/github-icon";
import { GITHUB_LINK } from "../_assets/constants";
import { ClassicThemeToggle } from "@_ndk/ui/components/_ui/theme-toggles";
import { NavLinks } from "./nav/nav-links";
import { NavSheet } from "./nav/nav-sheet";

export const navLinks = [
  { name: "Docs", url: "/docs/ui" },
  { name: "Blog", url: "/blog" },
  { name: "Blocks", url: "/blocks" },
];

export default function Navbar() {
  return (
    <Section.RootElement
      as="header"
      className="bg-background sticky top-(--banner-height) border-b"
    >
      <Section.Container
        container="8xl"
        className="flex h-(--nav-height) items-center justify-between px-6"
      >
        <div className="_logo">
          <Link href="/">
            <ThemeImage
              width={31}
              height={31}
              alt="ndk logo"
              srcDark="/svgs/ndk-dark.svg"
              srcLight="/svgs/ndk-light.svg"
              className="w-6"
            />
          </Link>
        </div>

        <div className="_left flex items-center gap-3">
          <NavLinks links={navLinks} />

          <div className="_utilities ml-3 flex items-center gap-3">
            <Link href={`${GITHUB_LINK}/ndk`}>
              <GithubLogoIcon className="size-6.5 dark:fill-white" />
            </Link>

            <ClassicThemeToggle className="border-border/40" />

            <div className="ml-1">
              <NavSheet />
            </div>
          </div>
        </div>
      </Section.Container>
    </Section.RootElement>
  );
}
