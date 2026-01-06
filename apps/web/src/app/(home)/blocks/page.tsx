import Section from "@_ndk/ui/components/_ui/section";
import { Button } from "@_ndk/ui/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroLight from "./_assets/hero.png";
import heroDark from "./_assets/hero-dark.png";
import ThemeImage from "@/registry/components/_ui/theme-img";
import Link from "next/link";
import Footer from "@/app/_components/footer";

const links = [
  {
    name: "Navbars",
    url: "/blocks/app-blocks/navbars",
    img: {
      srcLight: heroLight.src,
      srcDark: heroDark.src,
    },
    components: "2 components",
  },
  {
    name: "Heroes",
    url: "/blocks/app-blocks/heroes",
    img: {
      srcLight: heroLight.src,
      srcDark: heroDark.src,
    },
    components: "1 component",
  },
  {
    name: "Navbars",
    url: "#",
    img: {
      srcLight: heroLight.src,
      srcDark: heroDark.src,
    },
    components: "1 component",
  },
  {
    name: "Navbars",
    url: "#",
    img: {
      srcLight: heroLight.src,
      srcDark: heroDark.src,
    },
    components: "1 component",
  },
];

const MainVerticalGridLines = () => {
  return (
    <div className="pointer-events-none fixed inset-y-0 z-10 h-full w-full px-[14px]">
      <div className="container-8xl h-full border-x"></div>
    </div>
  );
};

const Hero = () => {
  return (
    <Section.RootElement>
      <Section.Container container="8xl" className="px-[14px] py-6 pt-18">
        <Link href="https://tailwindcss.com/plus" target="_blank">
          <Button
            className="group ml-px flex items-center gap-2 rounded-full border text-[0.8rem]!"
            variant="ghost"
          >
            <Sparkles className="group-hover:animation-duration-[6s]! group-hover:paused! fill-blue-500 stroke-blue-500 group-hover:animate-spin!" />
            <div>
              Inspired by <span>TailwindPlus</span>
            </div>
          </Button>
        </Link>
        <div className="_header">
          <h2 className="max-sm:text-3xl md:max-w-[700px]">
            Beautifully Designed Open-Source UI Components and Templates.
          </h2>
          <p className="text-muted-foreground md:max-w-[600px]">
            Browse through a growing collection of free components - simply
            copy-paste any you like or automate the whole process by fetching
            them with the shadcn/cli!
          </p>
        </div>

        <div className="_cta mt-10 flex items-center gap-3">
          <Button className="ml-px flex items-center rounded-full">
            Live Previews <ArrowRight className="opacity-80" />
          </Button>
          <Link href="/docs/ui">
            <Button variant="outline" className="rounded-full">
              Documentation
            </Button>
          </Link>
        </div>
      </Section.Container>
    </Section.RootElement>
  );
};

const StickySectionNav = () => {
  return (
    <Section.RootElement className="bg-background sticky top-[calc(var(--banner-height)+var(--nav-height))] z-2 mt-10 border-y px-[14px]">
      <div className="container-8xl flex items-center divide-x">
        <a href="#app-blocks">
          <button className="px-4 py-3 text-[0.7rem] uppercase">
            APP Blocks
          </button>
        </a>
        <a href="#layouts">
          <button className="px-4 py-3 text-[0.7rem] uppercase">Layouts</button>
        </a>
        <a href="#templates">
          <button className="border-r px-4 py-3 text-[0.7rem] uppercase">
            Templates
          </button>
        </a>
      </div>
    </Section.RootElement>
  );
};

/*
 * APPBlocks Grid
 */
const APPBlocksGridHeader = () => {
  return (
    <Section.RootElement
      id="app-blocks"
      className="mt-20 mb-8 scroll-mt-43 border-y px-[14px]"
    >
      <div className="_header container-8xl px-[14px] py-6">
        <h5 className="mb-1">Application Blocks</h5>
        <p className="text-muted-foreground">
          Fundamental blocks for building applications - navbars, heroes,
          sections .etc{" "}
        </p>
      </div>
    </Section.RootElement>
  );
};

const grid = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
const APPBlocksGrid = () => {
  return (
    <Section.RootElement className="mb-15 border-y px-[14px]">
      <Section.Container container="8xl" className="">
        <ul className={`_grid-list relative ${grid}`}>
          <div
            className={`_grid-lines-vertical ${grid} pointer-events-none absolute inset-0`}
          >
            <div className="inset-0 col-start-2 hidden border-l sm:block" />
            <div className="inset-0 col-start-3 hidden border-l md:block" />
            <div className="inset-0 col-start-4 hidden border-l lg:block" />
          </div>
          <div
            className={`_grid-lines-horizontal ${grid} pointer-events-none absolute inset-0`}
          >
            <div className="inset-0 col-span-full row-start-2 hidden border-t sm:block xl:hidden" />
          </div>

          {links.map((item, index) => (
            <Link
              href={item.url}
              key={index}
              className="block last:border-b-0 max-sm:border-b"
            >
              <div className="p-2 pb-0">
                <ThemeImage
                  className="rounded-sm"
                  srcDark={item.img.srcDark}
                  srcLight={item.img.srcLight}
                />
              </div>
              <div className="p-2">
                <p className="">{item.name}</p>
                <span className="text-muted-foreground text-[0.9rem]">
                  {item.components}
                </span>
              </div>
            </Link>
          ))}
        </ul>
      </Section.Container>
    </Section.RootElement>
  );
};

