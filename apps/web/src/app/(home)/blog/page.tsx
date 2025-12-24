import Link from "next/link";
import { blog } from "@/lib/source";

export default function Home() {
  const posts = blog.getPages();
  const contentHeight =
    "min-h-[calc(100dvh-var(--nav-height)-var(--footer-height)-var(--banner-height)-1px)]";

  return (
    <main
      className={`mx-auto ${contentHeight} container-8xl w-full flex-1 px-4 py-8`}
    >
      <h1 className="my-8 text-4xl font-bold">Latest Blog Posts</h1>

      <div className="_card-list grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.url}
            href={post.url}
            className="_post-card bg-secondary/40 hover:bg-secondary/70 block overflow-hidden rounded-md p-6 transition-colors duration-300"
          >
            <h5 className="_card-title mb-2 opacity-85">{post.data.title}</h5>
            <p className="text-muted-foreground mb-4 text-[0.9rem]">
              {post.data.description}
            </p>

            <div className="_card-footer mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="_avatar size-6 rounded-full bg-linear-to-bl from-neutral-400 to-sky-100 opacity-90" />
                <p className="_author text-muted-foreground text-[0.9rem]">
                  {post.data.author}
                </p>
              </div>
              <div className="_date text-[0.9rem] opacity-90">
                <p>{`${post.data.date.toLocaleString().split(",")[0]}`}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
