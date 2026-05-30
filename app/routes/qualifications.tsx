import { Link, NavLink } from "react-router";
import type { Route } from "./+types/home";
import { motion } from "framer-motion";
import { FaArrowRight, FaBuilding, FaUser } from "react-icons/fa6";

export function meta({ }: Route.MetaArgs) {
  const siteUrl = "https://easyhom1969.com";
  const pageTitle = "Easy hom 1969 - Qualifications";
  const pageDescription = "สำหรับผู้ที่ต้องการกู้บ้านเงินเหลือ คอนโดเงินเหลือ หรือซื้อบ้านปิดหนี้ให้ก่อน EasyHom1969 เราช่วยประเมินความสามารถในการกู้และวางแผนให้เหมาะกับแต่ละกลุ่ม";
  const ogImage = `${siteUrl}/images/banner-qualification.jpg`;

  return [
    { title: pageTitle },
    { name: "description", content: pageDescription },

    // Open Graph / Facebook Meta Tags
    { property: "og:type", content: "website" },
    { property: "og:url", content: siteUrl },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: pageDescription },
    { property: "og:image", content: ogImage },

    // Twitter Meta Tags
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: siteUrl },
    { name: "twitter:title", content: pageTitle },
    { name: "twitter:description", content: pageDescription },
    { name: "twitter:image", content: ogImage },
  ];
}

interface QualificationItem {
  title: string;
  description: string;
}

interface QualificationGroup {
  img: string;
  group: string;
  subtitle: string;
  items: QualificationItem[];
  highlight: string;
}

const QUALIFICATION_GROUPS: QualificationGroup[] = [
  {
    img: "/images/banner (2).jpg",
    group: "พนักงานประจำ",
    subtitle: "เหมาะสำหรับผู้ที่ต้องการเงินก้อนเพื่อปิดหนี้ ลดภาระผ่อนรายเดือน",
    highlight: "เงินทอนโดยทั่วไปประมาณ 300,000 – 1,000,000 บาท",
    items: [
      {
        title: "รายได้ต่อเดือน",
        description: "สลิปเงินเดือนตั้งแต่ 30,000 บาทขึ้นไป สามารถกู้ร่วมกับคู่สมรสหรือบุคคลในครอบครัวได้",
      },
      {
        title: "เอกสารรายได้",
        description: "มีสลิปเงินเดือน หรือหนังสือรับรองเงินเดือนจากบริษัท",
      },
      {
        title: "อายุงาน",
        description: "อายุงานตั้งแต่ 6 เดือนขึ้นไป กรณีเปลี่ยนงานแต่ยังอยู่ในสายอาชีพเดียวกันสามารถประเมินเป็นกรณีพิเศษได้",
      },
      {
        title: "วัตถุประสงค์ในการกู้",
        description: "นำเงินไปปิดหนี้ผ่อนหลายทาง รวมภาระหนี้ให้เหล้อน้อยลง",
      },
    ],
  },
  {
    img: "/images/banner (3).jpg",
    group: "เจ้าของธุรกิจ",
    subtitle: "เหมาะสำหรับผู้ประกอบการที่ต้องการเสริมสภาพคล่องและขยายธุรกิจ",
    highlight: "บางเคสสามารถทอนเงินได้สูงถึง 10 – 20 ล้านบาท",
    items: [
      {
        title: "สถานะธุรกิจ",
        description: "เป็นเจ้าของกิจการ ผู้ประกอบการ หรือฟรีแลนซ์ ที่มีรายได้สม่ำเสมอ",
      },
      {
        title: "เอกสารทางการเงิน",
        description: "มีเอกสารแสดงรายได้ เช่น Statement, ภ.พ.30, ภ.ง.ด. หรือเอกสารที่ธนาคารรับรอง",
      },
      {
        title: "วัตถุประสงค์ในการกู้",
        description: "นำเงินไปเสริมสภาพคล่อง ลงทุนต่อ หรือปรับโครงสร้างทางการเงินของธุรกิจ",
      },
      {
        title: "ประวัติทางการเงิน",
        description: "มีประวัติดี แม้ภาระหนี้สูงหรือยื่นแบงก์เองไม่ผ่าน ทีมงานช่วยวิเคราะห์และแก้เคสให้",
      },
    ],
  },
];

