"use client";

import { Button } from "@_ndk/ui/components/ui/button";
import { cn } from "@_ndk/ui/lib/utils";
import { Fullscreen, RotateCcw } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import Iframe from "./iframe";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./resizable";
import useMounted from "@/hooks/use-mounted";
import { Loader } from "@/components/_ui/loader";
import { useIsMobile } from "@_ndk/ui/hooks/use-mobile";

interface ComponentWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  height?: string;
  iframe?: boolean;
  bigScreen?: boolean;
}

export const ComponentWrapper = ({
  className,
  children,
  height = "max-h-[380px] min-h-[380px]",
  name,
  iframe = false,
  bigScreen = false,
}: ComponentWrapperProps) => {
  const [key, setKey] = useState(0);
  const mounted = useMounted();
  const isMobile = useIsMobile();

  return (
    <div className="bg-accent overflow-hidden rounded-lg p-1.5">
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
            <div className={`_iframe-wrapper rounded-lg ${height}`}>
              {!mounted && (
                <div className="h-full w-full rounded-xl">
                  <Loader
                    className={`grid h-full place-items-center ${height}`}
                  />
                </div>
              )}
              {mounted && (
                <ResizablePanelGroup
                  direction="horizontal"
                  className="min-h-[350px] rounded-lg"
                >
                  <ResizablePanel
                    defaultSize={100}
                    minSize={isMobile ? 100 : 55}
                  >
                    <Iframe
                      height={height}
                      key={key}
                      name={name}
                      bigScreen={bigScreen}
                    />
                  </ResizablePanel>
                  <ResizableHandle withHandle className="hidden w-px md:flex" />

                  <ResizablePanel>
                    <div className="_empty h-full rounded-tr-lg rounded-br-lg bg-transparent" />
                  </ResizablePanel>
                </ResizablePanelGroup>
              )}
            </div>
          ) : (
            <div
              key={key}
              className={`_normal-preview-wrapper ${height} grid w-full place-items-center`}
            >
              {!mounted && <Loader className="" />}
              {mounted && <>{children}</>}
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};
