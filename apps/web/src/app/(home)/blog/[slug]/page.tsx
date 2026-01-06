import { notFound } from "next/navigation";
import Link from "next/link";
import { InlineTOC } from "fumadocs-ui/components/inline-toc";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { blog } from "@/lib/source";
import { ArrowLeft } from "lucide-react";
import Section from "@_ndk/ui/components/_ui/section";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);
  if (!page) notFound();
  return {
    title: page.data.title,
    description: page.data.description,
  };
}

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blog.getPage([params.slug]);
  if (!page) notFound();
  const Mdx = page.data.body;

  const TOC_OFFSET = "top-[calc(var(--banner-height)+var(--nav-height)+1rem)]";

  return (
    <>
      <Section.RootElement>
        <Section.Container container="8xl" className="px-(--gutter-x)">
          <div className="_page-header mt-8 mb-4 border-b pb-4">
            <Link
              href="/blog"
              className="_back-btn text-muted-foreground mt-5 mb-4 flex items-center gap-1"
            >
              <ArrowLeft size={15} /> <span>Back</span>
            </Link>

            <h1 className="_blog-title mb-2 text-3xl font-bold">
              {page.data.title}
            </h1>
            <p className="_blog-description text-fd-muted-foreground mb-18">
              {page.data.description}
            </p>

            <div className="_data mt-5 flex gap-4 text-sm">
              <div className="_written-by">
                <p className="text-fd-muted-foreground mb-1">Written by</p>
                <p className="font-medium">{page.data.author}</p>
              </div>

              <div className="_date">
                <p className="text-fd-muted-foreground mb-1">At</p>
                <p className="font-medium">
                  {new Date(page.data.date).toDateString()}
                </p>
              </div>
            </div>
          </div>

          <article className="_article-body flex min-h-[80dvh] flex-col pb-20">
            <div className="_article-wrapper prose min-w-0">
              <InlineTOC
                className={`sticky ${TOC_OFFSET} mb-10`}
                items={page.data.toc}
              />
              <Mdx components={defaultMdxComponents} />
            </div>
          </article>
        </Section.Container>
      </Section.RootElement>
    </>
  );
}

export function generateStaticParams(): { slug: string | undefined }[] {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}
