import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { loginWithEmail } from "~/lib/firebase/auth";
import { FaArrowRight } from "react-icons/fa6";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await loginWithEmail({ email, password, rememberMe });
    if (result.errorCode) {
      setError("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
      setLoading(false);
    } else {
      navigate("/admin/blog/list");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm px-4"
      >
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <div className="text-center mb-8">
            <p className="text-[--primary-color] font-[300] text-sm tracking-[0.2em] uppercase mb-1">
              Easy Hom 1969
            </p>
            <h1 className="text-gray-900 text-2xl font-[300]">Admin Login</h1>
            <div className="h-[2px] w-12 bg-[--primary-color] mx-auto mt-3" />
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-600 mb-4 text-sm bg-red-50 border border-red-200 p-3 rounded-lg text-center"
            >
              {error}
            </motion.p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-500 text-sm font-[300] mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 font-[300] focus:outline-none focus:border-[--primary-color] transition-colors"
                placeholder="admin@easyhom1969.com"
                required
              />
            </div>

            <div>
              <label className="block text-gray-500 text-sm font-[300] mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 font-[300] focus:outline-none focus:border-[--primary-color] transition-colors"
                placeholder="••••••••"
                required
              />
            </div>

            <label className="flex items-center gap-2.5 cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="sr-only"
                />
                <div
                  className={`w-4 h-4 rounded border transition-colors ${
                    rememberMe
                      ? "bg-[--primary-color] border-[--primary-color]"
                      : "border-gray-300 group-hover:border-gray-400"
                  }`}
                >
                  {rememberMe && (
                    <svg viewBox="0 0 16 16" className="w-4 h-4 text-white">
                      <path
                        d="M3 8l3 3 7-7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <span className="text-gray-400 text-sm font-[300] group-hover:text-gray-600 transition-colors">
                Remember me
              </span>
            </label>

            <button
              type="submit"
              disabled={loading}
              className="group w-full flex items-center justify-center gap-3 bg-gray-900 text-white font-[300] rounded-xl py-3 px-10 transition-all duration-300 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? "Signing in..." : "Sign In"}
              {!loading && (
                <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
