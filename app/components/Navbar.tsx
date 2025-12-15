
import { useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router'
import { MENU_APP } from '~/const/app'

export default function Navbar() {

    const [isScrollDown, setIsScrollDown] = useState(false);

    const { scrollY } = useScroll();

    useEffect(() => {
        return scrollY.on("change", (y) => {
            if (y > 300) {
                !isScrollDown && setIsScrollDown(true)
            }else {
                setIsScrollDown(false)
            }
        });
    }, [scrollY]);

    return (
        <header className={`w-full min-h-[58px] z-10 flex items-center
         fixed py-2 duration-300 ${ isScrollDown ? "bg-black/80 backdrop-blur-2xl h-[80px] shadow" : "h-[60px]"} `}>
            <nav className='mc-hd container-x lg:grid lg:grid-cols-12 flex  w-full justify-items-center items-center'>
                {/* logo */}
                <div className="h-[54px] aspect-square">
                    <img
                        src="/logo/logo.jpg"
                        alt="Easy Hom 1969 logo"
                        className='h-full w-full object-cover' />
                </div>
                {/* menu */}
                <div className=" w-full justify-center text-[14px] nav-item text-white 
                font-light lg:flex hidden gap-3 col-span-9">
                    {MENU_APP.map((item) =>
                        <NavLink to={item.href}
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
                        to={"#"}>
                        สมัครเลย
                    </NavLink>
                </div>
            </nav>
        </header>
    )
}
