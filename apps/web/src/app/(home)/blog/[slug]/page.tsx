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
  return (
    <>
      <Section.RootElement>
        <Section.Container container="8xl" className="px-(--gutter-x)">
          <Link
            href="/blog"
            className="text-muted-foreground mt-5 flex items-center gap-1"
          >
            <ArrowLeft size={15} /> <span>Back</span>
          </Link>
          <div className="py-12">
            <h1 className="mb-2 text-3xl font-bold">{page.data.title}</h1>
            <p className="text-fd-muted-foreground mb-4">
              {page.data.description}
            </p>

            <div className="_data mt-5 flex gap-4 text-sm">
              <div>
                <p className="text-fd-muted-foreground mb-1">Written by</p>
                <p className="font-medium">{page.data.author}</p>
              </div>
              <div>
                <p className="text-fd-muted-foreground mb-1 text-sm">At</p>
                <p className="font-medium">
                  {new Date(page.data.date).toDateString()}
                </p>
              </div>
            </div>
          </div>

          <article className="flex min-h-[80dvh] flex-col">
            <div className="prose min-w-0">
              <InlineTOC className="mb-10" items={page.data.toc} />
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
