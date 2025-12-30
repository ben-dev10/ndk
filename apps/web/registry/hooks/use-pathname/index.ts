"use client";
import { usePathname } from "next/navigation";

// _TODO: test framework-agnostic option
export const usePathName = () => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  return isActive;
};
