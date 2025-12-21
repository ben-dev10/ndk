"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  SheetFooter,
} from "@_ndk/ui/components/ui//sheet";
import { Button } from "@_ndk/ui/components/ui/button";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@_ndk/ui/components/ui/accordion";
import { AcmeLogoSimple } from "@/components/_ui/acme-logo";
import { MintlifyLinks } from "@/registry/blocks/_data/mintlify-links";
import { usePathName } from "@/registry/blocks/_hooks/use-pathname";
import { useOpen } from "@/registry/blocks/_hooks/use-open";

export function MintlifySheet({
  side = "left",
  mobileOnly = true,
}: {
  side?: "top" | "right" | "bottom" | "left";
  mobileOnly?: boolean;
}) {
  const isActive = usePathName();
  const { handleClick, open, setOpen } = useOpen();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          className={`_sheet-trigger group size-8 ${mobileOnly ? "md:hidden" : ""}`}
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
        className={`_sheet bg-background/90 text-foreground w-screen max-w-screen! backdrop-blur-2xl ${mobileOnly ? "md:hidden" : ""}`}
      >
        <div className="_sheet-content">
          <SheetHeader aria-hidden className="h-[70px]">
            <SheetTitle className="flex items-center gap-3 text-xl">
              <AcmeLogoSimple className="size-6" />
              Acme
            </SheetTitle>
            <SheetDescription className="hidden">
              power for all
            </SheetDescription>
          </SheetHeader>

          <nav className="_sheet-links h-[calc(100vh-170px)] overflow-auto px-6 pb-[80px]">
            <Accordion
              type="multiple"
              className="w-full"
              defaultValue={["item-0", "item-1"]} // all parent accordion items opened by default
            >
              {MintlifyLinks.map((accordion, index) => (
                <AccordionItem
                  key={accordion.accordionTitle}
                  value={`item-${index}`}
                >
                  <AccordionTrigger>
                    <h6 className="">{accordion.accordionTitle}</h6>
                  </AccordionTrigger>
                  <AccordionContent>
                    {accordion.accordionCategories.map((category) => (
                      <div key={category.categoryTitle} className="">
                        <p className="category-title mb-2 font-bold text-neutral-500 uppercase">
                          {category.categoryTitle}
                        </p>
                        <div className="category-links mt-3 mb-4">
                          {category.categoryLinks.map((link) => (
                            <Link
                              key={link.desc.slice(1, 6)}
                              onClick={handleClick}
                              href={link.url}
                              id="navLink"
                              className={`sheet-link group mb-1 flex flex-col gap-1 rounded-[8px] p-2 px-3 hover:bg-neutral-200 dark:hover:bg-neutral-900 dark:hover:text-white ${
                                isActive(link.url)
                                  ? "active bg-neutral-500/10 font-[600] text-white"
                                  : ""
                              }`}
                            >
                              {link.header}
                              <p className="text-foreground/50 mt-1">
                                {link.desc}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <Link
                    onClick={handleClick}
                    href="#"
                    id="navLink"
                    className={`sheet-link w-full py-2 ${
                      isActive("#")
                        ? "active bg-neutral-500/10 font-[600] text-white"
                        : ""
                    }`}
                  >
                    <h6 className="">Customers</h6>
                  </Link>
                </AccordionTrigger>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <Link
                    onClick={handleClick}
                    href="#"
                    id="navLink"
                    className={`sheet-link w-full py-2 ${
                      isActive("#")
                        ? "active bg-neutral-500/10 font-[600] text-white"
                        : ""
                    }`}
                  >
                    <h6 className="">Blog</h6>
                  </Link>
                </AccordionTrigger>
              </AccordionItem>
            </Accordion>
          </nav>
        </div>

        <SheetFooter className="_sheet-footer bg-background fixed bottom-0 left-0 z-2 flex h-[100px] w-full flex-col gap-2 p-4">
          <Button
            className="w-full bg-neutral-200 hover:bg-neutral-300 text-black dark:bg-[#151616] dark:text-white"
            variant={"default"}
          >
            Contact Sales
          </Button>
          <Button
            className="w-full bg-[#151616] text-white dark:bg-white dark:text-black"
            variant={"default"}
          >
            Start for free
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
