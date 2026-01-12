import Link from "next/link";
import { blog } from "@/lib/source";

export default function Home() {
  const posts = blog.getPages();
  const contentHeight =
    "min-h-[calc(100dvh-var(--nav-height)-var(--footer-height)-var(--banner-height)-1px)]";

  return (
    <main className={`mx-auto ${contentHeight} w-full flex-1`}>
      <div className="bg-neutral-50 dark:bg-neutral-900">
        <div className="container-8xl px-4 py-12">
          <h1 className="mt-8 mb-3 text-4xl font-bold">Latest Blog Posts</h1>
          <p className="text-muted-foreground mb-12 sm:max-w-xl">
            Updates, news and project tracking will be detailed in posts here.
            Check back regularly to stay up-to-date with progress and
            announcements.
          </p>
        </div>
      </div>

      <hr className="mb-8" />

      <div className="container-8xl px-4">
        <div className="_card-list grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.url}
              href={post.url}
              className="_post-card bg-secondary/40 hover:bg-secondary/70 ring-accent dark:ring-accent/30 block overflow-hidden rounded-xl border p-6 ring-3 transition-colors duration-300"
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
                <div className="_date text-muted-foreground opacity-90">
                  <p className="text-[0.85rem]">{`${post.data.date.toLocaleString().split(",")[0]}`}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
