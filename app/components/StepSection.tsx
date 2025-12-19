import { Link } from "react-router";
import { motion } from "framer-motion";

interface StepItem {
  step: number;
  title: string;
  description: string;
}

const STEPS: StepItem[] = [
  {
    step: 1,
    title: "ลงทะเบียน & ประเมินวงเงิน",
    description:
      "แจ้งข้อมูลเบื้องต้นและโซนที่ต้องการ พร้อมส่งสลิปเงินเดือนหรือเอกสารรายได้ ทีมงานช่วยพรีประเมินวงเงินให้ก่อน รู้ผลรวดเร็ว",
  },
  {
    step: 2,
    title: "คัดเลือกทรัพย์ & พาชมโครงการ",
    description:
      "แนะนำบ้านหรือคอนโดที่เหมาะกับวงเงินและเป้าหมาย พร้อมพาชมโครงการแบบส่วนตัว เฉพาะครอบครัวของลูกค้า",
  },
  {
    step: 3,
    title: "ปิดภาระหนี้ก่อนยื่นกู้",
    description:
      "ทีมงานช่วยวางแผนและดำเนินการปิดภาระหนี้เดิม ทั้งในระบบและนอกระบบ เพื่อเตรียมความพร้อมก่อนยื่นกู้กับธนาคาร",
  },
  {
    step: 4,
    title: "อนุมัติ & โอนกรรมสิทธิ์",
    description:
      "เมื่อสินเชื่ออนุมัติ นัดเซ็นสัญญาและโอนกรรมสิทธิ์ ดูแลทุกขั้นตอน ฟรีค่าใช้จ่าย ณ วันโอน",
  },
];

/* ---------------- Motion Variants ---------------- */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function StepSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900">
          ขั้นตอนการสมัครรับบริการ
        </h2>
        <p className="mt-4 text-neutral-600 max-w-3xl mx-auto leading-relaxed">
          สำหรับผู้ที่ต้องการซื้อบ้านเงินเหลือ คอนโดเงินเหลือ
          หรือซื้อบ้านปิดหนี้ให้ก่อน EasyHom1969
          ดูแลตั้งแต่ประเมินวงเงิน ไปจนถึงวันโอนกรรมสิทธิ์
        </p>
      </motion.div>

      {/* Steps */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-4 gap-6"
      >
        {STEPS.map((item) => (
          <motion.div
            key={item.step}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="rounded-3xl border border-neutral-200 p-6
                       hover:border-neutral-300 transition bg-white"
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg
                         bg-neutral-900 text-white font-semibold mb-6"
            >
              {item.step}
            </div>

            <h3 className="text-lg font-medium text-neutral-800 mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-neutral-600 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-16 text-center"
      >
        <p className="text-neutral-700 font-medium">
          ง่าย ครบ จบในที่เดียว พร้อมทีมที่ปรึกษามืออาชีพ
        </p>

        <div className="mt-8">
          <Link
            to="/condo-loan-calculator"
            className="inline-block rounded-full bg-neutral-900 px-10 py-3 text-white
                       hover:bg-(--primary-color) transition"
          >
            เริ่มประเมินวงเงินฟรี
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
