import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import type { IBlogModel } from "~/models/blog";

export default function BlogCard({blog} : {blog : IBlogModel}) {
    return (
        <Link to={`/blogs/${blog?.slug || "#"}`} 
        className="h-[350px] w-full relative group">
            <div className="absolute z-10 w-full h-full max-h-[350px] bg-linear-0 from-black to-black/0 flex justify-end flex-col p-5">
                <div className="rounded-full bg-white px-5 w-fit py-1">blog</div>
                <div className="text-2xl group-hover:text-white/80 duration-200 mt-2 text-white line-clamp-2">
                    {blog?.title || "บทความที่น่าสนใจ"}
                </div>
                <p className="text-white/50 line-clamp-2 text-xl font-light">
                    {blog?.excerpt || "บทความ Easy hom 1969 ที่น่าสนใจ"}
                </p>
                <p className="text-white/50 flex gap-2 items-center line-clamp-2 
                duration-200 h-0 overflow-clip group-hover:h-6 font-light">
                   อ่านเพิ่มเติม <ChevronRight className="duration-300 delay-150 group-hover:translate-x-1" />
                </p>
            </div>
            <div className="w-full h-full overflow-hidden">
                <img src={blog?.images[0] ?? "/images/hero.jpg"}
                    className="h-full  w-full object-cover group-hover:scale-105 duration-300"
                    alt="blog cover image" />
            </div>
        </Link>
    )
}
