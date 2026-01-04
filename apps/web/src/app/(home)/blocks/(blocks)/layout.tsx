import { BasicSheet } from "@/registry/components/sheets/basic-sheet";
import Section from "@_ndk/ui/components/_ui/section";
import { AppWindowIcon } from "lucide-react";

const SecondaryNav = () => {
  return (
    <Section.RootElement as="nav" className="_secondary-nav md:hidden">
      <Section.Container container="8xl" className="border-b px-2 py-1.5">
        <div className="_sheet">
          <BasicSheet />
        </div>
      </Section.Container>
    </Section.RootElement>
  );
};

const Sidebar = () => {
  return (
    <Section.RootElement className="hidden md:block">
      <div className="_container fixed h-full w-(--sidebar-width) border-r p-2 pt-3">
        <div className="_header">
          <div className="flex items-center gap-1">
            <AppWindowIcon size={16} />
            APP Blocks
          </div>
        </div>
      </div>
    </Section.RootElement>
  );
};

export default function ComponentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="_components-page [--sidebar-width:180px]">
      <SecondaryNav />
      <Sidebar />
      <div className="_contents min-h-screen md:ml-(--sidebar-width)">
        {children}
      </div>
    </div>
  );
}
