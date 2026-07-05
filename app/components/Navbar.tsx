
import { useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router'
import { MENU_APP } from '~/const/app'
import { BurgerButton, MobileDrawer } from './DrawerMenu';
import { FaFacebook, FaInstagram, FaLine, FaPhoneVolume } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

export default function Navbar() {

    const [isScrollDown, setIsScrollDown] = useState(false);
    const [open, setOpen] = useState(false);

    const { scrollY } = useScroll();

    useEffect(() => {
        return scrollY.on("change", (y) => {
            if (y > 300) {
                !isScrollDown && setIsScrollDown(true)
            } else {
                setIsScrollDown(false)
            }
        });
    }, [scrollY]);

    return (
        <div className="">
            <MobileDrawer
                open={open}
                onClose={() => setOpen(false)}
                menu={MENU_APP as any}
            />

            <header className={`w-full min-h-[58px] z-50 flex items-center flex-col
             fixed  duration-300 ${isScrollDown ? "bg-black  shadow" : ""} `}>
                <div className={`${isScrollDown ? "h-0  border-white/0" : "h-[40px] bg-black/30 border-white/50"} duration-300 overflow-hidden 
                     text-white font-light  w-full border-b opacity-70 `}>
                    <div className="max-w-6xl mx-auto mt-1 py-1 px-4 gap-2 flex items-center justify-end text-xl ">
                        <div className="text-sm">ช่องทางการติดต่อ</div>
                        <a href="https://www.facebook.com/easyhomm/" target='_blank'
                            className=' hover:text-white/70 '
                            referrerPolicy='no-referrer'>
                            <FaFacebook />
                        </a>
                        <a href="https://www.instagram.com/easyhom1969/" target='_blank'
                            className=' hover:text-white/70 '
                            referrerPolicy='no-referrer'>
                            <FaInstagram className='text-[22px]' />
                        </a>

                        <a href="mailto:easyhom1969@gmail.com" target='_blank'
                            className=' hover:text-white/70 '
                            referrerPolicy='no-referrer'>
                            <MdEmail className='text-[22px]' />
                        </a>

                        <a href="tel:0657479789" target='_blank'
                            className=' hover:text-white/70'
                            referrerPolicy='no-referrer'>
                            <FaPhoneVolume className='text-[18px]' />
                        </a>
                        <a href="https://line.me/ti/p/@easyhom1969" target='_blank'
                            className=' hover:text-white/70'
                            referrerPolicy='no-referrer'>
                            <FaLine className='text-[20px]' />
                        </a>
                    </div>
                </div>
                <nav className='mc-hd pt-2 container-x lg:grid lg:grid-cols-12 flex w-full justify-items-center items-center'>
                    {/* logo */}
                    <div className="h-[54px] aspect-square flex items-center gap-2">
                        <BurgerButton open={open} onClick={() => setOpen(!open)} />
                        <Link className='min-w-22 lg:p-2 p-5 pl-3' to="/">
                            <img
                                src="/logo/easyhomlogo.png"
                                alt="Easy Hom 1969 logo"
                                className='h-full w-full object-cover' />
                        </Link>
                    </div>
                    {/* menu */}
                    {/* menu */}
                    <div className="w-full justify-center text-[14px] 
                    nav-item text-white font-light lg:flex hidden gap-5 col-span-9">
                        {MENU_APP.map((item) => (
                            <div key={item.label} className="relative group py-3">
                                {/* Main NavLink */}
                                <NavLink
                                    to={item.href as any}
                                    className={({ isActive, isPending }) =>
                                        isPending
                                            ? "pending"
                                            : isActive
                                                ? "px-2 pb-3 nav-lnk-active"
                                                : "px-2 pb-3 nav-lnk mix-blend-difference"
                                    }
                                >
                                    {item.label}
                                </NavLink>

                                {/* Dropdown Sub-menu (Renders only if item has children) */}
                                {item.children && (
                                    <div className="absolute left-0 top-full mt-2 min-w-[280px] rounded-xl bg-neutral-950/90 backdrop-blur-2xl border border-white/15 p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.7)] opacity-0 invisible translate-y-3 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-[60]">

                                        {/* Subtle decorative top glow line */}
                                        <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                                        <div className="flex flex-col gap-1">
                                            {item.children.map((subItem) => (
                                                <NavLink
                                                    key={subItem.href}
                                                    to={subItem.href as any}
                                                    className={({ isActive }) => `
                        group/item flex flex-col justify-center px-4 py-3 rounded-lg transition-all duration-200 text-left
                        ${isActive
                                                            ? 'bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]'
                                                            : 'hover:bg-white/[0.06] active:scale-[0.99]'
                                                        }
                    `}
                                                >
                                                    {({ isActive }) => (
                                                        <>
                                                            {/* Sub-menu Title */}
                                                            <span className={`text-[14px] font-medium tracking-wide transition-colors duration-200 ${isActive ? 'text-white' : 'text-neutral-200 group-hover/item:text-white'
                                                                }`}>
                                                                {subItem.label}
                                                            </span>

                                                            {/* Descriptive Micro-copy (Dynamic descriptions based on URL) */}
                                                            <span className="text-[11px] text-neutral-400 mt-0.5 font-light group-hover/item:text-neutral-300 transition-colors duration-200">
                                                                {subItem.href === '/business-loan' && 'สำหรับผู้ประกอบการและบริษัทที่ต้องการเติบโต'}
                                                                {subItem.href === '/personal-loan' && 'วงเงินพร้อมใช้สำหรับพนักงานประจำและบุคคลทั่วไป'}
                                                            </span>
                                                        </>
                                                    )}
                                                </NavLink>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    {/* action buttons */}
                    {/* action buttons */}
                    <div className="flex items-center justify-end lg:col-span-2 col-span-1 ml-auto lg:ml-0">
                        <NavLink
                            className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 
            text-[13px] font-medium tracking-wide text-black bg-white 
            rounded-full transition-all duration-200 
            hover:bg-neutral-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
            active:scale-[0.97] select-none text-center
            md:px-6 md:py-2.5 md:text-[14px]"
                            to={"/#learnmore"}
                        >
                            {/* Subtle inner reflection ring for depth */}
                            <span className="absolute inset-0 rounded-full border border-white/20 pointer-events-none" />

                            <span className="relative z-10">สมัครเลย</span>
                        </NavLink>
                    </div>

                </nav>

            </header>
        </div>
    )
}
