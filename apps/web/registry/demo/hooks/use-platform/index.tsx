import { ScrollArea, ScrollBar } from "@_ndk/ui/components/ui/scroll-area";
import { usePlatform } from "@/registry/hooks/use-platform";
import Background from "@/registry/components/_ui/background";
import PopoverUI from "@/registry/components/_ui/popover-ui";
import Link from "next/link";

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

      <section className="relative z-1 mb-20 h-full w-full overflow-x-hidden px-20 pt-10 text-[0.8rem]">
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
            <p className="text-muted-foreground shrink-0">
              <PopoverUI
                showArrow
                content={
                  <div className="text-muted-foreground text-[0.7rem]">
                    <span>
                      A User Agent (UA) is a computer program representing a
                      person, example a browser (in Web context). A UA could
                      also be a bot, download manager or another app accessing
                      the web.{" "}
                    </span>
                    <Link
                      className="mt-3 block underline hover:opacity-80"
                      href="https://developer.mozilla.org/en-US/docs/Glossary/User_agent"
                    >
                      Learn More
                    </Link>
                  </div>
                }
                className="min-w-[250px]"
                align="start"
                trigger={
                  <span className="border-b border-dashed pb-0.5">
                    User agent
                  </span>
                }
              />
            </p>
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
