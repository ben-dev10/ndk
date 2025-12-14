import { Button } from "@ndk/ui/components/ui/button";
import { DropdownThemeToggle } from "@ndk/ui/components/_ui/theme-toggles";
import { MotionStagger } from "@ndk/motion/core";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@ndk/ui/components/ui/dialog";
import Image, { ImageProps } from "next/image";
import Navbar from "./_components/navbar";

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
      <main className="grid min-h-[calc(100vh-var(--nav-height)-1px)] place-items-center p-20">
        <div className="_wrapper">
          <MotionStagger preset="blurIn">
            <h4 className="mb-2 text-5xl font-extrabold">ndk</h4>
            <p className="text-muted-foreground mb-10">
              A mini toolkit for frontend development.
            </p>
            <div className="_primitives flex gap-2">
              <DropdownThemeToggle />
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="">Show modal!</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>shadcn components</DialogTitle>
                    <DialogDescription className="text-muted-foreground">
                      Most ui components provided by the @ndk/ui package are
                      just plain shadcn components bundled up into a neat small
                      package along with other helpful tools and utilities.
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
          </MotionStagger>
          <div className="_docs hidden"> Docs</div>
        </div>
      </main>
    </>
  );
}
