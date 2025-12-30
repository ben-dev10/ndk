import { AcmeLogoSimple } from "@/components/_ui/acme-logo";
import { Button } from "@_ndk/ui/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { ClassicThemeToggle } from "@_ndk/ui/components/_ui/theme-toggles";
import Background from "@_ndk/ui/components/_ui/background";
import Section from "@_ndk/ui/components/_ui/section";
import { BasicSheet } from "@/registry/components/sheets/basic-sheet";
import Link from "next/link";
import { Building2, Component, ShoppingBag, ToolCase } from "lucide-react";

export const NavLinks = [
  {
    name: "Services",
    url: "#",
    icon: <ToolCase size={16} />,
  },
  {
    name: "Features",
    url: "#",
    icon: <Component size={16} />,
  },
  {
    name: "Blocks",
    url: "/blocks",
    icon: <Building2 size={16} />,
  },
  {
    name: "Marketplace",
    url: "#",
    icon: <ShoppingBag size={16} />,
  },
];

export default function NavbarStartEnd() {
  return (
    <Section.RootElement
      as="header"
      className="_navbar bg-background sticky top-0 z-2 flex h-(--nav-height) items-center border-b px-5 text-[0.95rem]"
    >
      <Section.Container
        container="8xl"
        className={`_navbar-wrapper relative flex w-full items-center gap-2`}
      >
        <Background>
          <Background.Img
            opacity={0.25}
            className="fixed top-0 -left-[60px] h-[55px] w-full md:left-0"
            style={{
              background: `url(/imgs/.svg)`,
              backgroundRepeat: "no-repeat",
            }}
          />
        </Background>

        <div className="_logo mr-3 max-md:mr-auto">
          <AcmeLogoSimple className="size-6" />
        </div>

        <div className="_menu-links mr-auto hidden items-center gap-3 md:flex">
          {NavLinks.map((link) => (
            <Link
              href={link.url}
              key={link.name}
              className="hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="_utilities flex items-center gap-1">
          <Button
            variant={"link"}
            className="_login+btn hidden items-center gap-[2px] transition-all duration-300 hover:underline md:flex"
          >
            Login
            <ArrowRightIcon size={16} />
          </Button>
          <Button className="_login+btn flex items-center gap-[2px]">
            Signup
          </Button>

          <div className="_theme-toggle-btn theme-toggle ml-2">
            <ClassicThemeToggle className="border-border/50 hover:bg-primary/5" />
          </div>
        </div>

        <div className={`_nav-menu md:hidden`}>
          <BasicSheet side="left" />
        </div>
      </Section.Container>
    </Section.RootElement>
  );
}
