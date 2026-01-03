import Section from "@_ndk/ui/components/_ui/section";

export const Hero = () => {
  return (
    <Section.RootElement>
      <Section.Container className="container-8xl px-(--gutter-x) py-6 pt-15">
        <h2 className="text-balance">
          Beautifully Designed Open-Source UI Components and Templates
        </h2>
        <p className="text-muted-foreground">
          Browse through a growing collection of free components, simply
          copy-paste any like or automate the process by fetching them with the
          shadcn/cli!
        </p>
      </Section.Container>
    </Section.RootElement>
  );
};

export default function BlocksPage() {
  return (
    <main className="min-h-[90dvh]">
      <Hero />
    </main>
  );
}
