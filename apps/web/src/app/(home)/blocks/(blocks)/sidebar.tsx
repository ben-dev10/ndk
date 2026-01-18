"use client";
import LayoutDuotone from "@/icons/layout";
import WindowPointer from "@/icons/window-pointer";
import Section from "@_ndk/ui/components/_ui/section";
import Link from "next/link";
import { sidebarLinks } from "./sidebar-links";
import { usePathName } from "@/registry/hooks/use-pathname";
import Basket from "@/icons/basket";

const SIDEBAR_HEIGHT =
  "h-[calc(100dvh-var(--nav-height)-var(--banner-height))]";
export const Sidebar = () => {
  const isActive = usePathName();

  return (
    <Section.RootElement
      className={`_sidebar sticky top-[calc(var(--nav-height)+var(--banner-height))] text-[0.9rem] ${SIDEBAR_HEIGHT} hidden w-(--sidebar-width) shrink-0 border-r md:block`}
    >
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
                <p className="mb-2 text-[0.7rem] uppercase">{item.category}</p>
                <ul className="_link-list space-y-4 border-l">
                  {item.links.map((link, linkIndex) => (
                    <li
                      key={linkIndex}
                      className={`border-border/0 hover:text-foreground -ml-[2px] border-l px-4 ${
                        isActive(link.url)
                          ? "text-foreground border-black! dark:border-white!"
                          : "hover:border-black/90 dark:hover:border-white"
                      } `}
                    >
                      <Link href={link.url} className="">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="_bottom-half h-[300px] border-t">
          <div className="h-[200px]">
            {/*eslint-disable-next-line @next/next/no-img-element  */}
            <img src="/imgs/iso-ndk.png" alt="" className="h-[299px]" />
          </div>
        </div>
      </div>
    </Section.RootElement>
  );
};
