import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router";
import type { Route } from "./+types/home";
import { motion } from 'framer-motion';
import CondoCard from "~/components/CondoCard";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Easy hom 1969 - Home" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <main className="">

    <section className="h-[120vh] overflow-hidden relative w-full flex ">
      <div className="absolute w-full h-full bg-linear-180 to-black from-black/30
      flex flex-col md:items-center px-6 justify-center 
      ">
        <div className="lg:h-[62px]  overflow-clip">
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
            className="lg:text-5xl md:text-3xl text-2xl text-white font-[300] mb-4">กู้บ้านเงินเหลือ คอนโดเงินเหลือ</motion.h1>
        </div>
        <div className="lg:h-[72px] flex items-end  overflow-clip">
          <motion.h2
            initial={{
              y: 32, opacity: 0
            }}
            whileInView={{
              y: 0, opacity: 1
            }}
            transition={{
              duration: 0.6
            }}
            className="lg:text-6xl text-4xl text-white font-[300]">ซื้อบ้านปิดหนี้ให้ก่อน แถมเงินเหลือ</motion.h2>
        </div>

        <div className="font-light max-w-[500px] md:text-center text-lg mt-4 text-white/80">
          บริการคอนโดเงินเหลือ การีนตีผู้เช่า One stop service <br />ดูให้ครบจบที่เดียว ไม่ว่าคุณจะเป็นพนักงานเงินเดือน หรือ เจ้าของธุรกิจ เสริมสภาพคล่องได้คอนโดการันตีผู้เช่าให้
        </div>


        {/* CTA */}

        <NavLink
          to="#"
          className="btn-1 mt-4 py-4 hover:w-[240px] flex gap-2 group w-[230px] items-center text-center">
          <div className="">ลงทะเบียนตอนนี้</div>
          <div className="overflow-clip opacity-0 group-hover:opacity-100 duration-200
          group-hover:translate-x-4 "><FaArrowRight /></div>
        </NavLink>
      </div>
      <img
        className="h-[140vh] w-full object-cover"
        src="https://pd.w.org/2023/02/47063eef73575d3e5.90809207.jpg"
        alt="hero image" />
    </section>

    <div className="bg-amber-950/20">
      <section className="container-x min-h-screen pt-10">
        <div className="h-[32px]  overflow-clip mb-4">
          <motion.div
            initial={{
              y: 18, opacity: 0
            }}
            whileInView={{
              y: 0, opacity: 1
            }}
            transition={{
              duration: 0.6
            }}
            className="text-2xl text-black/80 font-[300] ">โครงการเด่น</motion.div>
        </div>
        {/*  */}
       {[1,2,3].map((item,key) => <CondoCard key={key} />)}
      </section>
    </div>
  </main>;
}
