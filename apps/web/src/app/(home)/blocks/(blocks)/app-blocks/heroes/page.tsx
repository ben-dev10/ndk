import ComponentPreview from "@/components/docs/blocks/component-preview";
import { DocHeader } from "../../doc-page";

function SimpleCentered() {
  return <ComponentPreview name="blocks-hero-simple-centered" />;
}

export default function NavbarBlocks() {
  return (
    <>
      <DocHeader
        heading="Heroes"
        description="The first view that welcomes a visitor to a site, designed to captivate and convert."
      />

      <div className="_components m-8">
        <SimpleCentered />
      </div>
    </>
  );
}
