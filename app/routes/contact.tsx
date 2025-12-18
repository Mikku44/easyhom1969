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
                href="tel:0657479789"
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.138482337388!2d100.5421717!3d13.710061399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f0009938ce3%3A0x89a18b5485f8e905!2sHom%20Sleep%20Salon%20Sathorn%20Rama3!5e0!3m2!1sth!2sth!4v1766056782067!5m2!1sth!2sth"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
}


