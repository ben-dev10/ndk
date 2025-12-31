import { ScrollArea, ScrollBar } from "@_ndk/ui/components/ui/scroll-area";
import { usePlatform } from "@/registry/hooks/use-platform";
import Background from "@/registry/components/_ui/background";

export default function UsePlatformDemo() {
  const { platform, userAgent, device, isDesktop, os, isMobile } =
    usePlatform();

  return (
    <ScrollArea className="h-[380px] rounded-lg">
      <Background>
        <Background.Gradient
          zIndex={1}
          gradient="cosmicAurora"
          className="rounded-lg to-40% mask-l-from-0% opacity-30! dark:opacity-55!"
        />
      </Background>

      <section className="relative z-1 h-full w-full mb-20 overflow-x-hidden px-20 pt-10 text-[0.8rem]">
        <h4 className="text-2xl">Current Device Platform Details</h4>
        <div className="_contents">
          <div className="_os flex items-center justify-between gap-25 border-b px-1">
            <p className="text-muted-foreground">OS</p>
            <p>{os}</p>
          </div>
          <div className="_os flex items-center justify-between gap-25 border-b px-1">
            <p className="text-muted-foreground">Platform</p>
            <p>{platform}</p>
          </div>
          <div className="_os flex items-center justify-between gap-25 border-b px-1">
            <p className="text-muted-foreground">Device</p>
            <p>{device}</p>
          </div>
          <div className="_os flex items-center justify-between gap-25 border-b px-1">
            <p className="text-muted-foreground shrink-0">User Agent</p>
            <p className="">{userAgent}</p>
          </div>
          <div className="_os flex items-center justify-between gap-25 border-b px-1">
            <p className="text-muted-foreground">isDesktop?</p>
            <p className="">{`${isDesktop}`}</p>
          </div>
          <div className="_os flex items-center justify-between gap-25 border-b px-1">
            <p className="text-muted-foreground">isMobile?</p>
            <p className="">{`${isMobile}`}</p>
          </div>
        </div>
      </section>
      <ScrollBar orientation="horizontal" />
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
}
