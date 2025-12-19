import type { Route } from "./+types/home";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Easy hom 1969 - ทำไมต้อง EasyHom1969" },
    {
      name: "description",
      content: "ปิดหนี้ให้ก่อน ลดภาระทันที กับ EasyHom1969",
    },
  ];
}

/* -------------------- FEATURES DATA -------------------- */

const FEATURES = [
  {
    img: "/images/banner (1).jpg",
    title: "ปิดหนี้ให้ก่อน ลดภาระทันที",
    description:
      "ช่วยวางแผนและปิดภาระหนี้เดิม ตั้งแต่หลักหมื่นถึงหลักล้าน เพื่อเตรียมความพร้อมก่อนยื่นสินเชื่อ",
  },
  {
    img: "/images/banner (2).jpg",
    title: "ได้เงินก้อนเหลือ ใช้งานได้จริง",
    description:
      "มีเงินเหลือประมาณ 100,000 – 1,000,000 บาท สำหรับตกแต่งบ้าน ซื้อเฟอร์นิเจอร์ หรือใช้เป็นเงินสำรอง",
  },
  {
    img: "/images/banner (3).jpg",
    title: "รวมหนี้เป็นก้อนเดียว บริหารง่าย",
    description:
      "จากหลายหนี้ หลายดอกเบี้ย รวมเป็นก้อนเดียว ช่วยให้การผ่อนชำระและวางแผนการเงินง่ายขึ้น",
  },
  {
    img: "/images/banner (4).jpg",
    title: "เปลี่ยนหนี้เป็นสินทรัพย์",
    description:
      "เปลี่ยนภาระหนี้ให้กลายเป็นบ้านหรือคอนโด ซึ่งเป็นทรัพย์สินของคุณในระยะยาว",
  },
  {
    img: "/images/banner (5).jpg",
    title: "บอกลาดอกเบี้ยโหด",
    description:
      "ลดภาระจากดอกเบี้ยบัตรเครดิต 20–30% ต่อปี มาเป็นสินเชื่อที่อยู่อาศัย ดอกเบี้ยต่ำกว่า",
  },
  {
    img: "/images/banner (6).jpg",
    title: "วิเคราะห์เคสตรงจุด อนุมัติง่ายขึ้น",
    description:
      "ทีมงานช่วยประเมินรายได้ ภาระหนี้ และเอกสารแบบเคสต่อเคส เพิ่มโอกาสอนุมัติ ลดความเสี่ยงถูกปฏิเสธ",
  },
];

/* -------------------- MOTION VARIANTS -------------------- */

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const AUTO_DELAY = 3000; // 5 วินาที



/* -------------------- PAGE -------------------- */

export default function WhyEasyHom() {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  const paginate = (newDirection: number) => {
    setIndex(([prev]) => {
      const next = prev + newDirection;
      return [
        (next + FEATURES.length) % FEATURES.length,
        newDirection,
      ];
    });
  };


  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, AUTO_DELAY);

    return () => clearInterval(timer);
  }, [index]);

  return (
    <main className="min-h-screen bg-black">

      {/* ---------------- HERO ---------------- */}
      {/* <section className="h-[500px] relative overflow-hidden">
        <img
          src="/images/condo-cover-1.jpg"
          className="absolute inset-0 h-full w-full object-cover"
          alt="hero"
        />
        <div className="absolute inset-0 bg-linear-0 from-black/80 to-black/20" />

        <div className="relative z-10 h-full max-w-5xl mx-auto px-10 flex flex-col justify-end pb-16 gap-4">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-white lg:text-5xl md:text-3xl text-2xl"
          >
            ทำไมต้อง EasyHom1969?
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/80 max-w-3xl font-light"
          >
            ให้คำปรึกษากู้บ้านเงินเหลือและคอนโดเงินเหลือแบบตรงจุด
            วิเคราะห์ตามรายได้ ภาระหนี้ และเป้าหมาย
            เพื่อให้ได้วงเงินและเงื่อนไขที่เหมาะสมที่สุด
          </motion.p>
        </div>
      </section> */}

      {/* ---------------- FEATURE CAROUSEL ---------------- */}
      <section className="container-x mx-auto pt-24 px-6">
        <div className="relative h-[80vh] rounded-2xl overflow-hidden">

          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 260, damping: 30 },
                opacity: { duration: 0.3 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, { offset }) => {
                if (offset.x < -80) paginate(1);
                if (offset.x > 80) paginate(-1);
              }}
              className="absolute inset-0 rounded-2xl overflow-hidden"
            >
              {/* Image */}
              <img
                src={FEATURES[index].img}
                className="absolute inset-0 h-full w-full object-cover"
                alt="feature"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-0 from-black/90 to-black/20" />

              {/* Content */}
              <div className="relative z-10 h-full p-10 flex flex-col justify-between">
                <div className="text-5xl font-extrabold text-white">
                  {index + 1}
                </div>

                <div className="max-w-xl text-white">
                  <h3 className="text-3xl mb-3">
                    {FEATURES[index].title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {FEATURES[index].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute bottom-6 right-6 z-20 flex gap-3">
            <button
              onClick={() => paginate(-1)}
              className="h-10 w-10 rounded-full bg-white/20 backdrop-blur
                         text-white hover:bg-white/30 transition"
            >
              ←
            </button>
            <button
              onClick={() => paginate(1)}
              className="h-10 w-10 rounded-full bg-white/20 backdrop-blur
                         text-white hover:bg-white/30 transition"
            >
              →
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {FEATURES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex([i, i > index ? 1 : -1])}
              className={`h-2 w-2 rounded-full transition
                ${i === index ? "bg-green-400" : "bg-white/30"}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
