
import { NavLink } from 'react-router'
import { MENU_APP } from '~/const/app'

export default function Navbar() {


    return (
        <header className='w-full min-h-[58px] z-10 fixed py-2 bg-white/20 backdrop-blur-2xl'>
            <nav className='mc-hd container-x lg:grid lg:grid-cols-12 flex justify-items-center items-center'>
                {/* logo */}
                <div className="h-[54px] aspect-square">
                    <img
                        src="/logo/logo.jpg"
                        alt="Easy Hom 1969 logo"
                        className='h-full w-full object-cover' />
                </div>
                {/* menu */}
                <div className=" w-full justify-center text-[14px] nav-item text-white mix-blend-difference 
                font-light lg:flex hidden gap-3 col-span-9">
                    {MENU_APP.map((item) =>
                        <NavLink to={item.href}
                            key={item.label}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "px-2 pb-3 nav-lnk-active" : "px-2 pb-3 nav-lnk "
                            }>
                            {item.label}
                        </NavLink>)}
                </div>
                {/* action buttons */}
                <div className="grid place-items-end  col-span-2 w-full">
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
