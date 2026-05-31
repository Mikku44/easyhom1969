import type { Route } from "./+types/home";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "ติดต่อเรา | EasyHom1969 - ที่ปรึกษาอสังหาริมทรัพย์และสินเชื่อมืออาชีพ" },
    {
      name: "description",
      content:
        "ติดต่อ EasyHom1969 ทีมงานที่ปรึกษาอสังหาริมทรัพย์มืออาชีพ พร้อมให้คำปรึกษาเรื่องบ้าน คอนโด ที่ดิน และการขอสินเชื่อแบบครบวงจร ดูแลเคียงข้างคุณตั้งแต่ต้นจนถึงวันโอน",
    },
    // Open Graph / Facebook / LINE Share Meta Tags
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://easyhom1969.com/contact" },
    { property: "og:title", content: "ติดต่อเรา | EasyHom1969 - ที่ปรึกษาอสังหาริมทรัพย์และสินเชื่อมืออาชีพ" },
    { property: "og:description", content: "ทีมงาน EasyHom1969 พร้อมให้คำปรึกษาอสังหาริมทรัพย์และสินเชื่ออย่างจริงใจ ดูแลคุณตั้งแต่เริ่มต้นจนถึงวันโอน" },
    { property: "og:image", content: "https://easyhom1969.com/images/contact-bg.jpg" },
    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: "https://easyhom1969.com/contact" },
    { name: "twitter:title", content: "ติดต่อเรา | EasyHom1969" },
    { name: "twitter:description", content: "ทีมงาน EasyHom1969 พร้อมให้คำปรึกษาอสังหาริมทรัพย์และสินเชื่ออย่างจริงใจ" },
  ];
}

export const CONTACT_LIST = [
  {
    href: "mailto:easyhom1969@gmail.com",
    label: "easyhom1969@gmail.com",
    icon: <MdEmail />,
  },
  {
    href: "tel:0657479789",
    label: "06 5747 9789",
    icon: <FaPhoneAlt />,
  },
  {
    href: "https://maps.app.goo.gl/yEjzQZxQEoho1cnq9",
    label:
      "37 ถนน นางลิ้นจี่ แขวงช่องนนทรี เขตยานนาวา กรุงเทพมหานคร 10120",
    icon: <MdLocationOn />,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">

      {/* HERO SECTION WITH IMAGE & BACKGROUND TEXT OVERLAY */}
      <section className="h-[480px] overflow-hidden relative w-full">
        {/* Dark Gradient Overlay layer */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
        <div className="absolute inset-0 z-10 bg-black/40" />

        {/* Hero Content Positioned inside image frame */}
        <div className="absolute inset-0 z-20 container-x px-4 max-w-5xl flex flex-col justify-end pb-12">
          <p className="uppercase tracking-widest text-[var(--primary-color)] text-xs md:text-sm font-semibold mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-tight max-w-2xl">
            ร่วมงานกับเรา <br />
            <span className="font-normal text-[var(--primary-color)]">เปลี่ยนเรื่องอสังหาฯ ให้เป็นเรื่องง่าย</span>
          </h2>
        </div>

        <img 
          src="/images/contact-bg.jpg"
          className="h-full w-full object-cover object-center scale-105 animate-fade-in" 
          alt="EasyHom1969 Office Contact Banner" 
        />
      </section>

      {/* DETAILED CONTENT INTRODUCTION */}
      <section className="py-12 border-b border-white/5">
        <div className="container-x px-4 max-w-5xl">
          <h1 className="text-2xl md:text-3xl font-light mb-4">
            ติดต่อสอบถามข้อมูล
          </h1>
          <p className="text-neutral-400 leading-relaxed max-w-3xl text-[15px] md:text-base">
            ไม่ว่าคุณกำลังมองหาบ้านหรือคอนโดในฝัน ต้องการฝากขายทรัพย์สิน หรือมีข้อสงสัยเกี่ยวกับการยื่นขออนุมัติวงเงินสินเชื่อ 
            ทีมงานผู้เชี่ยวชาญของ <span className="text-white font-medium">EasyHom1969</span> พร้อมให้คำแนะนำอย่างเป็นกันเองและจริงใจ 
            เรายินดีดูแลเคียงข้างคุณในทุกขั้นตอนนับตั้งแต่วันแรกจนถึงวันส่งมอบโอนกรรมสิทธิ์สำเร็จ
          </p>
          <div className="mt-6 h-[2px] w-16 bg-[var(--primary-color)]" />
        </div>
      </section>

      {/* CONTACT INFO & GOOGLE MAP INTERACTION CARDS */}
      <section className="py-16 bg-neutral-900/30">
        <div className="container-x px-4 max-w-5xl grid md:grid-cols-12 gap-8 items-start">
          
          {/* LEFT AREA: Contact Items List */}
          <div className="space-y-4 md:col-span-5 flex flex-col">
            {CONTACT_LIST.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex gap-4 rounded-xl items-center p-4 bg-neutral-900/50 border border-white/5 hover:border-[var(--primary-color)]/50 transition-all duration-300 group"
              >
                <div className="text-xl p-3 rounded-lg bg-neutral-800 text-[var(--primary-color)] group-hover:bg-[var(--primary-color)] group-hover:text-black transition-colors duration-300 shrink-0">
                  {item.icon}
                </div>
                <p className="text-[14px] text-neutral-300 group-hover:text-white leading-relaxed break-words overflow-hidden">
                  {item.label}
                </p>
              </a>
            ))}

            <div className="pt-4">
              <a
                href="tel:0657479789"
                className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-3.5 bg-[var(--primary-color)] text-black font-medium hover:bg-white transition-all duration-200 rounded-full text-center text-sm tracking-wide shadow-lg active:scale-98"
              >
                โทรปรึกษาทันที
              </a>
            </div>
          </div>

          {/* RIGHT AREA: Google Interactive Map */}
          <div className="w-full h-[380px] md:col-span-7 rounded-2xl border border-white/10 overflow-hidden shadow-2xl relative bg-neutral-900">
            <iframe
              title="EasyHom1969 Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.138482337388!2d100.5421717!3d13.710061399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f0009938ce3%3A0x89a18b5485f8e905!2sHom%20Sleep%20Salon%20Sathorn%20Rama3!5e0!3m2!1sth!2sth!4v1766056782067!5m2!1sth!2sth"
              className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              loading="lazy"
              allowFullScreen
            />
          </div>

        </div>
      </section>
    </main>
  );
}