import { Spinner } from "@_ndk/ui/components/ui/spinner";
import { cn } from "@_ndk/ui/utils";
import React from "react";

export const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={cn("_ui-loader", className)}>
      <div className="_wrapper flex max-h-[50px] min-h-[50px] shrink-0 items-center gap-2">
        <Spinner />
        <p className="text-muted-foreground shrink-0">Loading...</p>
      </div>
    </div>
  );
};
