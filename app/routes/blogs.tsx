import { blogService } from "~/services/blogService";
import type { Route } from "./+types/home";
import BlogCard from "~/components/BlogCard";
import { useLoaderData, Link } from "react-router"; // Import Link for navigation

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
      <section className="h-[500px] mb-5 overflow-hidden rounde-3xl">
        <img src={"https://cdn.prod.website-files.com/64805be211766565d95bb26a/6627616200652854524fc15c_190809_Scene001-p-2000.jpg"}
          alt="hero image qualicication"
          className="w-full h-full object-cover" // Added object-cover for better image fit
        />
      </section>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header with New Title and Description */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold mb-4 text-gray-900">
            Easy Hom 1969 - บทความและสาระน่ารู้
          </h1>
          <p className="text-gray-600 max-w-4xl mx-auto px-4">
            Easy Hom 1969 คือบริการเกี่ยวกับการเงินเพื่อที่อยู่อาศัยแบบครบวงจร: กู้บ้านเงินเหลือ, คอนโดเงินเหลือ, ซื้อบ้านปิดหนี้ให้ก่อนแถมเงินเหลือ, พร้อมบริการคอนโดเงินเหลือ การันตีผู้เช่า (One stop service) ดูให้ครบจบที่เดียว ไม่ว่าคุณจะเป็นพนักงานเงินเดือน หรือ เจ้าของธุรกิจ เราช่วยเสริมสภาพคล่องพร้อมได้คอนโดการันตีผู้เช่า
          </p>
        </header>

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