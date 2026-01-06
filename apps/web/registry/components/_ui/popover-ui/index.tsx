import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@_ndk/ui/components/ui/popover";
import { cn } from "@_ndk/ui/utils";

export const Trigger01 = () => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className="text-white/50"
    >
      <path
        d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM8.24992 4.49999C8.24992 4.9142 7.91413 5.24999 7.49992 5.24999C7.08571 5.24999 6.74992 4.9142 6.74992 4.49999C6.74992 4.08577 7.08571 3.74999 7.49992 3.74999C7.91413 3.74999 8.24992 4.08577 8.24992 4.49999ZM6.00003 5.99999H6.50003H7.50003C7.77618 5.99999 8.00003 6.22384 8.00003 6.49999V9.99999H8.50003H9.00003V11H8.50003H7.50003H6.50003H6.00003V9.99999H6.50003H7.00003V6.99999H6.50003H6.00003V5.99999Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const Trigger02 = () => {
  return (
    <svg fill="none" viewBox="0 0 16 16" className="size-5 flex-none">
      <path
        className="fill-neutral-500 transition-colors group-hover:fill-gray-400 group-aria-expanded:fill-gray-400"
        d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm4 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8 8a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Z"
      ></path>
    </svg>
  );
};

export default function PopoverUI({
  content = "Popover",
  className,
  trigger,
  align,
  asChild,
  side,
  disabled,
  showArrow = false,
}: {
  content: React.ReactNode | string;
  className?: string;
  trigger?: React.ReactNode | string;
  align?: "center" | "start" | "end" | undefined;
  asChild?: boolean | undefined;
  side?: "top" | "right" | "bottom" | "left" | undefined;
  disabled?: boolean | undefined;
  showArrow?: boolean;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild={asChild} disabled={disabled}>
        {trigger ? trigger : <Trigger02 />}
      </PopoverTrigger>
      <PopoverContent
        showArrow={showArrow}
        align={align}
        side={side}
        className={cn(
          "w-[170px] max-w-max rounded-[10px] p-1.5 px-2.5 text-[0.8rem]",
          className,
        )}
      >
        {content}
      </PopoverContent>
    </Popover>
  );
}
