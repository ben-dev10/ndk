import Section from "@_ndk/ui/components/_ui/section";
import { GITHUB_LINK, NARDSTUDIOS_SITE } from "../_assets/constants";
import Link from "next/link";

export default function footer() {
  return (
    <Section.RootElement className="">
      <Section.Container
        container="8xl"
        className="flex h-(--footer-height) items-center justify-center"
      >
        <div className="opacity-80">
          Built by{" "}
          <Link
            href={NARDSTUDIOS_SITE}
            className="text-muted-foreground underline"
          >
            nard
          </Link>
          , source code available on{" "}
          <Link className="text-muted-foreground underline" href={GITHUB_LINK}>
            Github
          </Link>{" "}
        </div>
      </Section.Container>
    </Section.RootElement>
  );
}
