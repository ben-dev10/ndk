import Background from "@/registry/components/_ui/background";
import Section from "@/registry/components/_ui/section";
import NavbarStartEnd from "@/registry/components/navs/start-end";
import gradientImg from "@/registry/assets/imgs/gradient-img.png";
import { Button } from "@_ndk/ui/components/ui/button";

const imgUrl = `bg-[url(${gradientImg.src})]`;

export default function HeroSimpleCentered() {
  console.log(imgUrl);
  return (
    <>
      <NavbarStartEnd gradient={false} className="[--nav-height:50px]" />
      <Section.RootElement className="_ui _hero grid h-[calc(100dvh-var(--nav-height)-8px)] place-items-center">
        <Section.Container container="8xl">
          <Background className="flex items-center justify-center overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              aria-hidden="true"
              alt="background gradient"
              src={gradientImg.src}
              className="absolute mx-auto min-w-[2000px] opacity-20 max-sm:self-start"
            />
          </Background>
          <div className="relative z-1 p-4">
            <div>
              <div className="_header mb-8 max-w-2xl text-center text-balance">
                <h1 className="text-center max-md:text-4xl">
                  Empowering the next generation of Engineers.
                </h1>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  tenetur nostrum et deserunt, omnis praesentium
                </p>
              </div>
              <div className="_btns flex justify-center gap-3">
                <Button className="rounded-full">Get started</Button>
                <Button variant="ghost" className="rounded-full">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </Section.Container>
      </Section.RootElement>
    </>
  );
}
