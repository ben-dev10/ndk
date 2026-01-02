import { source } from "@/utils/lib/source";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { getMDXComponents } from "@/mdx-components";
import { ArrowUpRight, Edit } from "lucide-react";
import DocBadges from "@/components/docs/badges";
import fm from "front-matter";
import { z } from "zod";
import { Badge } from "@_ndk/ui/components/ui/badge";

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

export default async function Page(props: PageProps<"/docs/[[...slug]]">) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;

  const raw = await page.data.getText("raw");
  const { attributes } = fm(raw);
  const { links } = z
    .object({
      links: z
        .object({
          doc: z.string().optional(),
          api: z.string().optional(),
        })
        .optional(),
    })
    .parse(attributes);

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className={`${page.data.pills || links ? "mb-2" : ""}`}>
        {page.data.description}
      </DocsDescription>
      {page.data.pills && <DocBadges pills={page.data.pills} />}

      {links ? (
        <div className="mb-12 flex items-center gap-2">
          {links?.doc && (
            <Badge asChild variant="secondary" className="rounded-full">
              <a href={links.doc} target="_blank" rel="noreferrer">
                Docs <ArrowUpRight />
              </a>
            </Badge>
          )}
          {links?.api && (
            <Badge asChild variant="secondary" className="rounded-full">
              <a href={links.api} target="_blank" rel="noreferrer">
                API Reference <ArrowUpRight />
              </a>
            </Badge>
          )}
        </div>
      ) : (
        ""
      )}

      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>

      <div className="_github-edit my-4 border-y px-3 py-4">
        <a
          href={`https://github.com/ben-dev10/ndk/blob/main/apps/web/content/docs/${page.path}`}
          rel="noreferrer noopener"
          target="_blank"
          className="text-fd-secondary-foreground/70 hover:text-fd-accent-foreground flex w-fit items-center p-2 text-sm font-medium transition-colors hover:underline"
        >
          <Edit className="mr-1.5 size-4" />
          Edit on GitHub
        </a>
      </div>
    </DocsPage>
  );
}

export async function generateMetadata(
  props: PageProps<"/docs/[[...slug]]">,
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      title: page.data.title,
      description: page.data.description,
      url: "https://ndk-ui.vercel.app",
      siteName: "NDK UI",
      // images: image,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@ndk_ui",
      title: page.data.title,
      description: page.data.description,
      // images: image,
    },
  };
}

export async function generateStaticParams() {
  return source.generateParams();
}
