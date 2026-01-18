// "use client";
import Section from "@_ndk/ui/components/_ui/section";
import { Sidebar } from "./sidebar";
import { MobileSidebar } from "./mobile-sidebar";
import { BlocksBreadcrumbs } from "./breadcrumbs";
import Footer from "@/app/_components/footer";

const NAV_OFFSET = "top-[calc(var(--nav-height)+var(--banner-height))]";
const SecondaryNav = () => {
  return (
    <Section.RootElement
      as="nav"
      className={`_secondary-nav ${NAV_OFFSET} bg-background sticky z-10 h-(--secondary-nav-height) md:hidden`}
    >
      <Section.Container
        container="8xl"
        className="flex h-full items-center gap-3 border-b px-2"
      >
        <div className="_sheet">
          <MobileSidebar />
        </div>
        <div className="_breadcrumbs">
          <BlocksBreadcrumbs />
        </div>
      </Section.Container>
    </Section.RootElement>
  );
};

const PAGE_HEIGHT =
  "min-h-[calc(100dvh-var(--nav-height)-var(--banner-height))]";
export default function ComponentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`_components-page ${PAGE_HEIGHT} [--secondary-nav-height:35px] [--sidebar-width:250px]`}
    >
      <SecondaryNav />
      <div className="flex">
        <Sidebar />
        <div className="_contents w-[100] grow overflow-x-hidden">
          <Section.RootElement className="">
            <Section.Container container="7xl">
              <div className="mt-5 hidden p-8 pb-1 md:block">
                <BlocksBreadcrumbs />
              </div>
              {children}
              <Footer />
            </Section.Container>
          </Section.RootElement>
        </div>
      </div>
    </div>
  );
}
