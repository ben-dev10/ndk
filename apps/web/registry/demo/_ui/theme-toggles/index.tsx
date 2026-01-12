import {
  ButtonGroupThemeToggle,
  ThemeToggle,
  DropdownThemeToggle,
} from "@/registry/components/_ui/theme-toggles";

export default function ThemeToggles() {
  return (
    <div className="_toggles-demo flex min-w-[110px] flex-col items-center gap-8 [&_.first]:self-start">
      <ThemeToggle className="first ml-3" size={16} />
      <ButtonGroupThemeToggle className="-ml-3" />
      <DropdownThemeToggle />
    </div>
  );
}
