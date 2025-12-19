import Link from "next/link";
import { blog } from "@/lib/source";

export default function Home() {
  const posts = blog.getPages();
  const contentHeight =
    "min-h-[calc(100dvh-var(--nav-height)-var(--footer-height)-var(--banner-height)-1px)]";

  return (
    <main
      className={`mx-auto ${contentHeight} w-full max-w-[1400px] flex-1 px-4 py-8`}
    >
      <h1 className="mb-8 text-4xl font-bold">Latest Blog Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.url}
            href={post.url}
            className="hover:bg-secondary/60 block overflow-hidden p-6"
          >
            <h3 className="mb-2 opacity-85">{post.data.title}</h3>
            <p className="text-muted-foreground mb-4">
              {post.data.description}
            </p>

            <div className="_footer mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="_avatar size-6 rounded-full bg-linear-to-bl from-pink-400 to-sky-200" />
                <p className="text-muted-foreground">{post.data.author}</p>
              </div>
              <div className="_date">
                <p>{`${post.data.date.toLocaleString().split(",")[0]}`}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
