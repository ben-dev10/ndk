"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Button } from "@_ndk/ui/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@_ndk/ui/components/ui/dropdown-menu";
import { MoonIcon, SunIcon, MonitorIcon, ChevronDownIcon } from "lucide-react";
import SpinnerRing180 from "@_ndk/ui/icons/180-spinner";
import { cn } from "@_ndk/ui/utils";

export const DisabledSpinner = () => {
  return (
    <Button
      variant="outline"
      className="text-foreground rounded-full"
      size="icon"
      disabled
    >
      <span className="sr-only">
        <SpinnerRing180 className="w-2" />
      </span>
    </Button>
  );
};

/*
 * 1. Classic Toggle - Sun/Moon switch
 */
export function ClassicThemeToggle({
  size = 14,
  className,
}: {
  size?: number;
  className?: string;
}) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Prevent hydration mismatch by rendering a disabled placeholder button
  if (!mounted) return <DisabledSpinner />;

  const handleToggle = () => {
    if (theme === "system") {
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
    } else {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={handleToggle}
      className={cn(
        "hover:bg-secondary/10 max-w-max rounded-full border p-1.5 transition-colors",
        className,
      )}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      {isDark ? <MoonIcon size={size} /> : <SunIcon size={size} />}
    </button>
  );
}

/*
 * 2. Button Group - Three options toggle
 */
export function ButtonGroupThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <DisabledSpinner />;

  const options = [
    { value: "light", icon: <SunIcon size={18} />, label: "Light" },
    { value: "dark", icon: <MoonIcon size={18} />, label: "Dark" },
    { value: "system", icon: <MonitorIcon size={18} />, label: "System" },
  ];

  return (
    <div className={`flex max-w-max rounded-full ${className}`}>
      {options.map(({ value, icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
            theme === value
              ? "bg-white text-gray-900 shadow-sm dark:bg-gray-200 dark:text-gray-50" // active option
              : "hover:text-gray-9 text-gray-600 dark:text-gray-400 dark:hover:text-gray-100"
          } `}
          aria-label={`Switch to ${label.toLowerCase()} theme`}
        >
          {icon}
          <span className="hidden [sm:inline]">{label}</span>
        </button>
      ))}
    </div>
  );
}

/*
 * 3. Dropdown - Compact menu
 */
export function DropdownThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <DisabledSpinner />;

  const options = [
    { value: "light", icon: <SunIcon size={16} />, label: "Light" },
    { value: "dark", icon: <MoonIcon size={16} />, label: "Dark" },
    { value: "system", icon: <MonitorIcon size={16} />, label: "System" },
  ];

  const currentOption =
    options.find((option) => option.value === theme) || options[2]!;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="border-border max-w-max gap-2">
          {currentOption.icon}
          <span>{currentOption.label}</span>
          <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {options.map(({ value, icon, label }) => (
          <DropdownMenuItem
            key={value}
            onClick={() => setTheme(value)}
            className={`gap-3 ${theme === value ? "bg-accent" : ""}`}
          >
            {icon}
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
