import { BiCalculator } from "react-icons/bi";
import { PiPhoneCallBold, PiPhoneCallLight } from "react-icons/pi";
import { Link } from "react-router";
import { APP_NAME, CONTACT_LIST, MENU_APP } from "~/const/app";

// Define the custom primary color
const PRIMARY_BG_COLOR = "#14962a";
const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    // Set the entire footer background to the primary color

    <footer className="bg-black  w-full">
      <div className="container-x px-6 py-12 grid gap-10 lg:grid-cols-5 text-white">

        {/* Brand - Focus on simple white text */}
        <div className="md:col-span-2 ">
          <Link className=' w-[150px] ' to="/">
            <img
              src="/logo/easyhomlogo.svg"
              alt="Easy Hom 1969 logo"
              className=' w-28' />
          </Link>
          {/* <h3 className="font-bold text-2xl">{APP_NAME}</h3> */}
          <p className="text-lg text-gray-300 font-light mt-3 leading-relaxed max-w-sm">
            เราเชื่อว่าบ้านที่ดีเริ่มต้นจากการบริการที่จริงใจ
            EasyHom1969 พร้อมดูแลคุณทุกขั้นตอน
          </p>

          <div className="text-2xl flex gap-2 items-center mt-3 text-green-500">
            <PiPhoneCallBold />
            <a target="_blank" href="tel:0657479789" className="">065-747-9789</a>
          </div>



          <div className="overflow-hidden mt-4 rounded-xl w-fit">
            <img src="/images/line.jpg"
              className="w-[150px]"
              alt="line qrcode" />

          </div>
          <div className="text-sm mt-1">LINE ID : easyhom1969</div>


        </div>

        {/* Menu */}
        <div>
          {/* Section headings are muted white/gray for contrast */}
          <h4 className="font-medium text-xl tracking-widest uppercase text-gray-200 mb-4">
            เมนูหลัก
          </h4>
          <ul className="space-y-3 mc-hd">
            {MENU_APP.map((item) => (
              <li key={item.href} className="nav-item">
                <Link
                  // Links are white, hover is a light, contrasting accent color (or a brightened version of the primary)
                  className="text-base font-light nav-lnk text-white/60 hover:text-white nav-lnk transition duration-150"
                  to={item.href as any}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="">
          <h4 className="font-medium text-xl tracking-widest uppercase text-gray-200 mb-4">
            ติดต่อเรา
          </h4>
          <ul className="space-y-3 mc-hd">
            <li className="nav-item">
              <a
                href={"/privacy-policy"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-white/60 hover:text-white nav-lnk font-light transition duration-150"
              >
                นโยบายข้อมูลส่วนบุคคล
              </a>
            </li>
            <li className="nav-item">
              <a
                href={"/terms-of-service"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-white/60 hover:text-white nav-lnk font-light transition duration-150"
              >
                ข้อกำหนดในการใช้งาน
              </a>
            </li>
            {/* {CONTACT_LIST.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-base text-white/60 hover:text-white nav-lnk transition duration-150"
                >
                  {item.label}
                </a>
              </li>
            ))} */}
          </ul>


        </div>

        <div className="">
          <div className="flex gap-2 font-light text-center h-fit
            bg-linear-0 from-indigo-400 to-indigo-900
            justify-center py-4 hover:text-black duration-200
            rounded-xl w-fit px-8 items-center mt-3 ">
            <a target="_blank" href="/condo-loan-calculator" className="">โปรแกรมคำนวณวงเงินกู้</a>
          </div>

          {/* map */}

          <div className="w-full h-[250px] mt-2 rounded-xl border border-white/10 overflow-hidden">
            <iframe
              title="EasyHom1969 Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.138482337388!2d100.5421717!3d13.710061399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f0009938ce3%3A0x89a18b5485f8e905!2sHom%20Sleep%20Salon%20Sathorn%20Rama3!5e0!3m2!1sth!2sth!4v1766056782067!5m2!1sth!2sth"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>



      </div>

      {/* Bottom bar - Separated by a thin line of lighter green/white */}
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-400">
        © {currentYear} EASY HOM. 1969 CO., LTD. All rights reserved.
      </div>
    </footer>
  );
}