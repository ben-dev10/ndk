"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function ScrollHandler() {
  const pathname = usePathname();
  const isBackForwardNavigation = useRef(false);

  useEffect(() => {
    // detect back/forward navigation
    const handlePopState = () => {
      isBackForwardNavigation.current = true;
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    // let browser restore scroll position if it's back/forward navigation
    if (isBackForwardNavigation.current) {
      isBackForwardNavigation.current = false;
      return;
    }

    // otherwise, scroll to top for new page visits
    const html = document.documentElement;
    const originalBehavior = html.style.scrollBehavior;

    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);

    requestAnimationFrame(() => {
      html.style.scrollBehavior = originalBehavior;
    });
  }, [pathname]);

  return null;
}
