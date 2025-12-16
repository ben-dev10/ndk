import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@_ndk/ui/components/ui/tooltip";

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
}: {
  content?: React.ReactNode;
}) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Trigger01 />
      </TooltipTrigger>
      <TooltipContent className="w-[150px] max-w-max [--primary:#000]">
        {content}
      </TooltipContent>
    </Tooltip>
  );
};
