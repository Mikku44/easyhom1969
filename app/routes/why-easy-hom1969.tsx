import WhyChooseUsSection from "~/components/WhyUs";
import type { Route } from "./+types/home";
import { motion } from "framer-motion";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Easy hom 1969 - ทำไมต้อง EasyHom1969" },
    { name: "description", content: "ปิดหนี้ให้ก่อน ลดภาระทันที กับ EasyHom1969" },
  ];
}


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


export default function WhyEasyHom() {
  return <main className="min-h-screen ">

    <section className="h-[500px] overflow-hidden relative">
      <div className="absolute inset-0 w-full h-full flex flex-col items-baseline
        p-10 justify-center gap-4 
        bg-linear-0 from-black/80 to-black/10">

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

    <section className="mx-auto max-w-7xl">
      {/* Header */}
     

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-4 my-4">
        {FEATURES.map((item, index) => (
          <div key={index} className="group even:border-collapse  border-green-500/60 md:flex odd:flex-row-reverse 
          h-[320px]  overflow-hidden relative rounded-xl">

            {/* Background Image */}
            <div className="p-10 relative z-2 flex flex-col justify-between w-full border border-white/20 h-full">
                <div className="text-5xl font-extrabold text-white">{index}</div>

              <div className="text-white">
                <h3 className="text-2xl">
                  {item.title}
                </h3>
                <p className="text-basex font-light text-white/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Dark overlay */}
            <div className="absolute bg-linear-0 
            transition-all duration-300 from-black/90 to-black/10 z-1 inset-0 " />

            {/* Glass Card */}

            <img
              src={item.img}
              alt="banner"
              className="absolute inset-0 h-full w-full object-cover
                   transition-transform duration-700
                    rounded-xl"
            />
          </div>
        ))}
      </div>


    </section>

  </main>;
}
