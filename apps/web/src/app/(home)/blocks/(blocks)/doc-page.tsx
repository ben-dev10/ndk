import Section from "@_ndk/ui/components/_ui/section";

export function DocHeader({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) {
  return (
    <Section.RootElement className="p-8 md:pt-1">
      <h2 className="mt-0">{heading}</h2>
      <h6 className="text-muted-foreground md:max-w-2xl">{description}</h6>
    </Section.RootElement>
  );
}
