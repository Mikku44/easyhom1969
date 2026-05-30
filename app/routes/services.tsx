import { Link } from "react-router";
import type { Route } from "./+types/home";
import { motion } from 'framer-motion';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Easy hom 1969 - Services" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Services() {
  return <main className="min-h-screen ">

    <section className="h-[500px] overflow-hidden relative">
      <div className="absolute inset-0 w-full h-full flex flex-col items-baseline
        p-10 justify-end gap-4 
        bg-linear-0 from-black/80 to-black/0">
        <div className="lg:h-[62px] w-full mx-auto max-w-5xl overflow-clip">
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
            className="lg:text-5xl md:text-3xl text-2xl pt-2 text-white font-[300] ">
            บริการกู้บ้านเงินเหลือ คอนโดเงินเหลือ ที่เข้ากับคุณ
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

      <img src="/images/cover-service2.jpg"
        className="h-full w-full object-cover" alt="hero image qualicication" />
    </section>


    <div className="container-x">
      <section className="max-w-5xl  text-white bg-linear-60 from-green-950 to-green-800
      rounded-4xl mt-5 relative mx-auto grid md:grid-cols-3 gap-4 px-6 py-16 space-y-12">
        <section className="space-y-4">
          <h1 className="text-3xl font-semibold">
            บริการของ EasyHom1969
          </h1>
          <p className="text-white/80 leading-relaxed">
            EasyHom1969 คือผู้เชี่ยวชาญด้านการให้คำปรึกษาและวางแผนการกู้ซื้ออสังหาริมทรัพย์แบบครบวงจร
            ดูแลตั้งแต่การประเมินความสามารถในการกู้ ไปจนถึงการช่วยปิดหนี้เดิม
            เพื่อให้คุณมีบ้านหรือคอนโดในเงื่อนไขที่เหมาะสมที่สุด
          </p>
          <div className="md:absolute md:mb-0 mb-[-90px] bottom-[-20px] right-10">
            <img src="/images/person.png"
            className="w-[450px]"
            alt="" />
          </div>
        </section>
      </section>
    </div>

    {/* Services List */}

    <section className="max-w-5xl relative z-2 mx-auto px-6 py-4 space-y-8 mb-16 grid md:grid-cols-2 gap-4 ">
      <section className="space-y-3 border  border-zinc-200 rounded-3xl bg-white p-5">
        <h2 className="text-xl font-medium">
          ให้คำปรึกษากู้บ้านเงินเหลือ และคอนโดเงินเหลือ
        </h2>
        <p className="text-zinc-700 leading-relaxed">
          ให้คำปรึกษาการกู้ซื้อบ้านเงินเหลือและคอนโดเงินเหลือแบบละเอียด
          ครอบคลุมทั้งการซื้อเพื่ออยู่อาศัย การซื้อเพื่อปิดภาระหนี้เดิม
          และการปรับโครงสร้างทางการเงิน โดยไม่มีค่าใช้จ่าย
        </p>
      </section>

      <section className="space-y-3 border border-zinc-200 rounded-3xl bg-white p-5">
        <h2 className="text-xl font-medium">
          บริการซื้อบ้านปิดหนี้ให้ก่อน
        </h2>
        <p className="text-zinc-700 leading-relaxed">
          สำหรับผู้ที่มีภาระหนี้หลายทาง หรือมีประวัติทางการเงินที่ต้องการการวางแผน
          EasyHom1969 ช่วยวางแผนการซื้อบ้านหรือคอนโดเพื่อปิดหนี้เดิมให้ก่อน
          เพื่อลดภาระดอกเบี้ยและเพิ่มโอกาสการอนุมัติสินเชื่อ
        </p>
      </section>

      <section className="space-y-3 border border-zinc-200 rounded-3xl bg-white p-5">
        <h2 className="text-xl font-medium">
          ดูแลทุกเคส ช่วยดันจนกว่าจะรู้ผล
        </h2>
        <p className="text-zinc-700 leading-relaxed">
          เราดูแลทุกเคสอย่างใกล้ชิด ตั้งแต่การตรวจเอกสาร วิเคราะห์เครดิต
          ไปจนถึงการประสานงานกับสถาบันการเงิน เพื่อให้ลูกค้าได้รับโอกาสที่ดีที่สุด
        </p>
      </section>

      <section className="space-y-3 border border-zinc-200 rounded-3xl bg-white p-5">
        <h2 className="text-xl font-medium">
          บ้านเงินเหลือและคอนโดเงินเหลือ ทำเลคุณภาพ
        </h2>
        <p className="text-zinc-700 leading-relaxed">
          EasyHom1969 มีโครงการบ้านเงินเหลือและคอนโดเงินเหลือในหลากหลายทำเล
          ครอบคลุมกรุงเทพมหานคร ปริมณฑล ชลบุรี และพื้นที่ใกล้เคียง
          พร้อมคัดเลือกให้เหมาะกับงบประมาณและเป้าหมายของลูกค้าแต่ละราย
        </p>
      </section>
    </section>


    {/* CTA */}
    <section className="grid md:grid-cols-2 h-[500px]">
      <div className="bg-green-800 flex flex-col justify-center text-white p-10 ">
        <div className="text-2xl">เสนอบริการงานขายโครงการ</div>
        <div className="font-light">วิเคราะห์ภาพรวมตลาดอสังหาริมทรัพย์</div>
        <Link to="tel:0657479789" className="btn w-fit mt-5">สอบถามเพิ่มเติม</Link>
      </div>
      <div className="bg-green-950 flex flex-col justify-center p-10 text-white">
        <div className="text-2xl">ติดต่อนักลงทุนสัมพันธ์</div>
        <div className="font-medium mt-5">EASY HOM. 1969 CO., LTD.</div>
        <div className="font-light">92/5 อาคารสาธรธานี 2 ชั้นที่ 3 ถนนสาทรเหนือ แขวงสีลม เขตบางรัก กรุงเทพมหานคร 10500</div>
        <Link to="tel:0657479789" className="btn w-fit mt-5">ติดต่อนักลงทุนสัมพันธ์</Link>
      </div>

    </section>


  </main>;
}
