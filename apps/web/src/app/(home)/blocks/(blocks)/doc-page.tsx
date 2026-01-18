import ComponentPreview from "@/components/docs/blocks/component-preview";
import Section from "@_ndk/ui/components/_ui/section";

export function DocHeader({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) {
  return (
    <Section.RootElement id="header" className="p-8 md:pt-1">
      <h2 className="mt-0">{heading}</h2>
      <h6 className="text-muted-foreground md:max-w-2xl">{description}</h6>
    </Section.RootElement>
  );
}

interface DocPreviewProps {
  name: string;
  title?: string | undefined;
  height?: string | undefined;
  componentTitle?: string | undefined;
  iframe?: boolean | undefined;
}

export default function DocPreview({
  name,
  height = "h-[450px] sm:h-[600px]",
  iframe = true,
  componentTitle,
}: DocPreviewProps) {
  return (
    <ComponentPreview
      height={height}
      iframe={iframe}
      componentTitle={componentTitle}
      name={name}
    />
  );
}
