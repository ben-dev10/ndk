import Background from "@_ndk/ui/components/_ui/background";
import { Button } from "@_ndk/ui/components/ui/button";

export default function DemoBackground() {
  return (
    <section className="_hero-section relative grid h-full w-full place-items-center rounded-md bg-black text-white">
      <Background className="_background opacity-40">
        <Background.Gradient
          gradient="flurryBlue"
          className="rounded-md bg-position-[0px_5px]"
        />

        <Background.Texture
          texture="noise"
          blendMode="color-burn"
          opacity={0.4}
          zIndex={99}
        />

        <Background.Img
          pattern="circuitBoardLight"
          className="rounded-md"
          size="40px 40px, 40px 40px, 40px 40px, 40px 40px"
        />
      </Background>

      <main className="_main-contents relative z-1 px-10">
        <div className="max-w-xl">
          <h2 className="mt-0 mb-3 text-center text-4xl text-white">
            Empowering the next generation of engineers
          </h2>
          <p className="mt-5 text-center opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            adipisci dolores assumenda.
          </p>
        </div>

        <div className="_buttons mt-8 flex items-center justify-center gap-3">
          <Button className="rounded-full">Get started</Button>
          <Button
            variant="link"
            className="rounded-full text-white hover:opacity-80"
          >
            Learn more
          </Button>
        </div>
      </main>
    </section>
  );
}
