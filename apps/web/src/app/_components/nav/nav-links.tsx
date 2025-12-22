"use client";
import { usePathName } from "@/registry/_hooks/use-pathname";
import Link from "next/link";

interface LinkProps {
  name: string;
  url: string;
}

export const NavLinks = ({ links }: { links: LinkProps[] }) => {
  const isActive = usePathName();

  return (
    <>
      <nav className="_links hidden gap-4 md:flex">
        {links.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className={`${isActive(item.url) ? "opacity-100" : ""} opacity-60 transition-opacity duration-300`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </>
  );
};
