import React from "react";
import Section from "@_ndk/ui/components/_ui/section";
import Link from "next/link";

export default function Navbar() {
  return (
    <Section.RootElement as="header" className="bg-background sticky border-b">
      <Section.Container
        container="8xl"
        className="flex h-(--nav-height) items-center justify-between px-6"
      >
        <div className="_logo">
          <p>ndk</p>
        </div>

        <div className="_links flex gap-2">
          {[
            { name: "Docs", url: "/docs/ui" },
            // { name: "Blog", url: "/blog/v12" },
          ].map((item, index) => (
            <Link key={index} href={item.url} className="">
              {item.name}
            </Link>
          ))}
        </div>
      </Section.Container>
    </Section.RootElement>
  );
}
