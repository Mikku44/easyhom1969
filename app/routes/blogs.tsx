import { blogService } from "~/services/blogService";
import type { Route } from "./+types/home";
import BlogCard from "~/components/BlogCard";
import { useLoaderData, Link } from "react-router"; // Import Link for navigation
import {motion} from "framer-motion";
// Define the limit constant (good practice)
const LIMIT = 4;

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const page = Number(url.searchParams.get("page") || 1);
  const { blogs } = await blogService.getAll(LIMIT, page);
  const hasMore = blogs.length === LIMIT;


  return {
    blogs,
    page,
    hasMore,
  };
}


export function meta({ }: Route.MetaArgs) {
  const title = "Easy Hom 1969 - บทความและสาระน่ารู้ กู้บ้านเงินเหลือ คอนโดเงินเหลือ";
  const description = "Easy Hom 1969 ให้บริการเกี่ยวกับ กู้บ้านเงินเหลือ คอนโดเงินเหลือ ซื้อบ้านปิดหนี้ให้ก่อน แถมเงินเหลือ บริการคอนโดเงินเหลือ การีนตีผู้เช่า One stop service ดูให้ครบจบที่เดียว ไม่ว่าคุณจะเป็นพนักงานเงินเดือน หรือ เจ้าของธุรกิจ เสริมสภาพคล่องได้คอนโดการันตีผู้เช่าให้";

  return [
    { title: title },
    { name: "description", content: description },
  ];
}

export default function BlogPage() {
  const { blogs, page, hasMore } = useLoaderData<typeof loader>();
  // const revalidator = useRevalidator(); // Useful if you need to manually re-fetch data

  // Function to generate the URL for a specific page number
  const getPageUrl = (pageNumber: number) => {
    // Keep the current URL path, just update the 'page' query param
    const url = new URL(window.location.href);
    url.searchParams.set("page", pageNumber.toString());
    return url.pathname + url.search;
  };

  return (
    <main className="min-h-screen bg-gray-50 pb-10">
      <section className="h-[500px] mb-5 overflow-hidden rounde-3xl relative">

        <div className="absolute inset-0 w-full h-full flex flex-col items-baseline
        p-10 justify-end gap-4 
        bg-linear-0 from-black/80 to-black/0">
          <div className="lg:h-[62px] w-full mx-auto max-w-5xl overflow-clip">
            <motion.h1
              initial={{
                y: 32, opacity: 0
              }}
              whileInView={{
                y: 0, opacity: 1
              }}
              transition={{
                duration: 0.6
              }}
              className="lg:text-5xl md:text-3xl text-2xl text-white font-[300] ">
              Easy Hom 1969 - บทความและสาระน่ารู้
            </motion.h1>
          </div>
          <div className="lg:h-[62px] w-full mx-auto max-w-5xl overflow-clip">
            <motion.div
              initial={{
                y: 32, opacity: 0
              }}
              whileInView={{
                y: 0, opacity: 1
              }}
              transition={{
                duration: 0.6
              }}
              className=" text-xl max-w-3xl text-white/90 font-[300] mb-4">
              สาระน่ารู้ และเกร็ดเล็กเกร็ดน้อยสำหรับผู้อยากกู้เช่าบ้าน และคอนโดเงินเหลือ
            </motion.div>
          </div>
        </div>

        <img src={"/images/cover-blog.jpg"}
          className="h-full w-full object-cover" alt="hero image qualicication"
        // Added object-cover for better image fit
        />
      </section>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header with New Title and Description */}
        

        {/* Grid of Cards */}
        {blogs.length === 0 ? (
          <div className="text-center text-gray-600 py-20">
            ไม่พบข้อมูลบทความ
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-start gap-6">
            {blogs.map((blog, i) => (
              <BlogCard
                blog={blog}
                key={i} // Assuming 'blog' prop needs to be passed
              />
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        <div className="flex justify-center items-center space-x-4 mt-12">
          {/* Previous Button */}
          {page > 1 && (
            <Link
              to={getPageUrl(page - 1)}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-150"
            >
              &larr; ก่อนหน้า
            </Link>
          )}

          {/* Current Page Indicator (Optional but helpful) */}
          <span className="px-3 py-1 text-base font-semibold text-gray-700">
            หน้าที่ {page}
          </span>

          {/* Next Button */}
          {hasMore && (
            <Link
              to={getPageUrl(page + 1)}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-150"
            >
              ถัดไป &rarr;
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}