/*
 * Layouts Grid
 */
const LayoutsGridHeader = () => {
  return (
    <Section.RootElement
      id="layouts"
      className="mt-20 mb-8 scroll-mt-43 border-y px-[14px]"
    >
      <div className="_header container-8xl px-[14px] py-6">
        <h5 className="mb-1">Layouts</h5>
        <p className="text-muted-foreground">Grid, Stacked layouts</p>
      </div>
    </Section.RootElement>
  );
};

const LayoutsGrid = () => {
  return (
    <Section.RootElement className="mb-15 border-y px-[14px]">
      <Section.Container container="8xl" className="">
        <ul className={`_grid-list relative ${grid}`}>
          <div
            className={`_grid-lines-vertical ${grid} pointer-events-none absolute inset-0`}
          >
            <div className="inset-0 col-start-2 hidden border-l sm:block" />
            <div className="inset-0 col-start-3 hidden border-l md:block" />
            <div className="inset-0 col-start-4 hidden border-l lg:block" />
          </div>
          <div
            className={`_grid-lines-horizontal ${grid} pointer-events-none absolute inset-0`}
          >
            <div className="inset-0 col-span-full row-start-2 hidden border-t sm:block xl:hidden" />
          </div>

          {links.map((item, index) => (
            <Link
              href={item.url}
              key={index}
              className="block last:border-b-0 max-sm:border-b"
            >
              <div className="p-2 pb-0">
                <ThemeImage
                  className="rounded-sm"
                  srcDark={item.img.srcDark}
                  srcLight={item.img.srcLight}
                />
              </div>
              <div className="p-2">
                <p className="">{item.name}</p>
                <span className="text-muted-foreground text-[0.9rem]">
                  {item.components}
                </span>
              </div>
            </Link>
          ))}
        </ul>
      </Section.Container>
    </Section.RootElement>
  );
};

/*
 * Layouts Grid
 */
const TemplatesGridHeader = () => {
  return (
    <Section.RootElement
      id="templates"
      className="mt-20 mb-8 scroll-mt-43 border-y px-[14px]"
    >
      <div className="_header container-8xl px-[14px] py-6">
        <h5 className="mb-1">Templates</h5>
        <p className="text-muted-foreground">Fully built pages</p>
      </div>
    </Section.RootElement>
  );
};

const TemplatesGrid = () => {
  return (
    <Section.RootElement className="mb-15 border-y px-[14px]">
      <Section.Container container="8xl" className="">
        <ul className={`_grid-list relative ${grid}`}>
          <div
            className={`_grid-lines-vertical ${grid} pointer-events-none absolute inset-0`}
          >
            <div className="inset-0 col-start-2 hidden border-l sm:block" />
            <div className="inset-0 col-start-3 hidden border-l md:block" />
            <div className="inset-0 col-start-4 hidden border-l lg:block" />
          </div>
          <div
            className={`_grid-lines-horizontal ${grid} pointer-events-none absolute inset-0`}
          >
            <div className="inset-0 col-span-full row-start-2 hidden border-t sm:block xl:hidden" />
          </div>

          {links.map((item, index) => (
            <Link
              href={item.url}
              key={index}
              className="block last:border-b-0 max-sm:border-b"
            >
              <div className="p-2 pb-0">
                <ThemeImage
                  className="rounded-sm"
                  srcDark={item.img.srcDark}
                  srcLight={item.img.srcLight}
                />
              </div>
              <div className="p-2">
                <p className="">{item.name}</p>
                <span className="text-muted-foreground text-[0.9rem]">
                  {item.components}
                </span>
              </div>
            </Link>
          ))}
        </ul>
      </Section.Container>
    </Section.RootElement>
  );
};

/* main component */
export default function BlocksPage() {
  return (
    <>
      <main className="">
        <MainVerticalGridLines />
        <Hero />
        <StickySectionNav />
        <>
          <APPBlocksGridHeader />
          <APPBlocksGrid />
        </>
        <>
          <LayoutsGridHeader />
          <LayoutsGrid />
        </>
        <>
          <TemplatesGridHeader />
          <TemplatesGrid />
        </>
        <div className="_bottom-hatch-lines mt-50 mb-4 h-[35px] border-y bg-[repeating-linear-gradient(315deg,var(--border)_0,var(--border)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed" />
      </main>
      <Footer />
    </>
  );
}
