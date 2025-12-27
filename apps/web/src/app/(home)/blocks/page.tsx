import NavbarStartEnd from "@/registry/components/navs/start-end";
import { BasicSheet } from "@/registry/components/sheets/basic-sheet";
import { MintlifySheet } from "@/registry/components/sheets/mintlify-sheet";
import Background from "@_ndk/ui/components/_ui/background";
import Section from "@_ndk/ui/components/_ui/section";
import { Button } from "@_ndk/ui/components/ui/button";
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
        <div className="_sheets mb-10">
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

        <div className="_navbars mb-10">
          <h4 className="mb-2">Navbars</h4>
          <ComponentPreview title="Start-End">
            <NavbarStartEnd />
          </ComponentPreview>
        </div>

        <div className="_backgrounds mb-10">
          <h4 className="mb-2">Backgrounds</h4>
          <ComponentPreview>
            <section className="_hero-section relative grid h-full min-h-[300px] place-items-center rounded-md bg-black p-10 pb-15 text-white">
              <Background className="_background opacity-40">
                <Background.Gradient
                  gradient="flurryBlue"
                  className="rounded-md bg-position-[0px_5px]"
                />

                <Background.Texture
                  texture="noise"
                  blendMode="color-burn"
                  opacity={0.4}
                  zIndex={99}
                />

                <Background.Img
                  pattern="circuitBoardLight"
                  className="rounded-md"
                  size="40px 40px, 40px 40px, 40px 40px, 40px 40px"
                />
              </Background>

              <main className="_main-contents relative z-1">
                <div className="max-w-xl">
                  <h2 className="mb-3 text-center">
                    Empowering the next generation of engineers
                  </h2>
                  <p className="mt-5 text-center opacity-80">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas adipisci dolores assumenda.
                  </p>
                </div>

                <div className="_buttons mt-8 flex items-center justify-center gap-3">
                  <Button className="rounded-full">Get started</Button>
                  <Button
                    variant="link"
                    className="rounded-full text-white hover:opacity-80"
                  >
                    Learn more
                  </Button>
                </div>
              </main>
            </section>
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
