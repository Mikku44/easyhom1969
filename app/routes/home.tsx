import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router";
import type { Route } from "./+types/home";
import { motion } from 'framer-motion';
import CondoCard from "~/components/CondoCard";
import ApplicationForm from "~/components/ApplicationForm";
import FAQSection from "~/components/FaQ";
import StepSection from "~/components/StepSection";
import WhyChooseUsSection from "~/components/WhyUs";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Easy hom 1969 - Home" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <main className="">



    <section className="h-[110vh] overflow-hidden relative w-full flex ">
      <div className="w-full absolute bottom-20 flex items-center  justify-center z-10">
        <a href="#learnmore" className="animate-bounce rounded-full p-2 border-2 border-white text-white mb-5">
          <FaArrowDown className="size-8  " />
        </a>
      </div>
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
          to="#register-form"
          className="btn-1 mt-4 py-4 hover:w-[240px] flex gap-2 group w-[230px] items-center text-center">
          <div className="">ลงทะเบียนตอนนี้</div>
          <div className="overflow-clip opacity-0 group-hover:opacity-100 duration-200
          group-hover:translate-x-4 "><FaArrowRight /></div>
        </NavLink>
      </div>
      <img
        className="h-[140vh] w-full object-cover"
        src="https://cdn.prod.website-files.com/64805be211766565d95bb26a/66277629a07548ceaaf8b369_190806_Scene002_.jpg"
        alt="hero image" />
    </section>

    <div id="learnmore" className="">

      <div className="bg-amber-950/30">
        <section className="grid md:grid-cols-2 gap-5 container-x py-10">
          <div className="text-white font-light h-full w-full max-w-[80%] space-y-2 flex flex-col justify-center">
            <div className="text-3xl font-medium text-black">
              เงื่อนไขการรับบริการ
            </div>
            <div className="text-xl font-[200]">
              1.พนักงานประจำเงินเดือน 30,000 ขึ้นไป รวมหนี้ผ่อนทางเดียวได้คอนโดการันตีผู้เช่า
            </div>
            <div className="text-xl font-[200]">
              2.เจ้าของกิจการจดทะเบียนธุรกิจขั้นต่ำ1ปี มีการหมุนเวียนบัญชีธุรกิจ ประวัติการชำระปกติ
            </div>
          </div>
          <ApplicationForm className="w-full" />
        </section>
      </div>


    </div>

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
      <div className="grid md:grid-cols-2 gap-4">
        {[1, 2, 3].map((item, key) => <CondoCard key={key} />)}
      </div>
    </section>


    <section className=" grid gap-2 min-h-[300px]  pt-10">
      <div className="w-full h-[400px]">
        <img src="https://cdn-cms.pgimgs.com/property-review/2019/09/The-Cube-Loft-Srinakarin-Theparak_019.jpg"
          className="w-full h-full object-cover"
          alt="image" />
      </div>
      <FAQSection />
    </section>


    <section className=" grid gap-2 min-h-[300px]  pt-10">
      
      <WhyChooseUsSection />
    </section>

    {/* gallery */}
    <section className=" grid gap-2 min-h-[300px]">
      <div className="w-full container-x flex  rounded-4xl h-[520px]">
        <img src="https://condonayoo.com/wp-content/uploads/2019/10/Nue-Noble-Srinakarin-Lasalle-1.jpg"
          className="w-full h-full object-cover rounded-4xl"
          alt="image" />
      </div>
      <StepSection />
    </section>
  </main>;
}
