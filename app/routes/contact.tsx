import type { Route } from "./+types/home";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "EasyHom1969 - Contact Us | ติดต่อเรา" },
    {
      name: "description",
      content:
        "ติดต่อ EasyHom1969 ที่ปรึกษาอสังหาริมทรัพย์มืออาชีพ คอนโด บ้าน ที่ดิน พร้อมดูแลตั้งแต่ต้นจนจบ",
    },
  ];
}

export const CONTACT_LIST = [
  {
    href: "mailto:easyhome1969@gmail.com",
    label: "easyhome1969@gmail.com",
    icon: <MdEmail />,
  },
  {
    href: "tel:021099625",
    label: "02 109 9625",
    icon: <FaPhoneAlt />,
  },
  {
    href: "https://maps.app.goo.gl/SPv2skUq6jBPChaBA",
    label:
      "92/5 อาคารสาธรธานี 2 ชั้นที่ 2 ถนนสาทรเหนือ สีลม เขตบางรัก กรุงเทพมหานคร",
    icon: <MdLocationOn />,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen ">

      <section className="h-[500px] overflow-hidden relative">
        <div className="absolute inset-0 w-full h-full flex flex-col items-baseline
        p-10 justify-center gap-4 
        bg-linear-0 from-black/80 to-black/0"></div>

        <img src="/images/contact-bg.jpg"
          className="h-full w-full object-cover" alt="hero image qualicication" />
      </section>
      {/* HERO */}
      <section className="pt-32 pb-16 border-b border-white/10">
        <div className="container-x px-4 max-w-4xl">
          <p className="uppercase tracking-widest text-(--primary-color) text-sm mb-3">
            EasyHom1969
          </p>

          <h1 className="text-3xl md:text-4xl font-light leading-tight">
            ติดต่อเรา
          </h1>

          <p className="mt-4  leading-relaxed max-w-2xl">
            ทีมงาน EasyHom1969 พร้อมให้คำปรึกษาอสังหาริมทรัพย์อย่างจริงใจ
            ไม่ว่าจะเป็นคอนโด บ้าน หรือที่ดิน ดูแลคุณตั้งแต่เริ่มต้นจนถึงวันโอน
          </p>

          <div className="mt-6 h-[1px] w-24 bg-gradient-to-r from-(--primary-color) to-transparent" />
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-16">
        <div className="container-x px-4 max-w-5xl grid md:grid-cols-2 gap-12">
          {/* LEFT */}
          <div className="space-y-6">
            {CONTACT_LIST.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex gap-4 rounded-full items-start p-5 border 
                           border-(--primary-color)/60 transition group"
              >
                <div className="text-2xl text-(--primary-color) mt-1">
                  {item.icon}
                </div>
                <p className="/80 group-hover: leading-relaxed">
                  {item.label}
                </p>
              </a>
            ))}

            <div className="pt-6">
              <a
                href="tel:021099625"
                className="inline-flex items-center justify-center
                           px-8 py-3 border border-(--primary-color)
                           text-(--primary-color) hover:bg-(--primary-color) hover:text-black
                           transition rounded-full"
              >
                โทรปรึกษาฟรี
              </a>
            </div>
          </div>

          {/* MAP */}
          <div className="w-full h-[360px] border border-white/10 overflow-hidden">
            <iframe
              title="EasyHom1969 Location"
              src="https://www.google.com/maps?q=92/5%20%E0%B8%AD%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%B2%E0%B8%98%E0%B8%A3%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%B5%202&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
