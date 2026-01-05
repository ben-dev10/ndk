import "./app.module.css";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/utils/lib/layout.shared";
import { Blocks, BookMarkedIcon, TextQuoteIcon } from "lucide-react";
import Footer from "@/app/_components/footer";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <HomeLayout
      {...baseOptions()}
      links={[
        {
          icon: <BookMarkedIcon />,
          text: "Documentation",
          url: "/docs/ui",
          active: "nested-url",
        },
        {
          icon: <Blocks />,
          text: "Blocks",
          url: "/blocks",
          active: "nested-url",
        },
        {
          icon: <TextQuoteIcon />,
          text: "Blog",
          url: "/blog",
          active: "nested-url",
        },
      ]}
    >
      <div className="_ui">{children}</div>
      {/* <Footer /> */}
    </HomeLayout>
  );
}
