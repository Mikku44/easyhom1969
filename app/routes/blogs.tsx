import { blogService } from "~/services/blogService";
import type { Route } from "./+types/home";
import BlogCard from "~/components/BlogCard";
import { useLoaderData, Link } from "react-router";
import { motion } from "framer-motion";
import { MessageCircle, PhoneCall, ChevronRight, Grid, LayoutList } from "lucide-react";
import type { IBlogModel } from "~/models/blog";
import useEmblaCarousel from "embla-carousel-react";

const LIMIT = 100;

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const currentView = url.searchParams.get("view") || "categories"; // "categories" or "all"

  const { blogs } = await blogService.getAll(LIMIT, 1);

  // 1. Group blogs by tag for the Carousel View
  const groupedBlogs: Record<string, IBlogModel[]> = {};
  blogs.forEach((blog) => {
    const firstTag = blog.tags?.split(",")?.[0]?.trim() || "ทั่วไป";
    if (!groupedBlogs[firstTag]) {
      groupedBlogs[firstTag] = [];
    }
    groupedBlogs[firstTag].push(blog);
  });

  return {
    blogs,         // Used for Grid View
    groupedBlogs,  // Used for Carousel View
    currentView,   // Decides which layout renders on the server
    hasBlogs: blogs.length > 0,
  };
}

export function meta({ }: Route.MetaArgs) {
  const title = "Easy Hom 1969 - บทความและสาระน่ารู้ กู้บ้านเงินเหลือ คอนโดเงินเหลือ";
  const description = "Easy Hom 1969 ให้บริการเกี่ยวกับ กู้บ้านเงินเหลือ คอนโดเงินเหลือ ซื้อบ้านปิดหนี้ให้ก่อน แถมเงินเหลือ บริการคอนโดเงินเหลือ การีนตีผู้เช่า One stop service ดูให้ครบจบที่เดียว";

  return [
    { title: title },
    { name: "description", content: description },
  ];
}

// --- Reusable Embla carousel for a single category row ---
function CategoryCarousel({ blogList }: { blogList: IBlogModel[] }) {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    align: "start",
    containScroll: "trimSnaps",
  });

  return (
    <div className="embla overflow-hidden h-[350px] cursor-grab active:cursor-grabbing" ref={emblaRef}>
      <div className="embla__container flex gap-6 h-[350px]">
        {blogList.map((blog, i) => (
          <div key={i} className="embla__slide flex-none h-[350px] w-[350px]">
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BlogPage() {
  const { blogs, groupedBlogs, currentView, hasBlogs } = useLoaderData<typeof loader>();

  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      {/* Hero Section */}
      <section className="h-[500px] mb-8 overflow-hidden  relative">
        <div className="absolute inset-0 w-full h-full flex flex-col items-baseline p-10 justify-end gap-4 bg-gradient-to-t from-black/80 to-black/0 z-10">
          <div className="lg:h-[62px] w-full mx-auto max-w-5xl overflow-clip">
            <motion.h1
              initial={{ y: 32, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:text-5xl md:text-3xl text-2xl text-white font-[300] pt-2"
            >
              บทความและสาระน่ารู้
            </motion.h1>
          </div>
          <div className="lg:h-[62px] w-full mx-auto max-w-5xl overflow-clip">
            <motion.div
              initial={{ y: 32, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-xl max-w-3xl text-white/90 font-[300] mb-4"
            >
              สาระน่ารู้ และเกร็ดเล็กเกร็ดน้อยสำหรับผู้อยากกู้เช่าบ้าน และคอนโดเงินเหลือ
            </motion.div>
          </div>
        </div>

        <img src={"/images/real-estate.jpg"}
          className="h-full w-full object-cover" alt="hero image qualification"
        />
      </section>

      <div className="container mx-auto px-4 max-w-6xl">

        {/* --- SSR DISPLAY TABS --- */}
        <div className="flex justify-end mb-8">
          <div className="inline-flex bg-gray-200/60 p-1 rounded-full border border-gray-200/40 backdrop-blur-sm">
            {/* Tab: Categories (Carousel) */}
            <Link
              to="?view=categories"
              preventScrollReset
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-[300] transition-all ${
                currentView === "categories"
                  ? "bg-white text-black shadow-sm font-[400]"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              <LayoutList className="h-4 w-4" />
              แยกตามหมวดหมู่
            </Link>

            {/* Tab: All Blogs (Grid) */}
            <Link
              to="?view=all"
              preventScrollReset
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-[300] transition-all ${
                currentView === "all"
                  ? "bg-white text-black shadow-sm font-[400]"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              <Grid className="h-4 w-4" />
              ดูทั้งหมด
            </Link>
          </div>
        </div>

        {/* --- CONDITIONALLY RENDERED LAYOUTS --- */}
        {!hasBlogs ? (
          <div className="text-center text-gray-600 py-20 font-[300]">
            ไม่พบข้อมูลบทความ
          </div>
        ) : currentView === "all" ? (
          /* 1. GRID VIEW */
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-start gap-6 mb-16">
            {blogs.map((blog, i) => (
              <BlogCard blog={blog} key={i} />
            ))}
          </div>
        ) : (
          /* 2. CAROUSEL VIEW (BY CATEGORIES) */
          <div className="space-y-16 mb-16">
            {Object.entries(groupedBlogs).map(([tag, blogList]) => (
              <div key={tag} className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <h2 className="text-xl md:text-2xl font-[300] tracking-wide text-gray-800">
                    {tag}
                  </h2>
                  <span className="text-xs text-gray-400 font-[300]">
                    เลื่อนขวาเพื่อดูเพิ่มเติม ({blogList.length})
                  </span>
                </div>

                <CategoryCarousel blogList={blogList} />
              </div>
            ))}
          </div>
        )}

        {/* --- BRAND-MATCHED MINIMALIST CTA SECTION --- */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden h-[300px] bg-black text-white group mt-16"
        >
          <img
            src="/images/real-estate.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-700 md:group-hover:scale-105"
            alt="CTA background"
          />

          <div className="absolute inset-0 z-10 flex flex-col md:flex-row items-start md:items-center justify-between p-8 md:p-12 gap-6 bg-gradient-to-t md:bg-gradient-to-r from-black/90 via-black/60 to-transparent">
            <div className="space-y-3 max-w-2xl">
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: 24, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-2xl md:text-4xl font-[300] tracking-wide"
                >
                  ต้องการเสริมสภาพคล่อง?
                </motion.h2>
              </div>
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: 24, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-white/70 text-base md:text-lg font-[300] max-w-xl leading-relaxed"
                >
                  ปรึกษาฟรีเกี่ยวกับ กู้บ้านเงินเหลือ คอนโดเงินเหลือ และบริการซื้อบ้านปิดหนี้ One stop service ดูให้ครบจบที่เดียว
                </motion.p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto z-20">
              <a
                href="https://line.me/ti/p/@yourlineid"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-[400] transition-transform duration-200 hover:scale-102 active:scale-98 text-center"
              >
                <MessageCircle className="h-4 w-4 fill-black text-white" />
                ปรึกษาผ่าน LINE
              </a>

              <a
                href="tel:0123456789"
                className="flex items-center justify-center gap-1 text-white/80 hover:text-white text-sm font-[300] group/btn py-3 px-4 border border-white/20 rounded-full transition-colors"
              >
                <PhoneCall className="h-4 w-4 mr-1 transition-transform group-hover/btn:-translate-y-0.5" />
                โทรติดต่อเรา
                <ChevronRight className="h-4 w-4 transition-transform md:translate-x-0 md:group-hover/btn:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}