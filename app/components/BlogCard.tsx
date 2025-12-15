import { Link } from "react-router";

export default function BlogCard() {
    return (
        <Link to="#" 
        className="min-h-[350px] w-full relative group">
            <div className="absolute z-10 w-full h-full bg-linear-0 from-black to-black/0 flex justify-end flex-col p-5">
                <div className="rounded-full bg-white px-5 w-fit py-1">blog</div>
                <div className="text-2xl group-hover:text-white/80 duration-200 mt-2 text-white line-clamp-2">
                    วีธีรวมหนี้ผ่อนทางเดียวได้คอนโดการันตีผู้เช่า
                </div>
                <p className="text-white/50 line-clamp-2 text-xl font-light">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, aliquam?
                </p>
            </div>
            <div className="w-full h-full overflow-hidden">
                <img src="/images/hero.jpg"
                    className="h-full w-full object-cover group-hover:scale-105 duration-300"
                    alt="blog cover image" />
            </div>
        </Link>
    )
}