export default function QualificationSection() {
  return (
    <main className="bg-white min-h-screen text-neutral-800 antialiased">

      {/* Minimal & Modern Hero Section */}
      <section className="relative h-[540px] overflow-hidden bg-neutral-900 flex items-center">
        {/* Clean Vignette Overlay */}
        <div className="absolute inset-0 z-10 bg-linear-to-t from-neutral-950/90 via-neutral-950/40 to-neutral-950/20" />

        <div className="relative z-20 w-full max-w-5xl mx-auto px-6 md:px-8 mt-12">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight"
            >
              คุณสมบัติเบื้องต้น<span className="font-medium text-neutral-300">ผู้สมัคร</span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm md:text-base text-neutral-300 font-light mt-4 leading-relaxed opacity-90 max-w-2xl"
            >
              สำหรับผู้ที่ต้องการกู้บ้านเงินเหลือ คอนโดเงินเหลือ หรือซื้อบ้านปิดหนี้ให้ก่อน EasyHom1969
              เราช่วยประเมินความสามารถในการกู้และวางแผนให้เหมาะกับแต่ละกลุ่มอาชีพ
            </motion.p>

            {/* Moved Buttons Inside Hero with Clean Styling */}
            {/* Icons ที่ต้อง import เพิ่ม: FaUser, FaBuilding */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <Link
                to="/personal-loan"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-medium tracking-wider uppercase border border-white bg-white text-neutral-900 transition duration-300 hover:bg-transparent hover:text-white group min-w-[160px]"
              >
                <FaUser className="text-[10px] transition-transform duration-300 group-hover:scale-110" />
                <span>สินเชื่อบุคคล</span>
              </Link>

              <Link
                to="/business-loan"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-medium tracking-wider uppercase border border-white/30 bg-transparent text-white transition duration-300 hover:border-white hover:bg-white/5 group min-w-[160px]"
              >
                <FaBuilding className="text-[10px] transition-transform duration-300 group-hover:translate-y-[-1px]" />
                <span>สินเชื่อธุรกิจ</span>
              </Link>
            </motion.div>
          </div>
        </div>

        <img
          src="/images/banner-qualification.jpg"
          className="h-full w-full object-cover absolute inset-0 opacity-40 object-center"
          alt="hero image qualification"
        />
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-6 md:px-8 py-20">

        {/* Minimal Grid Cards Layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {QUALIFICATION_GROUPS.map((group, index) => (
            <div
              key={index}
              className="bg-white flex flex-col justify-between group"
            >
              <div>
                {/* Modern Image Container */}
                <div className="overflow-hidden rounded-2xl mb-6 border border-neutral-100 aspect-video">
                  <img
                    src={group.img}
                    alt={group.group}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                </div>

                <h3 className="text-xl font-medium tracking-tight text-neutral-900">
                  {group.group}
                </h3>

                <p className="mt-2 text-sm text-neutral-500 font-light leading-relaxed">
                  {group.subtitle}
                </p>

                <div className="mt-4 border-l-2 border-neutral-900 pl-4 py-1 text-xs text-neutral-700 font-medium tracking-wide">
                  {group.highlight}
                </div>

                {/* Minimal Row-Based Items List */}
                <ul className="mt-8 border-t border-neutral-100 divide-y divide-neutral-100">
                  {group.items.map((item, i) => (
                    <li key={i} className="py-4 first:pt-4 last:pb-0">
                      <p className="text-sm font-medium text-neutral-900">
                        {item.title}
                      </p>
                      <p className="text-neutral-500 text-xs md:text-sm font-light leading-relaxed mt-1">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Minimalist Bottom Banner Section (CTA) */}
        <div className="w-full overflow-hidden mt-24 border border-neutral-200 rounded-3xl bg-neutral-50 p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="max-w-xl">
            <h2 className="text-xl md:text-2xl font-medium tracking-tight text-neutral-900 mb-2">
              ประเมินวงเงินเบื้องต้น รู้ผลภายใน 24 ชั่วโมง*
            </h2>
            <p className="text-neutral-500 text-sm font-light leading-relaxed">
              ใช้เอกสารเพียงเครดิตบูโร และเอกสารรายได้ (ขึ้นอยู่กับความครบถ้วนของเอกสาร*)
            </p>
          </div>

          <NavLink
            to="/contact"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-neutral-900 text-white text-sm font-medium tracking-wide shadow-xs hover:bg-neutral-800 transition duration-200 shrink-0 group"
          >
            <span>ประเมินวงเงินฟรี</span>
            <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
          </NavLink>
        </div>

      </section>
    </main>
  );
}