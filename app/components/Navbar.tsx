
import { useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router'
import { MENU_APP } from '~/const/app'
import { BurgerButton, MobileDrawer } from './DrawerMenu';
import { FaFacebook, FaInstagram, FaPhoneVolume } from 'react-icons/fa6';
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
             fixed  duration-300 ${isScrollDown ? "bg-black/80 backdrop-blur-2xl  shadow" : ""} `}>
                <div className={`${isScrollDown ? "h-0  border-white/0" : "h-[30px] bg-black/30 border-white/50"} duration-300 overflow-hidden 
                     text-white font-light  w-full border-b`}>
                    <div className="container-x py-1 px-4 gap-2 flex items-center justify-end text-xl ">
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
                            <FaPhoneVolume className='text-[18px]'/>
                        </a>
                    </div>
                </div>
                <nav className='mc-hd pt-2 container-x lg:grid lg:grid-cols-12 flex w-full justify-items-center items-center'>
                    {/* logo */}
                    <div className="h-[54px] aspect-square flex items-center gap-2">
                        <BurgerButton open={open} onClick={() => setOpen(!open)} />
                        <Link className='min-w-22' to="/">
                            <img
                                src="/logo/easyhomlogo.png"
                                alt="Easy Hom 1969 logo"
                                className='h-full w-full object-cover' />
                        </Link>
                    </div>
                    {/* menu */}
                    <div className=" w-full justify-center text-[14px] nav-item text-white
                    font-light lg:flex hidden gap-3 col-span-9">
                        {MENU_APP.map((item) =>
                            <NavLink to={item.href as any}
                                key={item.label}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "px-2 pb-3 nav-lnk-active" : "px-2 pb-3 nav-lnk mix-blend-difference "
                                }>
                                {item.label}
                            </NavLink>)}
                    </div>
                    {/* action buttons */}
                    <div className="grid place-items-end  col-span-2 w-full mix-blend-difference ">
                        <NavLink
                            className="btn"
                            to={"/#learnmore"}>
                            สมัครเลย
                        </NavLink>
                    </div>

                </nav>

            </header>
        </div>
    )
}
