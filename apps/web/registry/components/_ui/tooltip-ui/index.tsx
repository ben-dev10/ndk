import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@_ndk/ui/components/ui/tooltip";
import { cn } from "@_ndk/ui/utils";

export const Trigger01 = () => {
  return (
    <svg fill="none" viewBox="0 0 16 16" className="size-5 flex-none">
      <path
        className="fill-gray-600 transition-colors group-hover:fill-gray-400 group-aria-expanded:fill-gray-400"
        d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm4 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8 8a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Z"
      ></path>
    </svg>
  );
};

export const TooltipUI = ({
  content = "Tooltip",
  trigger,
  asChild,
  className,
  sideOffset,
  side,
}: {
  content?: React.ReactNode;
  trigger?: React.ReactNode;
  asChild?: boolean | undefined;
  className?: string;
  sideOffset?: number;
  side?: "top" | "right" | "bottom" | "left" | undefined;
}) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild={asChild}>
        {trigger ? trigger : <Trigger01 />}
      </TooltipTrigger>
      <TooltipContent
        side={side}
        sideOffset={sideOffset}
        className={cn("w-[150px] max-w-max [--primary:#000]", className)}
      >
        {content}
      </TooltipContent>
    </Tooltip>
  );
};
