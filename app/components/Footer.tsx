import { Link } from "react-router";
import { APP_NAME, CONTACT_LIST, MENU_APP } from "~/const/app";

// Define the custom primary color
const PRIMARY_BG_COLOR = "#14962a"; 
const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    // Set the entire footer background to the primary color
    <footer className="bg-gradient-to-br from-[#14962a] to-[#0f4019] w-full">
      <div className="container-x px-6 py-12 grid gap-10 md:grid-cols-4 lg:grid-cols-5 text-white">
        
        {/* Brand - Focus on simple white text */}
        <div className="md:col-span-2">
          <h3 className="font-bold text-xl">{APP_NAME}</h3>
          <p className="text-sm text-gray-300 mt-3 leading-relaxed max-w-sm">
            เราเชื่อว่าบ้านที่ดีเริ่มต้นจากการบริการที่จริงใจ 
            EasyHom1969 พร้อมดูแลคุณทุกขั้นตอน
          </p>
        </div>

        {/* Menu */}
        <div>
          {/* Section headings are muted white/gray for contrast */}
          <h4 className="font-medium text-sm tracking-widest uppercase text-gray-200 mb-4">
            เมนูหลัก
          </h4>
          <ul className="space-y-3">
            {MENU_APP.map((item) => (
              <li key={item.href}>
                <Link
                  // Links are white, hover is a light, contrasting accent color (or a brightened version of the primary)
                  className="text-base text-white hover:text-green-300 transition duration-150"
                  to={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-2">
          <h4 className="font-medium text-sm tracking-widest uppercase text-gray-200 mb-4">
            ติดต่อเรา
          </h4>
          <ul className="space-y-3">
            {CONTACT_LIST.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-base text-white hover:text-green-300 transition duration-150"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar - Separated by a thin line of lighter green/white */}
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-400">
        © {currentYear} {APP_NAME}. All rights reserved.
      </div>
    </footer>
  );
}