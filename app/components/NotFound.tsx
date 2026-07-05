import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-neutral-950">
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-neutral-950 to-black/90" />
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #14962a 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[--primary-color] font-[300] text-lg md:text-xl tracking-[0.2em] uppercase mb-2">
            Easy Hom 1969
          </p>
          <h1 className="text-[120px] md:text-[180px] font-[200] text-white leading-none mb-4">
            404
          </h1>
          <div className="h-[2px] w-16 bg-[--primary-color] mx-auto mb-6" />
          <p className="text-white/60 text-lg md:text-xl font-[300] max-w-md mx-auto mb-10">
            ดูเหมือนว่าหน้าที่คุณกำลังมองหาจะไม่มีอยู่แล้ว <br />
            หรืออาจถูกย้ายไปที่อื่น
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            to="/"
            className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-[300] rounded-full py-3.5 px-10 transition-all duration-300 hover:bg-white hover:text-neutral-950"
          >
            กลับหน้าหลัก
            <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
