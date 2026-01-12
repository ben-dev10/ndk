"use client";
import { Banner as FumadocsBanner } from "fumadocs-ui/components/banner";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Banner() {
  const [visible] = useState(true);
  const pathname = usePathname();
  const hideForRoute = pathname.startsWith("/examples");

  if (!visible || hideForRoute) return null;
  return (
    <>
      {visible && (
        <FumadocsBanner variant="rainbow" className="">
          Site development in progress.
        </FumadocsBanner>
      )}
    </>
  );
}
