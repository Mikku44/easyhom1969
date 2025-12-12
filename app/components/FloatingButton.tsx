import React, { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT_LIST } from "~/const/app";
import { LuMessageSquareQuote } from "react-icons/lu";

// You will need icons for this, I'll use placeholders but recommend using a library like react-icons
// Example: import { FiPhone, FiMail, FiMapPin, FiMessageSquare } from 'react-icons/fi';


// --- Framer Motion Variants ---
const containerVariants = {
  // Animation for the entire menu (hidden to visible)
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1 } 
  },
};

const itemVariants = {
  // Animation for individual buttons (slide up and fade in)
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  // Optional: Animation for when the menu closes (slide down and fade out)
  exit: { opacity: 0, y: 20 },
};

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const primaryColor = "#14962a"; // Your dark green color

  // Main button rotation animation
  const rotateAnimation = {
    rotate: isOpen ? 45 : 0, // Rotates the icon 45 degrees when open (e.g., a "+" becomes an "X")
  };

  return (
    // Fixed container to keep the button on the screen
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* 1. Expanded Menu of Contact Options */}
      {isOpen && (
        <motion.div
          className="mb-3 space-y-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden" // Use 'exit' if you are using AnimatePresence around this component
        >
          {CONTACT_LIST.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.href.startsWith('http') ? "_blank" : "_self"}
              rel={item.href.startsWith('http') ? "noopener noreferrer" : ""}
              variants={itemVariants}
              className="flex items-center p-3 rounded-lg shadow-lg text-sm bg-white hover:bg-gray-100 transition duration-150"
              style={{ color: primaryColor }} // Text color is green
            >
              {/* <span className="text-xl mr-3">{item.icon}</span> */}
              {item.label}
            </motion.a>
          ))}
        </motion.div>
      )}

      {/* 2. Main Floating Action Button (FAB) */}
      <motion.button
        className="w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white focus:outline-none transition duration-300 transform hover:scale-105"
        style={{ backgroundColor: primaryColor }} // Background is primary green
        onClick={() => setIsOpen(!isOpen)}
        // Rotate animation for the icon inside
        animate={rotateAnimation} 
        transition={{ duration: 0.2 }}
        aria-label={isOpen ? "Close contact menu" : "Open contact menu"}
      >
        {/* Simple "+" icon or a message icon */}
        <span className="text-3xl font-light">
          {/* For production, use an actual icon library */}
          {isOpen ? "✕" : <LuMessageSquareQuote />} 
        </span>
      </motion.button>
    </div>
  );
}