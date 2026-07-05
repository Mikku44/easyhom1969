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

// ----------------------
// Loader
// ----------------------
export async function loader({ params }: Route.LoaderArgs) {
  const blog = await blogService.getBySlug(params.slug);

  // Get all blogs for related posts
  const all = await blogService.getAll(50);
  const related = all.blogs.filter((item) => item.slug !== params.slug);

  return {
    blog,
    relatedBlogs: related.slice(0, 3),
  };
}

// ----------------------
// Meta
// ----------------------
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

// ----------------------
// Component
// ----------------------
export default function BlogDetail({
  loaderData
}: Readonly<Route.ComponentProps>) {
  const { blog, relatedBlogs } = loaderData;

  if (!blog?.title) return <NotFound />;

  // Format publish date if Firestore Timestamp
  const publishDate = blog.publish_at


  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="mb-8">
        <img
          src={blog?.images?.[0] ?? "https://condonayoo.com/wp-content/uploads/2019/08/The-Cube-Loft-Srinakarin-Theparak-1.jpg"}
          alt={blog.title}
          className="w-full -mt-10 h-[480px] object-cover "
        />
      </div>
      <div className="md:grid md:grid-cols-3 mb-16 md:max-w-7xl max-w-5xl mx-auto">
        <div className=" md:col-span-2 mx-auto px-4">
          {/* Header Section */}
          <header className="">
            <nav className="text-sm text-gray-500 mb-6">
              <ol className="flex space-x-2">
                <li>
                  <a href="/" className="hover:text-orange-600 transition-colors">
                    Home
                  </a>
                </li>
                <li className="before:content-['/'] before:mx-2">
                  <a
                    href="/blogs"
                    className="hover:text-orange-600 transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li className="before:content-['/'] before:mx-2 text-gray-700 truncate">
                  {blog.title}
                </li>
              </ol>
            </nav>
            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
              {blog.title}
            </h1>
            {/* <p className="text-xl text-gray-600 leading-relaxed mb-6">
              {blog.excerpt}
            </p> */}
          </header>
          {/* Main Content */}
          <div className="flex flex-col gap-8">
            {/* Article Section */}
            <article className="">
              {/* Cover image */}
              {/* {blog.images?.length > 0 && (
                <div className="mb-8">
                  <img
                    src={blog.images[0]}
                    alt={blog.title}
                    className="w-full h-96 object-cover "
                  />
                </div>
              )} */}
              {/* Blog Content */}
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
                {/* <RemarkPreview value={blog.contents} /> */}
              </div>
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 py-4">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span>Author: {blog.author}</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Publish at : {publishDate}</span>
                </div>
              </div>
              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {blog.tags
                  ?.split(",")
                  ?.slice(0, 5)
                  ?.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="px-4 py-2 border-black/80 rounded-full border text-black/80 text-sm
                      font-medium hover:bg-black hover:text-white transition-colors cursor-pointer"
                    >
                      {tag.trim()}
                    </span>
                  ))}
              </div>
            </article>
          </div>


        </div>

        {/* left panel */}
        <div className="w-full p-5">
          <div className="lg:sticky top-20 space-y-6">

            {/* CONTACT */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-5">
              <h2 className="text-xl font-semibold">ติดต่อเรา</h2>

              <div className="space-y-4 text-sm text-gray-700">

                <a
                  href="tel:0657479789"
                  className="flex items-center gap-3 hover:text-green-700 transition"
                >
                  <span className="icon-circle bg-green-100 text-green-700">
                    <FaPhoneAlt size={16} />
                  </span>
                  <span>065-747-9789</span>
                </a>

                <a
                  href="https://line.me/ti/p/@easyhom1969"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-green-700 transition"
                >
                  <span className="icon-circle bg-green-100 text-green-700">
                    <FaLine size={18} />
                  </span>
                  <span>@easyhom1969</span>
                </a>

                <a
                  href="mailto:easyhom1969@gmail.com"
                  className="flex items-center gap-3 hover:text-green-700 transition"
                >
                  <span className="icon-circle bg-green-100 text-green-700">
                    <FaEnvelope size={16} />
                  </span>
                  <span>easyhom1969@gmail.com</span>
                </a>

              </div>

              <a
                href="/#learnmore"
                className="block text-center rounded-full
                   bg-black/90 px-5 py-3 text-white
                   hover:bg-green-800 transition"
              >
                ประเมินวงเงินฟรี
              </a>
            </div>

            {/* SHARE */}
            <ShareSection />

          </div>
        </div>


      </div>

      {/* Related Blogs */}
      <section className="mt-16 container-x">
        <div className="border-t border-gray-200 pt-12">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Another Tips & Tricks
              </h2>
            </div>
            <Link
              to="/blogs"
              className="border border-black/80 rounded-full px-4 py-2 text-black/80
                  hover:bg-black/80 hover:text-white transition-all flex items-center gap-2"
            >
              See more <ChevronRight />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 items-start gap-6">
            {relatedBlogs.map((item, index) => (
              <BlogCard
                blog={item}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


function ShareSection() {
  const url =
    typeof window !== "undefined" ? window.location.href : "";
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
    <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-4">
      <h3 className="text-lg font-medium">แชร์หน้านี้</h3>

      <div className="flex gap-3">

        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn bg-blue-50 text-blue-600 hover:bg-blue-100"
        >
          <FaFacebookF size={16} />
        </a>

        {/* X */}
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn bg-gray-100 text-gray-800 hover:bg-gray-200"
        >
          <FaXTwitter size={16} />
        </a>

        {/* LINE */}
        <a
          href={`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn bg-green-50 text-green-600 hover:bg-green-100"
        >
          <FaLine size={18} />
        </a>

        {/* Copy / Native Share */}
        <button
          onClick={shareNative}
          className="share-btn bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
        >
          <FaLink size={16} />
        </button>

      </div>
    </div>
  );
}