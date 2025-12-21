import { NavLinks } from "@/registry/blocks/_data/basic-links";
import { BasicSheet } from "@/registry/blocks/sheets/basic-sheet";
import { MintlifySheet } from "@/registry/blocks/sheets/mintlify-sheet";
import Section from "@_ndk/ui/components/_ui/section";
import { cn } from "@_ndk/ui/utils.ts";

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
      <h5 className="mb-4 opacity-80">{title}</h5>
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
        <ComponentPreview title="Basic sheet">
          <BasicSheet mobileOnly={false} navLinks={NavLinks} side="right" />
        </ComponentPreview>

        <ComponentPreview className="mt-8" title="Mintlify sheet">
          <MintlifySheet mobileOnly={false} side="left" />
        </ComponentPreview>
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
