import { Link, useLoaderData, Form, redirect } from "react-router";
import { blogService } from "~/services/blogService";
import type { Route } from "./+types/blog.list";
import type { IBlogModel } from "~/models/blog";
import { motion } from "framer-motion";
import { FaPlus, FaPen, FaTrash } from "react-icons/fa6";

export async function action({ request }: Route.ActionArgs) {
    const formData = await request.formData();
    const blogId = formData.get("deleteId")?.toString();

    if (blogId) {
        await blogService.delete(blogId);
    }

    return redirect("/admin/blog/list");
}

export async function loader({ request }: Route.LoaderArgs) {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get("page") || 1);
    const limit = 100;

    const { data, total } = await blogService.getPaged(page, limit);

    return {
        blogs: data,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
    };
}

export default function BlogListPage() {
    const { blogs, total, page, totalPages } = useLoaderData<typeof loader>();

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-[300] text-gray-900">All Blogs</h1>
                    <p className="text-gray-400 text-sm font-[300] mt-1">
                        {total} บทความทั้งหมด
                    </p>
                </div>
                <Link
                    to="/admin/blog/add"
                    className="group flex items-center gap-2 bg-gray-900 text-white font-[300] rounded-xl py-2.5 px-6 transition-all duration-300 hover:bg-gray-700 text-sm"
                >
                    <FaPlus className="text-xs" />
                    Add Blog
                </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {blogs.map((blog: IBlogModel | any, idx: number) => (
                    <motion.div
                        key={blog.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        className="bg-white rounded-xl border border-gray-200 overflow-hidden group hover:shadow-md transition-shadow"
                    >
                        <div className="relative h-40 overflow-hidden">
                            <img
                                src={blog.images?.length > 0 ? blog.images[0] : "https://obeyme.fanmachi.jp/assets/images/default-product.png"}
                                alt={blog.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        <div className="p-5">
                            <Link to={`/blogs/${blog.slug}`} className="block mb-3">
                                <h2 className="text-gray-900 font-[300] text-lg leading-snug mb-1.5 line-clamp-2 group-hover:text-[--primary-color] transition-colors">
                                    {blog.title}
                                </h2>
                                <p className="text-gray-500 text-sm font-[300] line-clamp-2 leading-relaxed">
                                    {blog.excerpt}
                                </p>
                            </Link>

                            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                <span className="text-gray-400 text-xs font-[300]">
                                    {blog.author || "Unknown"}
                                </span>

                                <div className="flex items-center gap-3">
                                    <a
                                        href={`/admin/blog/update/${blog.id}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-gray-400 hover:text-[--primary-color] transition-colors text-xs font-[300]"
                                    >
                                        <FaPen className="text-[10px]" />
                                        Edit
                                    </a>

                                    <Form method="post" className="inline">
                                        <input type="hidden" name="deleteId" value={blog.id} />
                                        <button
                                            type="submit"
                                            className="flex items-center gap-1.5 text-gray-400 hover:text-red-500 transition-colors text-xs font-[300] cursor-pointer"
                                            onClick={(e) => {
                                                if (!confirm("Are you sure you want to delete this blog?")) {
                                                    e.preventDefault();
                                                }
                                            }}
                                        >
                                            <FaTrash className="text-[10px]" />
                                            Delete
                                        </button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {blogs.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-gray-300 font-[300] text-lg">ไม่มีบทความในระบบ</p>
                    <Link
                        to="/admin/blog/add"
                        className="inline-block mt-4 text-[--primary-color] font-[300] hover:underline"
                    >
                        เพิ่มบทความแรก
                    </Link>
                </div>
            )}
        </div>
    );
}
