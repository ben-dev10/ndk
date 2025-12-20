"use client";
import { Banner as FumadocsBanner } from "fumadocs-ui/components/banner";

export default function Banner() {
  //   const id = "wip";
  //   const globalKey = `nd-banner-${id}`;

  //   useEffect(() => {
  //     const storageKey = localStorage.getItem(globalKey);

  //     if (storageKey) {
  //       document.documentElement.style.setProperty("--banner-height", "0rem");
  //     } else {
  //       document.documentElement.style.setProperty("--banner-height", "3rem");
  //     }
  //   }, [globalKey]);

  return (
    <>
      <FumadocsBanner
        //   id={id}
        variant="rainbow"
      >
        Site is a work in progress.
      </FumadocsBanner>
    </>
  );
}
