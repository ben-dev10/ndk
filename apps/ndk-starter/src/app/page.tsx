import { Button } from "@ndk/ui/components/ui/button";
import {
  ClassicThemeToggle,
  DropdownThemeToggle,
} from "@ndk/ui/components/_ui/theme-toggles";

export default function Home() {
  return (
    <main className="p-20">
      <h4 className="bg-muted p-4 mb-10 text-5xl font-bold text-neutral-500">
        ndk starter
        <ClassicThemeToggle />
      </h4>
      <div className="space-x-5">
        <DropdownThemeToggle />
        <Button className="">Hello World</Button>
      </div>
    </main>
  );
}
