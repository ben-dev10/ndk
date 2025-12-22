import { Building2, Component, ShoppingBag, ToolCase } from "lucide-react";

interface LinkProps {
  name: string;
  url: string;
  icon?: React.ReactNode;
}

export interface NavLinksProps {
  navLinks: LinkProps[];
  side?: "top" | "right" | "bottom" | "left";
}

export const NavLinks = [
  {
    name: "Services",
    url: "#",
    icon: <ToolCase size={16} />,
  },
  {
    name: "Features",
    url: "#",
    icon: <Component size={16} />,
  },
  {
    name: "Blocks",
    url: "/blocks",
    icon: <Building2 size={16} />,
  },
  {
    name: "Marketplace",
    url: "#",
    icon: <ShoppingBag size={16} />,
  },
];
