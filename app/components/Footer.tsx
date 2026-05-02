import { FaLine } from "react-icons/fa6";
import { LuSquareArrowOutUpRight, LuCalculator } from "react-icons/lu";
import { PiPhoneCall } from "react-icons/pi";
import { Link } from "react-router";
import { MENU_APP } from "~/const/app";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] w-full pt-16 border-t border-white/5">
      <div className="container-x px-6 pb-16 grid gap-12 lg:grid-cols-5 text-white">

        {/* Brand Section */}
        <div className="lg:col-span-2 space-y-6">
          <Link to="/" className="inline-block opacity-90 hover:opacity-100 transition-opacity">
            <img
              src="/logo/easyhomlogo.png"
              alt="Easy Hom 1969 logo"
              className="w-24  " // Subtle logo integration
            />
          </Link>

          <p className="text-sm text-slate-400 font-light leading-relaxed max-w-xs">
            เราเชื่อว่าบ้านที่ดีเริ่มต้นจากการบริการที่จริงใจ
            EasyHom1969 พร้อมดูแลคุณทุกขั้นตอนด้วยความเป็นมืออาชีพ
          </p>

          <div className="space-y-4">
            <a
              href="tel:0657479789"
              className="group flex items-center gap-3 text-lg font-medium text-white hover:text-green-400 transition-colors"
            >
              <span className="p-2 bg-white/5 rounded-full group-hover:bg-green-500/10 transition-colors">
                <PiPhoneCall className="text-xl" />
              </span>
              065-747-9789
            </a>

            <a
              href="https://line.me/ti/p/@easyhom1969"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 
              py-3 bg-[#06C755] hover:bg-[#05b34c] text-white rounded-full transition-all duration-200 w-fit shadow-md"
            >
              {/* Line Icon (Simplified SVG) */}
             <FaLine className="size-8"/>

              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold tracking-wider leading-none opacity-80">Line Official</span>
                <span className="text-lg font-bold leading-tight">Add friend</span>
              </div>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500 mb-6">
            เมนูหลัก
          </h4>
          <ul className="space-y-4">
            {MENU_APP.map((item) => (
              <li
                className="nav-item"
                key={item.href}>
                <Link
                  className="text-sm font-light nav-lnk text-slate-400 hover:text-white
                   hover:translate-x-1 inline-block transition-all duration-200"
                  to={item.href as any}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500 mb-6">
            ช่วยเหลือ
          </h4>
          <ul className="space-y-4">
            <li>
              <Link to="/privacy-policy" className="text-sm font-light text-slate-400 hover:text-white transition-colors">
                นโยบายความเป็นส่วนตัว
              </Link>
            </li>
            <li>
              <Link to="/terms-of-service" className="text-sm font-light text-slate-400 hover:text-white transition-colors">
                ข้อกำหนดการใช้งาน
              </Link>
            </li>
          </ul>
        </div>

        {/* Action & Map */}
        <div className="space-y-6">
          <Link
            to="/condo-loan-calculator"
            className="flex items-center justify-center gap-2 px-6 py-3 border border-white/10 rounded-full text-sm font-light hover:bg-white hover:text-black transition-all duration-300"
          >
            <LuCalculator />
            คำนวณวงเงินกู้
          </Link>

          <div className="w-full h-40 rounded-2xl opacity-60 hover:opacity-100 transition-all duration-500 overflow-hidden border border-white/5">
            <iframe
              title="EasyHom1969 Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.138482337388!2d100.5421717!3d13.710061399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f0009938ce3%3A0x89a18b5485f8e905!2sHom%20Sleep%20Salon%20Sathorn%20Rama3!5e0!3m2!1sth!2sth!4v1766056782067!5m2!1sth!2sth"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/5 py-8 text-center">
        <p className="text-[10px] tracking-[0.1em] text-slate-600 uppercase">
          © {currentYear} EASY HOM 1969 CO., LTD. — Crafted for better living.
        </p>
      </div>
    </footer>
  );
}