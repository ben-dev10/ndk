export interface SidebarLinksProps {
  category: string;
  links: {
    name: string;
    url: string;
  }[];
}

export const sidebarLinks: SidebarLinksProps[] = [
  {
    category: "UI Blocks",
    links: [
      {
        name: "Navbars",
        url: "/blocks/app-blocks/navbars",
      },
      {
        name: "Footers",
        url: "/blocks/app-blocks/footers",
      },
      // {
      //   name: "Dividers",
      //   url: "#",
      // },
    ],
  },
  {
    category: "UI Sections",
    links: [
      {
        name: "Heroes",
        url: "/blocks/app-blocks/heroes",
      },
      // {
      //   name: "CTA",
      //   url: "#",
      // },
    ],
  },
  // {
  //   category: "Pages",
  //   links: [
  //     {
  //       name: "UI Blocks",
  //       url: "#",
  //     },
  //   ],
  // },
];
