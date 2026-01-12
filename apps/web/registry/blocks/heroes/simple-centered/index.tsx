import Background from "@/registry/components/_ui/background";
import NavbarStartEnd from "@/registry/components/navs/start-end";

export default function HeroSimpleCentered() {
  return (
    <>
      <NavbarStartEnd className="[--nav-height:50px]" />
      <section className="_ui grid h-[calc(100dvh-var(--nav-height)-8px)] place-items-center">
        <Background>
          <Background.Gradient gradient="cosmicAurora" opacity={0.2} />
        </Background>

        <div className="container-8xl relative z-1">
          <div>
            <div className="_header max-w-lg text-center text-balance">
              <h3 className="text-center">
                Empowering the next generation of Engineers.
              </h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                tenetur nostrum et deserunt, omnis praesentium
              </p>
            </div>
            <div className="_btns"></div>
          </div>
        </div>
      </section>
    </>
  );
}
