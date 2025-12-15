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
import Image, { ImageProps } from "next/image";
import Navbar from "./_components/navbar";
import Link from "next/link";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image
        {...rest}
        src={srcLight}
        className="imgLight block w-full dark:hidden"
      />
      <Image
        {...rest}
        src={srcDark}
        className="imgDark hidden w-full dark:block"
      />
    </>
  );
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-background grid min-h-[calc(100dvh-var(--nav-height)-1px)] grid-cols-1 place-items-center overflow-hidden p-20">
        <div className="_contents min-w-[300px] p-4 lg:min-w-lg">
          <MotionStagger preset="blurIn">
            <h4 className="mb-2 text-5xl font-extrabold">ndk</h4>
            <p className="text-muted-foreground mb-10">
              A mini toolkit for frontend development.
            </p>

            <Link href="/docs/ui">
              <Button className="mb-5 w-full">Get Started</Button>
            </Link>

            <hr className="mt-10 mb-3" />

            <div className="_primitives flex flex-col gap-y-5">
              <small className="text-muted-foreground">
                Test out these components from the library.
              </small>

              <div className="flex gap-4">
                <DropdownThemeToggle />

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="">Show modal!</Button>
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
          <div className="_docs hidden"> Docs</div>
        </div>
      </main>
    </>
  );
}
