import NavbarStartEnd from "@/registry/components/navs/start-end";
import { BasicSheet } from "@/registry/components/sheets/basic-sheet";
import { MintlifySheet } from "@/registry/components/sheets/mintlify-sheet";
import Section from "@_ndk/ui/components/_ui/section";
import { cn } from "@_ndk/ui/utils";
import Link from "next/link";

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
  url,
}: {
  children: React.ReactNode;
  title?: string;
  className?: string;
  url?: string;
}) => {
  return (
    <div className={cn("_component-preview", className)}>
      <div className="flex items-center justify-between">
        <h5 className="text-muted-foreground mb-4">{title}</h5>
        {url && (
          <Link
            href={`${url}`}
            className="text-primary text-sm underline opacity-80 hover:opacity-100"
          >
            Go to docs
          </Link>
        )}
      </div>
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

          <ComponentPreview
            title="Basic sheet"
            url="/docs/ui/blocks/sheets/basic-sheet"
          >
            <BasicSheet mobileOnly={false} side="right" />
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
