import { Button } from "@_ndk/ui/components/ui/button";
import { MotionStagger } from "@_ndk/motion/core";
import Link from "next/link";
import Footer from "../_components/footer";
import heroLight from "./home-hero-light.png";
import heroDark from "./home-hero-dark.png";
import ThemeImage from "@/registry/components/_ui/theme-img";

export const contentHeight =
  "min-h-[calc(100dvh-var(--nav-height)-var(--footer-height)-var(--banner-height)-1px)]";

export default function Home() {
  return (
    <>
      <main
        className={`_homepage ${contentHeight} bg-background overflow-hidden p-10`}
      >
        <div className="_contents p-4">
          <MotionStagger preset="blurIn">
            <div className="_heading mx-auto sm:max-w-3xl">
              <h1 className="mb-3 text-center text-balance max-sm:text-[1.72rem] sm:max-w-3xl md:text-[2.6rem]">
                A Component library and toolkit for developers.
              </h1>
              <p className="text-muted-foreground mx-auto mb-10 text-center sm:max-w-2xl sm:text-[1.2rem]">
                A suite of UI components, themes, utilities and more for rapid
                prototyping and development.
              </p>
            </div>

            <div className="flex justify-center gap-3">
              <Link href="/docs/ui" className="">
                <Button className="rounded-full">Documentation</Button>
              </Link>
              <Link href="/blocks" className="">
                <Button variant="secondary" className="rounded-full">
                  See blocks
                </Button>
              </Link>
            </div>

            <div className="_hero-imgs mx-auto mt-10 max-w-7xl min-w-4xl p-10 max-md:mt-8">
              <ThemeImage
                width={2474}
                height={1337}
                alt="ndk logo"
                srcDark={heroDark.src}
                srcLight={heroLight.src}
                className="shadow-2xl shadow-black max-sm:-ml-16"
              />
            </div>
          </MotionStagger>
        </div>
      </main>
      <Footer />
    </>
  );
}
