import { Building2, Component, ShoppingBag, ToolCase } from "lucide-react";

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
