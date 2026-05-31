import { NavLink } from "react-router";
import { motion } from "framer-motion";
import { FaArrowRight, FaFileLines, FaBriefcase, FaIdCard } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import ApplicationForm from "~/components/ApplicationForm";

export function meta() {
  const siteUrl = "https://easyhom1969.com";
  const pageTitle = "สินเชื่อบุคคลสำหรับพนักงานประจำ - Easy hom 1969";
  const pageDescription = "รวมภาระหนี้ ลดภาระผ่อนรายเดือน กู้บ้านเงินเหลือ คอนโดเงินเหลือ สำหรับพนักงานประจำรายได้ 30,000 บาทขึ้นไป อายุงาน 6 เดือนกู้ได้ทันที";
  const ogImage = `${siteUrl}/images/banner (2).jpg`;

  return [
    { title: pageTitle },
    { name: "description", content: pageDescription },
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${siteUrl}/personal-loan` },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: pageDescription },
    { property: "og:image", content: ogImage },
  ];
}

export default function PersonalLoan() {
  return (
    <main className="bg-white min-h-screen text-neutral-800 antialiased">
      {/* Minimal Hero Section */}
      <section className="relative h-[420px] overflow-hidden bg-neutral-900 flex items-center">
        <div className="absolute inset-0 z-10 bg-linear-to-r from-neutral-950/90 via-neutral-950/50 to-transparent" />

        <div className="relative z-20 w-full max-w-5xl mx-auto px-6 md:px-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold tracking-widest text-neutral-400 uppercase block mb-3"
            >
              EasyHom1969 — Qualification
            </motion.span>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight"
            >
              สินเชื่อบุคคล <div className="font-medium text-neutral-300">(พนักงานประจำ)</div>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm md:text-base text-neutral-300 font-light mt-4 leading-relaxed opacity-90"
            >
              รับเงินก้อนปิดหนี้ค้าง เสริมสภาพคล่องทางการเงิน หรือกู้บ้าน-คอนโดเงินเหลือ
              เปลี่ยนภาระผ่อนหลายทางให้เหลือยอดผ่อนสบาย ๆ เพียงที่เดียว
            </motion.p>
          </div>
        </div>

        <img
          src="/images/personal.jpg"
          className="h-full w-full object-cover absolute inset-0 opacity-40 object-center"
          alt="Personal Loan Banner"
        />
      </section>

      {/* Main Content Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 py-20">

        {/* Clean Highlight Stats */}
        <div className="grid sm:grid-cols-3 gap-8 mb-20 border-b border-neutral-100 pb-12">
          <div className="text-left">
            <p className="text-xs tracking-wider text-neutral-400 uppercase font-medium mb-1">วงเงินเงินทอนโดยทั่วไป</p>
            <p className="text-2xl md:text-3xl font-light text-neutral-900 tracking-tight">300,000 –<br /> 1,000,000 <span className="text-sm text-neutral-500 font-normal">บาท</span></p>
            <p className="text-xs text-neutral-400 font-light mt-1">*ขึ้นอยู่กับฐานเงินเดือนและเครดิต</p>
          </div>
          <div className="text-left">
            <p className="text-xs tracking-wider text-neutral-400 uppercase font-medium mb-1">ฐานรายได้ขั้นต่ำ</p>
            <p className="text-2xl md:text-3xl font-light text-neutral-900 tracking-tight">30,000 <span className="text-sm text-neutral-500 font-normal">บาท / เดือน</span></p>
            <p className="text-xs text-neutral-400 font-light mt-1">*สามารถยื่นกู้ร่วมในครอบครัวได้</p>
          </div>
          <div className="text-left">
            <p className="text-xs tracking-wider text-neutral-400 uppercase font-medium mb-1">ระยะเวลาอนุมัติเบื้องต้น</p>
            <p className="text-2xl md:text-3xl font-normal text-neutral-900 tracking-tight">ภายใน 24 <span className="text-sm text-neutral-500 font-normal">ชั่วโมง</span></p>
            <p className="text-xs text-neutral-400 font-light mt-1">*เมื่อส่งมอบเอกสารครบถ้วน</p>
          </div>
        </div>

        {/* Details & Documents Layout */}
        <div className=" space-y-16">

          {/* สิทธิประโยชน์และจุดเด่น แบบ Minimal List */}
          <div>
            <h2 className="text-xl font-medium tracking-tight text-neutral-900 mb-8 flex items-center gap-3">
              <span>สิทธิประโยชน์และจุดเด่น</span>
            </h2>
            <div className="space-y-4">
              {[
                "รวมหนี้บัตรเครดิต บัตรกดเงินสด ให้เหลือผ่อนก้อนเดียว",
                "อัตราดอกเบี้ยบ้านพิเศษ ต่ำกว่าดอกเบี้ยสินเชื่อส่วนบุคคลทั่วไป",
                "มีเจ้าหน้าที่ผู้เชี่ยวชาญช่วยวิเคราะห์และแก้เคสให้ฟรี ไม่มีค่าใช้จ่ายเบื้องต้น",
                "เปลี่ยนงานใหม่แต่ยังอยู่ในสายงานเดิม สามารถนับอายุงานต่อเนื่องให้ได้",
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-3.5 group">
                  <FaCheckCircle className=" text-md mt-1 transition-colors duration-200  text-green-500" />
                  <p className="text-neutral-600 text-md md:text-base font-light leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* เอกสารที่ต้องใช้ แบบ Clean Row */}
          <div>
            <h2 className="text-xl font-medium tracking-tight text-neutral-900 mb-8">
              เอกสารประกอบการพิจารณา
            </h2>

            <div className="border border-neutral-200 divide-y divide-neutral-200 rounded-xl overflow-hidden">
              {/* Category 1 */}
              <div className="p-6 bg-white grid sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="flex items-center gap-2.5 text-neutral-900 font-medium text-sm">
                  <FaIdCard className="text-neutral-400 text-base" />
                  <span>1. เอกสารส่วนตัว</span>
                </div>
                <div className="sm:col-span-2 text-sm text-neutral-600 space-y-1.5 font-light">
                  <p>• สำเนาบัตรประชาชน (ที่ยังไม่หมดอายุ)</p>
                  <p>• สำเนาทะเบียนบ้านทุกหน้า</p>
                </div>
              </div>

              {/* Category 2 */}
              <div className="p-6 bg-white grid sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="flex items-center gap-2.5 text-neutral-900 font-medium text-sm">
                  <FaBriefcase className="text-neutral-400 text-base" />
                  <span>2. เอกสารแสดงรายได้</span>
                </div>
                <div className="sm:col-span-2 text-sm text-neutral-600 space-y-1.5 font-light">
                  <p>• สลิปเงินเดือนย้อนหลัง 3 - 6 เดือนล่าสุด หรือหนังสือรับรองเงินเดือน</p>
                  <p>• รายการเดินบัญชีธนาคาร (Statement) ย้อนหลัง 6 เดือนล่าสุด</p>
                </div>
              </div>

              {/* Category 3 */}
              <div className="p-6 bg-white grid sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="flex items-center gap-2.5 text-neutral-900 font-medium text-sm">
                  <FaFileLines className="text-neutral-400 text-base" />
                  <span>3. เอกสารตรวจสอบภาระ</span>
                </div>
                <div className="sm:col-span-2 text-sm text-neutral-600 font-light">
                  <p>• รายงานข้อมูลเครดิตบูโร (Credit Bureau) ฉบับล่าสุด</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Minimalist Bottom Banner Section */}
        <div className="w-full overflow-hidden mt-24 border border-neutral-200 rounded-3xl bg-neutral-50 p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="max-w-xl">
            <h2 className="text-xl md:text-2xl font-medium tracking-tight text-neutral-900 mb-2">
              มีภาระหนี้สูง ยื่นแบงก์เองไม่ผ่าน?
            </h2>
            <p className="text-neutral-500 text-sm md:text-base font-light leading-relaxed">
              ไม่ต้องกังวล ทีมงาน EasyHom1969 มีประสบการณ์ตรงในการดันเคสและปรับโครงสร้างการยื่นกู้ ช่วยให้คุณมีโอกาสอนุมัติผ่านราบรื่นขึ้นมาก
            </p>
          </div>

          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-neutral-900 text-white text-sm font-medium tracking-wide shadow-xs hover:bg-neutral-800 transition duration-200 shrink-0 group"
          >
            <span>ติดต่อเจ้าหน้าที่ด่วน</span>
            <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
          </NavLink>
        </div>

      </section>


      {/* form */}


      <div className="lg:py-12 py-6 relative overflow-hidden">

        <div className="max-w-6xl  mx-auto flex flex-col-reverse lg:gap-0 gap-5 lg:flex-row items-stretch 
               px-10 py-10 relative z-10 rounded-[2rem] overflow-hidden">

          {/* The Form */}
          <div className="w-full lg:w-1/2 flex">

            <ApplicationForm className="bg-white w-full rounded-[2rem] lg:rounded-r-none" />
          </div>

          {/* The Image Wrapper */}
          <div className="w-full lg:w-1/2 flex lg:h-auto h-64">
            <img
              src="/images/old-man-with-money.png"
              alt="Description"

              className="w-full h-full object-cover rounded-[2rem] lg:rounded-l-none"
            />
          </div>

        </div>
      </div>
    </main>
  );
}