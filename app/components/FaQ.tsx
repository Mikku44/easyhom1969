import { AnimatePresence,motion } from "framer-motion";
import { useState } from "react";
import { LuPlus } from "react-icons/lu";

const FAQS = [
  {
    q: "กู้บ้านเงินเหลือ เหมาะกับใครบ้าง?",
    a: "เหมาะกับพนักงานประจำและเจ้าของกิจการที่ต้องการเงินก้อน มีประวัติดี แต่มีภาระหนี้หลายทาง",
  },
  {
    q: "พนักงานประจำจะได้เงินทอนประมาณเท่าไหร่?",
    a: "โดยทั่วไปอยู่ที่ประมาณ 300,000 – 1,000,000 บาท และมักนำไปปิดหนี้ผ่อนต่าง ๆ เพื่อลดภาระรายเดือน",
  },
  {
    q: "เจ้าของกิจการสามารถได้เงินทอนมากกว่านี้ไหม?",
    a: "ได้ หากกิจการมีเอกสารรายได้ชัดเจน บางเคสสามารถทอนเงินได้ถึง 10 – 20 ล้านบาท",
  },
  {
    q: "ไม่เคยมีสินเชื่อบ้านมาก่อน กู้ได้ไหม?",
    a: "กู้ได้ หากมีรายได้และเอกสารครบ ทีมงานจะช่วยวางแผนและเลือกแนวทางที่เหมาะสม",
  },
  {
    q: "เจ้าของกิจการนำเงินกู้ไปใช้ทำอะไรได้บ้าง?",
    a: "ส่วนใหญ่นำไปลงทุนต่อ เสริมสภาพคล่อง หรือปรับโครงสร้างทางการเงินของธุรกิจ",
  },
  {
    q: "ภาระหนี้เยอะ ยื่นแบงก์เองไม่ผ่าน ควรทำอย่างไร?",
    a: "เราช่วยวิเคราะห์เคส แก้โครงสร้างหนี้ และเลือกธนาคารที่เหมาะสม เพิ่มโอกาสอนุมัติได้มากขึ้น",
  },
  {
    q: "ต้องใช้เอกสารอะไรในการประเมินเบื้องต้น?",
    a: "ใช้เพียงเครดิตบูโร และสลิปเงินเดือนหรือเอกสารรายได้ เพื่อประเมินวงเงินคร่าว ๆ",
  },
  {
    q: "มีช่วยแนะนำทำเลหรือทรัพย์ไหม?",
    a: "มี เราจะเสนอทำเลที่มีศักยภาพ เหมาะกับงบประมาณและเป้าหมายของลูกค้า",
  },
  {
    q: "มีค่าใช้จ่ายล่วงหน้าหรือไม่?",
    a: "ไม่มีค่าใช้จ่ายล่วงหน้า การประเมินและให้คำปรึกษาเบื้องต้นฟรี",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
          คำถามที่พบบ่อย
        </h2>
        <p className="text-slate-500 font-light">
          ตอบข้อสงสัยเบื้องต้น เพื่อการวางแผนทางการเงินที่ชัดเจน
        </p>
      </div>

      <div className="space-y-3">
        {FAQS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className={`transition-all duration-300 rounded-2xl ${
                isOpen 
                  ? "bg-white shadow-sm border-transparent" 
                  : "bg-white border border-slate-100 hover:border-slate-200"
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex justify-between items-center text-left px-7 py-6 group"
              >
                <span className={`text-base md:text-lg transition-colors duration-300 ${
                  isOpen ? "text-slate-900 font-semibold" : "text-slate-600 font-medium"
                }`}>
                  {item.q}
                </span>
                
                <div className={`transition-transform duration-500 rounded-full p-1 ${
                  isOpen ? "rotate-45 text-slate-900" : "text-slate-400 group-hover:text-slate-600"
                }`}>
                  <LuPlus className="text-xl" />
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className=" pb-8 text-slate-500 leading-relaxed font-light border-t border-slate-200/50 pt-4 mx-7">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
