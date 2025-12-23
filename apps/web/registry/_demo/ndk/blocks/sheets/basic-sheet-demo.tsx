import { NavLinks } from "@/registry/_data/basic-links";
import { BasicSheet } from "@/registry/ndk/blocks/sheets/basic-sheet";

export default function BasicSheetDemo() {
  return (
    <div className="p-3">
      <BasicSheet mobileOnly={false} navLinks={NavLinks} side="right" />
    </div>
  );
}
