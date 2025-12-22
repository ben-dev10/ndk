import { Button } from "@_ndk/ui/components/ui/button";
import { DropdownThemeToggle } from "@_ndk/ui/components/_ui/theme-toggles";
import { MotionStagger } from "@_ndk/motion/core";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@_ndk/ui/components/ui/dialog";
import Link from "next/link";
import ThemeImage from "@/components/_ui/theme-image";

export const contentHeight =
  "min-h-[calc(100dvh-var(--nav-height)-var(--footer-height)-var(--banner-height)-1px)]";

export default function Home() {
  return (
    <>
      <main
        className={`_homepage ${contentHeight} bg-background grid grid-cols-1 place-items-center overflow-hidden p-20`}
      >
        <div className="_contents min-w-[300px] p-4 lg:min-w-lg">
          <MotionStagger preset="blurIn">
            <h4 className="mb-2 flex items-center gap-2 text-5xl font-extrabold">
              <ThemeImage
                width={31}
                height={31}
                alt="ndk logo"
                srcDark="/svgs/ndk-dark.svg"
                srcLight="/svgs/ndk-light.svg"
                className="-mb-2 w-8"
              />
              ndk
            </h4>

            <p className="text-muted-foreground mb-10">
              A mini toolkit for frontend development.
            </p>

            <div className="flex gap-2">
              <Link href="/docs/ui">
                <Button className="mb-5 w-full">Get Started</Button>
              </Link>
              <Link href="/blocks">
                <Button variant="secondary" className="mb-5 w-full">
                  See blocks
                </Button>
              </Link>
            </div>

            <hr className="mt-10 mb-3" />

            <div className="_primitives flex flex-col gap-y-5">
              <small className="text-muted-foreground">
                Test out these components from the library.
              </small>

              <div className="flex gap-4">
                <DropdownThemeToggle />

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost">Show modal!</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>shadcn components</DialogTitle>
                      <DialogDescription className="text-muted-foreground">
                        Most ui components provided by the @_ndk/ui package are
                        just plain shadcn components bundled up into a neat
                        small package along with other helpful tools and
                        utilities.
                      </DialogDescription>
                      <div className="mt-5">
                        <ThemeImage
                          srcLight="/imgs/ndk-banner--light.webp"
                          srcDark="/imgs/ndk-banner--dark.webp"
                          className="w-full"
                          alt="Turborepo logo"
                          width={180}
                          height={38}
                        />
                      </div>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </MotionStagger>
        </div>
      </main>
    </>
  );
}
