import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT_LIST } from "~/const/app";
import { LuPlus } from "react-icons/lu";

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const menuRef = useRef(null);
  const primaryColor = "#14962a";

  // --- Close when clicking outside ---
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end" ref={menuRef}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            className="flex flex-col gap-4 mb-4"
          >
            {CONTACT_LIST.map((item, index) => (
              <div key={index} className="flex items-center gap-3 justify-end">
                {/* Tooltip: Only visible when the specific icon is hovered */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.span
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className="text-xs font-medium bg-slate-800 text-white px-2 py-1 rounded shadow-sm whitespace-nowrap"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>

                <motion.a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{ scale: 1.1 }}
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-white shadow-lg text-slate-600 hover:text-[#06C755] border border-slate-100 transition-colors"
                >
                  <item.icon size={20} />
                </motion.a>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
        animate={{ 
            backgroundColor: isOpen ? "#ffffff" : primaryColor,
            boxShadow: isOpen ? "0 10px 15px -3px rgba(0,0,0,0.1)" : "0 20px 25px -5px rgba(0,0,0,0.2)"
        }}
        className="w-14 h-14 rounded-full flex items-center justify-center transition-colors border-none"
      >
        <motion.div animate={{ rotate: isOpen ? 135 : 0 }} className={isOpen ? "text-slate-500" : "text-white"}>
          <LuPlus size={28} />
        </motion.div>
      </motion.button>
    </div>
  );
}