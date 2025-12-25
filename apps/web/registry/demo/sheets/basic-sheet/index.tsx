import { BasicSheet } from "@/registry/components/sheets/basic-sheet";

export default function BasicSheetDemo() {
  return (
    <div className="p-3">
      <BasicSheet mobileOnly={false} side="right" />
    </div>
  );
}
