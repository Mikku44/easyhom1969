import { Link } from "react-router";

import { blogService } from "~/services/blogService";
import NotFound from "~/components/NotFound";
import BlogCard from "~/components/BlogCard";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Route } from "./+types/blog";
import { ChevronRight } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLine, FaEnvelope, FaFacebookF, FaXTwitter, FaLink } from "react-icons/fa6";

export async function loader({ params }: Route.LoaderArgs) {
  const blog = await blogService.getBySlug(params.slug);

  const all = await blogService.getAll(50);
  const related = all.blogs.filter((item) => item.slug !== params.slug);

  return {
    blog,
    relatedBlogs: related.slice(0, 3),
  };
}

export function meta({ loaderData }: Route.MetaArgs) {
  const blog = loaderData?.blog;

  if (!blog) return [];

  return [
    { title: blog.title },
    {
      name: "description",
      content: blog.excerpt || "",
    },
  ];
}

export default function BlogDetail({
  loaderData
}: Readonly<Route.ComponentProps>) {
  const { blog, relatedBlogs } = loaderData;

  if (!blog?.title) return <NotFound />;

  const publishDate = blog.publish_at;

  return (
    <main className="min-h-screen bg-white">
      {blog?.images?.[0] && (
        <div className="w-full h-[400px] md:h-[500px] overflow-hidden">
          <img
            src={blog.images[0]}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="max-w-3xl mx-auto px-4 py-10">
        <nav className="text-sm text-gray-400 mb-6 font-[300]">
          <ol className="flex space-x-2">
            <li>
              <a href="/" className="hover:text-[--primary-color] transition-colors">Home</a>
            </li>
            <li className="before:content-['/'] before:mx-2">
              <a href="/blogs" className="hover:text-[--primary-color] transition-colors">Blog</a>
            </li>
            <li className="before:content-['/'] before:mx-2 text-gray-600 truncate font-[300]">
              {blog.title}
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl md:text-4xl font-[300] text-gray-900 leading-tight mb-2">
          {blog.title}
        </h1>

        {blog.tags && (
          <span className="inline-block text-xs text-white bg-gray-900 rounded-full px-3 py-1 mb-4 font-[300]">
            {blog.tags.split(",")[0].trim()}
          </span>
        )}

        <div className="flex items-center gap-4 text-sm text-gray-400 font-[300] mb-8">
          {blog.author && (
            <span>By {blog.author}</span>
          )}
          {publishDate && (
            <>
              <span className="text-gray-300">|</span>
              <span>{publishDate}</span>
            </>
          )}
        </div>

        <div className="prose prose-lg max-w-none remark-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              table: ({ node, ...props }) => (
                <div className="overflow-x-auto">
                  <table className="border-collapse w-full" {...props} />
                </div>
              ),
              th: ({ node, ...props }) => (
                <th
                  className="border border-gray-300 bg-gray-100 px-3 py-2 text-left font-semibold"
                  {...props}
                />
              ),
              td: ({ node, ...props }) => (
                <td className="border border-gray-300 px-3 py-2" {...props} />
              )
            }}
          >
            {blog.contents}
          </ReactMarkdown>
        </div>

        {blog.tags && (
          <div className="mt-8 flex flex-wrap gap-2">
            {blog.tags
              ?.split(",")
              ?.slice(0, 5)
              ?.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="px-4 py-2 border border-gray-300 rounded-full text-gray-500 text-sm font-[300] hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors cursor-pointer"
                >
                  {tag.trim()}
                </span>
              ))}
          </div>
        )}

        <div className="mt-10 p-6 bg-gray-50 rounded-2xl border border-gray-100">
          <h2 className="text-lg font-[300] text-gray-900 mb-4">ติดต่อเรา</h2>
          <div className="flex flex-wrap gap-6 text-sm text-gray-500">
            <a href="tel:0657479789" className="flex items-center gap-2 hover:text-[--primary-color] transition-colors">
              <FaPhoneAlt size={14} className="text-[--primary-color]" />
              065-747-9789
            </a>
            <a href="https://line.me/ti/p/@easyhom1969" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[--primary-color] transition-colors">
              <FaLine size={16} className="text-[--primary-color]" />
              @easyhom1969
            </a>
            <a href="mailto:easyhom1969@gmail.com" className="flex items-center gap-2 hover:text-[--primary-color] transition-colors">
              <FaEnvelope size={14} className="text-[--primary-color]" />
              easyhom1969@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-6">
          <ShareSection />
        </div>
      </div>

      <section className="border-t border-gray-100 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-[300] text-gray-900">
              Another Tips & Tricks
            </h2>
            <Link
              to="/blogs"
              className="border border-gray-300 rounded-full px-5 py-2 text-gray-500 font-[300] hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all flex items-center gap-2 text-sm"
            >
              See more <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 items-start gap-6">
            {relatedBlogs.map((item, index) => (
              <BlogCard blog={item} key={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ShareSection() {
  const url = typeof window !== "undefined" ? window.location.href : "";
  const title = "EasyHom1969 | กู้บ้านเงินเหลือ คอนโดเงินเหลือ";

  const shareNative = async () => {
    if (navigator.share) {
      await navigator.share({ title, url });
    } else {
      navigator.clipboard.writeText(url);
      alert("คัดลอกลิงก์แล้ว");
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-400 font-[300]">แชร์:</span>
      <div className="flex gap-2">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-blue-100 hover:text-blue-600 transition-colors"
        >
          <FaFacebookF size={14} />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
        >
          <FaXTwitter size={14} />
        </a>
        <a
          href={`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-green-100 hover:text-green-600 transition-colors"
        >
          <FaLine size={16} />
        </a>
        <button
          onClick={shareNative}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-zinc-200 transition-colors cursor-pointer"
        >
          <FaLink size={14} />
        </button>
      </div>
    </div>
  );
}
