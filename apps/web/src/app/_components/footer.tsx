import Section from "@_ndk/ui/components/_ui/section";
import { GITHUB_LINK, NARDSTUDIOS_SITE } from "../_assets/constants";
import Link from "next/link";

export default function footer() {
  return (
    <Section.RootElement className="">
      <Section.Container
        container="8xl"
        className="flex items-center justify-center"
      >
        <div className="opacity-80">
          Built by{" "}
          <Link href={GITHUB_LINK} className="text-muted-foreground underline">
            nard
          </Link>
          , source code available on{" "}
          <Link
            className="text-muted-foreground underline"
            href={NARDSTUDIOS_SITE}
          >
            Github
          </Link>{" "}
        </div>
      </Section.Container>
    </Section.RootElement>
  );
}
