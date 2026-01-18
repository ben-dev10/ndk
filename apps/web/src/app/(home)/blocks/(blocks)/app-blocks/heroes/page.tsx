import DocPreview, { DocHeader } from "../../doc-page";

export default function HeroesBlocks() {
  return (
    <>
      <DocHeader
        heading="Heroes"
        description="The first view that welcomes a visitor to a site, designed to captivate and convert."
      />

      <div className="_components m-8 space-y-8 pb-50">
        <DocPreview
          componentTitle="Simple Centered"
          name="blocks-hero-simple-centered"
        />

        {/* <DocPreview componentTitle="Linear Hero" name="blocks-hero-linear" /> */}
      </div>
    </>
  );
}
