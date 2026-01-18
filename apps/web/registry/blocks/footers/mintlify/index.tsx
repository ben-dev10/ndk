import Section from "@/registry/components/_ui/section";
import IconsGroup, {
  IconGitHub,
  IconLinkedin,
  IconXTwitter,
} from "@/registry/components/_ui/social-icons";
import { AcmeLogoSimple } from "@/registry/icons/acme-logo/acme-logo";
import Link from "next/link";
import React from "react";
import { footerLinks, MCPSVG, SOCSVG } from "./data";
import { ButtonGroupThemeToggle } from "@/registry/components/_ui/theme-toggles";
import { Button } from "@_ndk/ui/components/ui/button";
import { CircleDot } from "lucide-react";

export default function MintlifyFooter() {
  return (
    <>
      <div className="_empty-cta-section container-8xl h-30 p-4" />

      <Section.RootElement
        as="footer"
        className="_ui dark:bg-secondary/30 bg-secondary/5 border-t"
      >
        <Section.Container container="8xl" className="lg:border-x">
          <div className="_header flex items-center justify-between border-b p-6 py-10 max-sm:flex-col max-sm:gap-y-6">
            <div className="_logo flex items-center gap-2">
              <AcmeLogoSimple className="size-5 text-green-500" />
              <p className="text-[1.1rem]"> ACME Mint</p>
            </div>

            <IconsGroup className="flex items-center gap-3">
              <IconLinkedin url="#" className="size-6 opacity-50" />
              <IconXTwitter url="#" className="size-6 opacity-50" />
              <IconGitHub url="#" className="size-6 opacity-50" />
            </IconsGroup>
          </div>

          <nav className="_footer-links p-6">
            <div className="grid w-full grid-cols-2 overflow-hidden py-8 max-lg:gap-6 sm:grid-cols-3 sm:px-5 md:px-8 md:pt-12 md:pb-18 lg:grid-cols-5">
              {footerLinks.map((item) => (
                <ul key={item.category}>
                  <li>
                    <h6 className="text-muted-foreground mb-3 uppercase">
                      {item.category}
                    </h6>
                    <div className="_links space-y-0.5">
                      {item.links.map((link, index) => (
                        <Link
                          href={link.url}
                          key={index}
                          className="hover:bg-secondary -ml-4 block max-w-max rounded-full p-1.5 px-4 text-[0.95rem] opacity-90"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </li>
                </ul>
              ))}
            </div>
          </nav>

          <div className="_credentials flex items-center gap-6 border-y p-6 max-sm:flex-col max-sm:gap-y-6">
            <p>Backed by enterprise-grade security</p>
            <div className="flex items-center gap-6">
              <MCPSVG />
              <SOCSVG />
            </div>
          </div>

          <div className="_utilities flex items-center justify-between p-6 pt-10 pb-40 max-sm:flex-col max-sm:gap-y-6">
            <Link href="#">
              <Button variant="secondary" className="rounded-full">
                <CircleDot className="text-green-500" />
                All Systems Operational
              </Button>
            </Link>

            <div className="text-muted-foreground max-sm:order-last">
              &copy; {new Date().getFullYear()} ACME Mint Inc
            </div>

            <div className="">
              <ButtonGroupThemeToggle className="dark:bg-secondary/80 bg-secondary border-0 p-1" />
            </div>
          </div>
        </Section.Container>
      </Section.RootElement>
    </>
  );
}
