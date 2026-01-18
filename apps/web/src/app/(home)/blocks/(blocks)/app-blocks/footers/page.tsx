import DocPreview, { DocHeader } from "../../doc-page";

export default function HeroesBlocks() {
  return (
    <>
      <DocHeader
        heading="Footers"
        description="Secondary means of navigation in a website, holds useful links and can be used to relay information."
      />

      <div className="_component m-8 space-y-8 pb-50">
        <DocPreview
          componentTitle="Mintlify Footer"
          name="blocks-footer-mintlify"
        />
      </div>
    </>
  );
}
