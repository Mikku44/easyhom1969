import { NavLink } from "react-router";
import { useEffect, useState } from "react";
import { RiMenu2Fill, RiArrowDownSLine } from "react-icons/ri";

interface MenuItem {
    label: string;
    href: string;
    children?: { label: string; href: string }[];
}

interface MobileDrawerProps {
    open: boolean;
    onClose: () => void;
    menu: MenuItem[];
}

export function MobileDrawer({ open, onClose, menu }: MobileDrawerProps) {
    // Keep track of which menu items are expanded on mobile
    const [expandedItem, setExpandedItem] = useState<string | null>(null);

    // Lock body scroll when drawer is open
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    // Reset expanded states when menu is closed
    useEffect(() => {
        if (!open) setExpandedItem(null);
    }, [open]);

    const toggleExpand = (label: string) => {
        setExpandedItem(expandedItem === label ? null : label);
    };

    return (
        <>
            {/* Overlay */}
            <div
                onClick={onClose}
                className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm transition-opacity duration-300
                    ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
            />

            {/* Drawer */}
            <aside
                className={`fixed left-0 top-0 z-[101] h-full w-[85%] max-w-xs
                    bg-neutral-950 border-r border-white/10 p-6 shadow-2xl transition-transform duration-300 ease-out
                    ${open ? "translate-x-0" : "-translate-x-full"}`}
            >
                <nav className="mt-16 flex flex-col space-y-1">
                    {menu.map((item) => {
                        const hasChildren = item.children && item.children.length > 0;
                        const isExpanded = expandedItem === item.label;

                        return (
                            <div key={item.label} className="flex flex-col">
                                {hasChildren ? (
                                    /* Parent Link Item with Dropdown Indicator */
                                    <button
                                        onClick={() => toggleExpand(item.label)}
                                        className={`flex items-center justify-between w-full px-3 py-3 text-base font-medium tracking-wide rounded-lg transition-colors text-left
                                            ${isExpanded ? "text-white bg-white/5" : "text-neutral-400 active:bg-white/5"}`}
                                    >
                                        <span>{item.label}</span>
                                        <RiArrowDownSLine 
                                            className={`size-5 text-neutral-500 transition-transform duration-200 
                                                ${isExpanded ? "rotate-180 text-white" : ""}`} 
                                        />
                                    </button>
                                ) : (
                                    /* Normal Nav Link */
                                    <NavLink
                                        to={item.href}
                                        onClick={onClose}
                                        className={({ isActive }) => `
                                            block px-3 py-3 text-base font-medium tracking-wide rounded-lg transition-colors
                                            ${isActive ? "text-white bg-white/10 font-semibold" : "text-neutral-400 active:bg-white/5"}
                                        `}
                                    >
                                        {item.label}
                                    </NavLink>
                                )}

                                {/* Collapsible Mobile Submenu Area */}
                                {hasChildren && (
                                    <div 
                                        className={`grid transition-all duration-200 ease-in-out pl-4 ml-2 border-l border-white/10
                                            ${isExpanded ? "grid-rows-[1fr] opacity-100 mt-1 mb-2" : "grid-rows-[0fr] opacity-0 pointer-events-none"}`}
                                    >
                                        <div className="overflow-hidden flex flex-col gap-1">
                                            {item.children!.map((subItem) => (
                                                <NavLink
                                                    key={subItem.href}
                                                    to={subItem.href}
                                                    onClick={onClose}
                                                    className={({ isActive }) => `
                                                        block px-3 py-2.5 text-[14px] font-normal rounded-md transition-colors
                                                        ${isActive ? "text-white bg-white/10" : "text-neutral-500 active:text-neutral-300"}
                                                    `}
                                                >
                                                    {subItem.label}
                                                </NavLink>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </nav>
            </aside>
        </>
    );
}

interface BurgerButtonProps {
    open: boolean;
    onClick: () => void;
}

export function BurgerButton({ open, onClick }: BurgerButtonProps) {
    return (
        <button
            onClick={onClick}
            aria-label="Toggle menu"
            className="relative z-50 flex text-white h-10 w-10 items-center justify-center lg:hidden active:scale-95 transition-transform"
        >
            <RiMenu2Fill className="size-7" />
        </button>
    );
}