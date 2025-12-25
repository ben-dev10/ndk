"use client";

import { Button } from "@_ndk/ui/components/ui/button";
import { cn } from "@_ndk/ui/lib/utils";
import { Fullscreen, Loader, RotateCcw } from "lucide-react";
import { Suspense, useState } from "react";
import { motion } from "motion/react";
import Iframe from "./iframe";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@_ndk/ui/components/ui/resizable";

interface ComponentWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  iframe?: boolean;
  bigScreen?: boolean;
}

export const ComponentWrapper = ({
  className,
  children,
  name,
  iframe = false,
  bigScreen = false,
}: ComponentWrapperProps) => {
  const [key, setKey] = useState(0);

  return (
    <div className="bg-accent overflow-hidden rounded-xl p-1.5">
      <motion.div
        id="component-wrapper"
        className={cn(
          "bg-background relative flex max-w-screen flex-col rounded-md md:flex-row",
          bigScreen && "overflow-hidden",
          className,
        )}
      >
        <motion.div className="relative size-full flex-1">
          <div className="_action-btns bg-background absolute top-3 right-3 z-9 flex items-center justify-end gap-2 rounded-[11px] p-1">
            {!iframe && (
              <Button
                onClick={() => setKey((prev) => prev + 1)}
                className="_refresh-btn flex items-center rounded-lg"
                variant="neutral"
                size="icon-sm"
                asChild
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <RotateCcw aria-label="restart-btn" size={14} />
                </motion.button>
              </Button>
            )}

            {iframe && (
              <Button
                onClick={() => window.open(`/examples/${name}`, "_blank")}
                className="_full-screen-btn flex items-center rounded-lg"
                variant="neutral"
                size="icon-sm"
                asChild
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Fullscreen aria-label="fullscreen-btn" size={14} />
                </motion.button>
              </Button>
            )}
          </div>

          {iframe ? (
            <div className="_iframe-wrapper overflow-clip rounded-xl">
              <ResizablePanelGroup
                direction="horizontal"
                className="min-h-[350px]"
              >
                <ResizablePanel defaultSize={100} minSize={45}>
                  <Suspense
                    fallback={
                      <div className="text-muted-foreground flex items-center text-sm">
                        <Loader className="mr-2 size-4 animate-spin" />
                        Loading...
                      </div>
                    }
                  >
                    <Iframe key={key} name={name} bigScreen={bigScreen} />
                  </Suspense>
                </ResizablePanel>
                <ResizableHandle withHandle className="hidden w-px md:flex" />
                <ResizablePanel>
                  <div className="_empty h-full rounded-tr-lg rounded-br-lg bg-transparent" />
                </ResizablePanel>
                <ResizableHandle />
              </ResizablePanelGroup>
            </div>
          ) : (
            <div
              key={key}
              className="_normal-preview-wrapper flex max-h-[380px] min-h-[350px] w-full items-center justify-center px-10 py-16"
            >
              {children}
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};
