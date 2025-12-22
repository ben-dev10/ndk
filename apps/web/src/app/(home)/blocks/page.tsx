import { NavLinks } from "@/registry/_data/basic-links";
import NavbarStartEnd from "@/registry/ndk/blocks/navbars/start-end";
import { BasicSheet } from "@/registry/ndk/blocks/sheets/basic-sheet";
import { MintlifySheet } from "@/registry/ndk/blocks/sheets/mintlify-sheet";
import Section from "@_ndk/ui/components/_ui/section";
import { cn } from "@_ndk/ui/utils";

export const Hero = () => {
  return (
    <Section.RootElement>
      <Section.Container className="container-8xl px-(--gutter-x) py-6 pt-15">
        <h2>UI Blocks.</h2>
        <p className="text-muted-foreground">Heroes, Sheets, Navbars .etc</p>
      </Section.Container>
    </Section.RootElement>
  );
};

const ComponentPreview = ({
  children,
  title,
  className,
}: {
  children: React.ReactNode;
  title?: string;
  className?: string;
}) => {
  return (
    <div className={cn("_component-preview", className)}>
      <h5 className="text-muted-foreground mb-4">{title}</h5>
      <div className="_component-preview w-full rounded-lg border p-2">
        {children}
      </div>
    </div>
  );
};

export const SheetBlocks = () => {
  return (
    <Section.RootElement>
      <Section.Container className="container-8xl px-(--gutter-x) py-6">
        <div className="mb-10">
          <h4 className="mb-2">Sheets</h4>

          <ComponentPreview title="Basic sheet">
            <BasicSheet mobileOnly={false} navLinks={NavLinks} side="right" />
          </ComponentPreview>

          <ComponentPreview className="mt-8" title="Mintlify sheet">
            <MintlifySheet mobileOnly={false} side="left" />
          </ComponentPreview>
        </div>

        <div className="mb-10">
          <h4 className="mb-2">Navbars</h4>
          <ComponentPreview title="Start-End">
            <NavbarStartEnd />
          </ComponentPreview>
        </div>
      </Section.Container>
    </Section.RootElement>
  );
};

export default function BlocksPage() {
  return (
    <main className="min-h-[90dvh]">
      <Hero />
      <SheetBlocks />
    </main>
  );
}
