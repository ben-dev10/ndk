import { notFound } from "next/navigation";
import Link from "next/link";
import { InlineTOC } from "fumadocs-ui/components/inline-toc";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { blog } from "@/lib/source";
import { ArrowLeft } from "lucide-react";
import Section from "@_ndk/ui/components/_ui/section";
import Image from "next/image";

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
      <Section.RootElement className="_ui">
        <Section.Container container="7xl" className="px-(--gutter-x)">
          <div className="_page-header mt-8 mb-6 pb-4">
            <Link
              href="/blog"
              className="_back-btn hover:bg-secondary text-muted-foreground mt-5 mb-6 -ml-3 flex max-w-max items-center gap-1 rounded-full p-1 px-3 text-[0.9rem] hover:opacity-80"
            >
              <ArrowLeft size={15} /> <span>Back</span>
            </Link>

            <h1 className="_blog-title font-InterV">{page.data.title}</h1>
            <h5 className="_blog-description text-fd-muted-foreground sm:max-w-xl">
              {page.data.description}
            </h5>
          </div>

          <article className="_article-body prose mb-20 flex min-h-[80dvh] min-w-0">
            <div className="_mdx-content grow">
              <InlineTOC
                className={`sticky ${TOC_OFFSET} bg-background z-3 mb-8 text-[0.8rem]`}
                items={page.data.toc}
              />
              <Mdx components={defaultMdxComponents} />
            </div>

            <aside className="_aside hidden w-[250px] shrink-0 px-5 pl-12 md:block">
              <div className="_author flex items-center gap-3">
                <div className="">
                  <Image
                    alt=""
                    width={2448}
                    height={2448}
                    src="/authors/nard.webp"
                    className="my-0! size-12 rounded-full grayscale"
                  />
                </div>
                <div className="-mt-3">
                  <p className="mb-0 text-[1.1rem]">{page.data.author}</p>
                  <span className="text-muted-foreground">
                    Software Developer
                  </span>
                </div>
              </div>
            </aside>
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
