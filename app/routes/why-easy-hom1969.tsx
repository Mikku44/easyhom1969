import WhyChooseUsSection from "~/components/WhyUs";
import type { Route } from "./+types/home";
import {motion } from "framer-motion";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Easy hom 1969 - " },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function WhyEasyHom() {
  return <main className="min-h-screen ">

    <section className="h-[500px] overflow-hidden relative">
      <div className="absolute inset-0 w-full h-full flex flex-col items-baseline
        p-10 justify-center gap-4 
        bg-linear-0 from-black/80 to-black/0">

        <div className="absolute inset-0 w-full h-full flex flex-col items-baseline
        p-10 justify-end gap-4 
        bg-linear-0 from-black/80 to-black/0">
          <div className="lg:h-[78px] h-[48px] w-full mx-auto max-w-5xl overflow-clip">
            <motion.h1
              initial={{
                y: 32, opacity: 0
              }}
              whileInView={{
                y: 10, opacity: 1
              }}
              transition={{
                duration: 0.6
              }}
              className="lg:text-5xl md:text-3xl text-2xl text-white ">
              ทำไมต้อง EasyHom1969
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
              ให้คำปรึกษากู้บ้านเงินเหลือและคอนโดเงินเหลือแบบตรงจุด วิเคราะห์ตามรายได้ ภาระหนี้ <br />และเป้าหมายของคุณ เพื่อให้ได้วงเงินและเงื่อนไขที่เหมาะสมที่สุด
            </motion.div>
          </div>
        </div>
      </div>

      <img src="/images/condo-cover-1.jpg"
        className="h-full w-full object-cover" alt="hero image qualicication" />
    </section>

    <section>
      <WhyChooseUsSection />
    </section>

  </main>;
}
