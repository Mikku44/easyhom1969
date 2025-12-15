import React from "react";

interface FeatureItem {
  title: string;
  description: string;
}

const FEATURES: FeatureItem[] = [
  {
    title: "ปิดหนี้ให้ก่อน ลดภาระทันที",
    description:
      "ช่วยวางแผนและปิดภาระหนี้เดิม ตั้งแต่หลักหมื่นถึงหลักล้าน เพื่อเตรียมความพร้อมก่อนยื่นสินเชื่อ",
  },
  {
    title: "ได้เงินก้อนเหลือ ใช้งานได้จริง",
    description:
      "มีเงินเหลือประมาณ 100,000 – 1,000,000 บาท สำหรับตกแต่งบ้าน ซื้อเฟอร์นิเจอร์ หรือใช้เป็นเงินสำรอง",
  },
  {
    title: "รวมหนี้เป็นก้อนเดียว บริหารง่าย",
    description:
      "จากหลายหนี้ หลายดอกเบี้ย รวมเป็นก้อนเดียว ช่วยให้การผ่อนชำระและวางแผนการเงินง่ายขึ้น",
  },
  {
    title: "เปลี่ยนหนี้เป็นสินทรัพย์",
    description:
      "เปลี่ยนภาระหนี้ให้กลายเป็นบ้านหรือคอนโด ซึ่งเป็นทรัพย์สินของคุณในระยะยาว",
  },
  {
    title: "บอกลาดอกเบี้ยโหด",
    description:
      "ลดภาระจากดอกเบี้ยบัตรเครดิต 20–30% ต่อปี มาเป็นสินเชื่อที่อยู่อาศัย ดอกเบี้ยต่ำกว่า",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900">
          ทำไมต้อง EasyHom1969
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-neutral-600 leading-relaxed">
          ที่ปรึกษาสินเชื่อบ้านแบบ One Stop Service
          ดูแลครบทุกขั้นตอน ตั้งแต่ปิดหนี้ วางแผนสินเชื่อ
          ไปจนถึงวันโอนกรรมสิทธิ์
        </p>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURES.map((item, index) => (
          <div
            key={index}
            className="rounded-3xl border border-neutral-200 p-7
                       hover:border-neutral-300 transition"
          >
            <h3 className="text-lg font-medium text-neutral-800 mb-3">
              {item.title}
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
