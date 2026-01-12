"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  SheetOverlay,
} from "@/components/_ui/blocks-sheet";
import { Button } from "@_ndk/ui/components/ui/button";
import { usePathName } from "@/registry/hooks/use-pathname";
import { useOpen } from "@/registry/hooks/use-open";
import { useEffect } from "react";
import WindowPointer from "@/icons/window-pointer";
import LayoutDuotone from "@/icons/layout";
import { sidebarLinks } from "./sidebar-links";
import Link from "next/link";
import Basket from "@/icons/basket";

export function MobileSidebar() {
  const isActive = usePathName();
  const { handleClick, open, setOpen } = useOpen();

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  });

  return (
    <Sheet modal={false} open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className={`group size-8`} variant="ghost" size="icon">
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
        side="left"
        className={`_sidebar-content _ui bg-background text-foreground w-full border-0 pt-40 sm:border md:hidden`}
      >
        <SheetHeader aria-hidden className="sr-only">
          <SheetTitle className="text-xl">NDK Blocks</SheetTitle>
          <SheetDescription>
            Beautifully designed UI components and templates.
          </SheetDescription>
        </SheetHeader>
        <div className="_sidebar-container text-muted-foreground flex h-full flex-col transition-colors duration-300">
          <div className="_top-half grow overflow-y-auto p-4 pt-5">
            <div className="_header mb-4 flex flex-col gap-3">
              {[
                {
                  name: "App Blocks",
                  url: "#",
                  icon: <WindowPointer className="size-[14px]" />,
                },
                {
                  name: "Layouts",
                  url: "#",
                  icon: <LayoutDuotone className="size-[15px]" />,
                },
                {
                  name: "Templates",
                  url: "#",
                  icon: <Basket className="size-[15px]" />,
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="hover:text-foreground/90 flex items-center gap-3"
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
            </div>

            <nav className="_links p-4">
              {sidebarLinks.map((item, index) => (
                <div key={index} className="mb-8">
                  <p className="mb-2 text-[0.7rem] uppercase">
                    {item.category}
                  </p>
                  <ul className="_link-list space-y-4 border-l">
                    {item.links.map((link, linkIndex) => (
                      <li
                        onClick={handleClick}
                        key={linkIndex}
                        className={`border-border/0 hover:text-foreground -ml-[1.2px] border-l px-4 md:-ml-[2px] ${
                          isActive(link.url)
                            ? "text-foreground border-black! dark:border-white!"
                            : "hover:border-black/90 dark:hover:border-white"
                        } `}
                      >
                        <Link href={link.url} className="block">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
