import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import type { IBlogModel } from "~/models/blog";

export default function BlogCard({ blog }: { blog: IBlogModel }) {
  return (
    <Link
      to={`/blogs/${blog?.slug || "#"}`}
      className="
        relative group min-w-[250px] w-full h-[350px] rounded-xl overflow-hidden
        touch-manipulation 
      "
    >
      {/* Logo */}
      <img
        src="/logo/easyhomlogo.png"
        className="absolute z-20 top-3 left-3 w-[64px]"
        alt="easyhom logo"
      />

      {/* Overlay */}
      <div
        className="
          absolute inset-0 z-10 flex flex-col justify-end gap-2 p-5
          bg-gradient-to-t min-w-[250px] h-[350px] max-w-full w-full from-black/90 via-black/40 to-transparent
        "
      >
        {/* Tag */}
        <div className="rounded-full bg-white px-4 py-1 text-sm w-fit">
          {blog?.tags?.split(",")?.[0] || "blog"}
        </div>

        {/* Title */}
        <h3 className="text-xl text-white line-clamp-2">
          {blog?.title || "บทความที่น่าสนใจ"}
        </h3>

        {/* Excerpt */}
        <p className="text-white/70 text-base line-clamp-2 font-light">
          {blog?.excerpt || "บทความ EasyHom1969 ที่น่าสนใจ"}
        </p>

        {/* Read more (mobile visible / desktop animated) */}
        <div
          className="
            flex items-center gap-1 text-white/80 text-sm font-light
            opacity-100 translate-y-0
            md:opacity-0 md:translate-y-2
            md:group-hover:opacity-100 md:group-hover:translate-y-0
            transition-all duration-200
          "
        >
          อ่านเพิ่มเติม
          <ChevronRight className="h-4 w-4" />
        </div>
      </div>

      {/* Image */}
      <div className="w-full h-full overflow-hidden">
          <img
            src={blog?.images?.[0] ?? "/images/hero.jpg"}
            className="
              h-full w-full object-cover
              transition-transform duration-300
                md:group-hover:scale-105
            "
            alt="blog cover"
          />
      </div>
    </Link>
  );
}
