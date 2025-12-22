"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@_ndk/ui/components/ui/sheet";
import Link from "next/link";
import { Button } from "@_ndk/ui/components/ui/button";
import { usePathName } from "@/registry/_hooks/use-pathname";
import { useOpen } from "@/registry/_hooks/use-open";
import type { NavLinksProps } from "@/registry/_data/basic-links";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  XTwitterIcon,
} from "@_ndk/ui/components/_ui/social-icons";
import { socialLinks as slinks } from "@/app/_assets/constants";

const SocialIcons = () => {
  return (
    <div className="_icon-list my-5 flex items-center justify-center gap-3">
      <GithubIcon url={slinks.github} className="text-neutral-500" />
      <XTwitterIcon url={slinks.twitter} className="text-neutral-500" />
      <LinkedinIcon url={slinks.linkedin} className="text-neutral-500" />
    </div>
  );
};

export function BasicSheet({
  navLinks,
  side = "left",
  mobileOnly = true,
}: NavLinksProps & {
  mobileOnly?: boolean;
}) {
  const isActive = usePathName();
  const { handleClick, open, setOpen } = useOpen();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          className={`group size-8 ${mobileOnly ? "md:hidden" : ""}`}
          variant="ghost"
          size="icon"
        >
          <svg
            className="pointer-events-none"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12L20 12"
              className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-315"
            />
            <path
              d="M4 12H20"
              className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
            />
            <path
              d="M4 12H20"
              className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-135"
            />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent
        side={side}
        className={`_sheet-content _ui bg-background text-foreground p-5 pt-3 pl-5 ${mobileOnly ? "md:hidden" : ""}`}
      >
        <SheetHeader aria-hidden className="">
          <SheetTitle className="text-xl">Basic Sheet</SheetTitle>
          <SheetDescription>A simple shadcn/ui sheet.</SheetDescription>
        </SheetHeader>
        <div className="sheet-content mx-auto mb-auto flex w-[90%] max-w-[450px] flex-col gap-3 text-[13px]">
          <hr className="_line absolute left-0 mt-8 h-1 w-full" />

          <nav className="_sheet-links mt-15">
            <ul onClick={handleClick} className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name.toString().slice(0, 5)}>
                  <Link
                    href={link.url}
                    id="navLink"
                    className={`sheet-link hover:bg-primary/50 dark:hover:bg-primary/15 flex items-center gap-1 rounded-md p-2 px-3 hover:text-white ${
                      isActive(link.url)
                        ? "bg-primary dark:bg-primary/20 font-[600] text-white"
                        : ""
                    }`}
                  >
                    <span className="mr-2">{link.icon}</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="_social-icons mt-15 flex flex-col">
            <hr className="mt-3" />
            <SocialIcons />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
