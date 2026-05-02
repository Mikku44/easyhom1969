import { LucideLoader2 } from "lucide-react";
import { useState } from "react";
import { LuSendHorizontal } from "react-icons/lu";
import { Link } from "react-router";
import { toast } from "sonner";


export default function ApplicationForm({ className }: { className?: string }) {
  const [form, setForm] = useState({
    phone: "",
    job: "",
    salary: "",
    paymentStatus: "",
    firstName: "",
    lastName: "",
    email: "",
    coBorrower: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Submit failed");

      toast.success("ส่งข้อมูลเรียบร้อยแล้ว ทีมงานจะติดต่อกลับโดยเร็วที่สุด");
    } catch (error) {
      toast.error("เกิดข้อผิดพลาด กรุณาลองใหม่");
    } finally {
      setIsLoading(false);
    }
  };

  // Shared class for inputs
  const inputStyle = "w-full bg-slate-50 border border-slate-200 rounded-full px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-900/5 focus:border-slate-900 transition-all outline-none text-base";
  const labelStyle = "block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1";

  return (
    <form
      id="register-form"
      onSubmit={onSubmit}
      className={`
        ${className}
        max-w-2xl mx-auto
        bg-white p-8 sm:p-10
        shadow-[0_20px_50px_rgba(0,0,0,0.05)] 
        rounded-[2rem]
        border border-slate-100
      `}
    >
      <div className="mb-8 text-center sm:text-left">
        <h3 className="text-2xl font-bold text-slate-900">ลงทะเบียนรับคำปรึกษา</h3>
        <p className="text-slate-400 font-light mt-1 text-sm">กรุณากรอกข้อมูลให้ครบถ้วนเพื่อการประเมินที่แม่นยำ</p>
      </div>

      <div className="space-y-6">
        {/* Row 1: Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelStyle}>ชื่อ <span className="text-red-400">*</span></label>
            <input
              name="firstName"
              type="text"
              value={form.firstName}
              onChange={onChange}
              className={inputStyle}
              placeholder="ชื่อจริง"
              required
            />
          </div>
          <div>
            <label className={labelStyle}>นามสกุล <span className="text-red-400">*</span></label>
            <input
              name="lastName"
              type="text"
              value={form.lastName}
              onChange={onChange}
              className={inputStyle}
              placeholder="นามสกุล"
              required
            />
          </div>
        </div>

        {/* Row 2: Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelStyle}>เบอร์โทรศัพท์ <span className="text-red-400">*</span></label>
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={onChange}
              className={inputStyle}
              placeholder="08X-XXX-XXXX"
              required
            />
          </div>
          <div>
            <label className={labelStyle}>อีเมล</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              className={inputStyle}
              placeholder="email@example.com"
            />
          </div>
        </div>

        {/* Row 3: Career Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelStyle}>อาชีพปัจจุบัน <span className="text-red-400">*</span></label>
            <div className="relative">
              <select name="job" value={form.job} onChange={onChange} className={inputStyle} required>
                <option value="">เลือกอาชีพ</option>
                <option value="พนักงานประจำ">พนักงานประจำ</option>
                <option value="เจ้าของกิจการ">เจ้าของกิจการ</option>
              </select>
            </div>
          </div>
          <div>
            <label className={labelStyle}>
              {form.job === "เจ้าของกิจการ" ? "รายได้หมุนเวียน/เดือน" : "รายได้รวมในสลิป"} <span className="text-red-400">*</span>
            </label>
            <input
              name="salary"
              type="number"
              value={form.salary}
              onChange={onChange}
              className={inputStyle}
              placeholder="0.00"
              required
            />
          </div>
        </div>

        {/* Full Row: Credit Status */}
        <div>
          <label className={labelStyle}>สถานะการชำระหนี้ในปัจจุบัน <span className="text-red-400">*</span></label>
          <select name="paymentStatus" value={form.paymentStatus} onChange={onChange} className={inputStyle} required>
            <option value="">เลือกสถานะ</option>
            <option value="ภาระหนี้ ชำระปกติ ไม่มีล่าช้า">ชำระปกติ (ไม่มีล่าช้า)</option>
            <option value="ปัจจุบัน มีค้างชำระ แต่ไม่เกิน 3 เดือน">ค้างชำระ (ไม่เกิน 3 เดือน)</option>
            <option value="เคยค้างชำระ แต่ชำระเป็นปกติแล้ว">เคยค้างชำระ (ปัจจุบันปกติแล้ว)</option>
            <option value="อื่นๆ">อื่นๆ</option>
          </select>
        </div>

        {/* Co-borrower */}
        <div>
          <label className={labelStyle}>ความต้องการกู้ร่วม <span className="text-red-400">*</span></label>
          <div className="grid grid-cols-2 gap-4">
             <button
                type="button"
                onClick={() => setForm(f => ({...f, coBorrower: 'yes'}))}
                className={`py-3 rounded-full border text-sm transition-all ${form.coBorrower === 'yes' ? 'bg-slate-900 text-white border-slate-900' : 'bg-transparent border-slate-200 text-slate-500 hover:border-slate-400'}`}
             >มีผู้กู้ร่วม</button>
             <button
                type="button"
                onClick={() => setForm(f => ({...f, coBorrower: 'no'}))}
                className={`py-3 rounded-full border text-sm transition-all ${form.coBorrower === 'no' ? 'bg-slate-900 text-white border-slate-900' : 'bg-transparent border-slate-200 text-slate-500 hover:border-slate-400'}`}
             >ไม่มีผู้กู้ร่วม</button>
          </div>
        </div>

        {/* Privacy Info */}
        <div className="bg-slate-50 p-4 rounded-full">
            <p className="text-[11px] text-slate-500 leading-relaxed text-center">
              ข้อมูลของคุณจะถูกเก็บเป็นความลับตาม 
              <Link to="/privacy-policy" className="text-slate-900 font-bold hover:underline ml-1">
                นโยบายความเป็นส่วนตัว
              </Link>
              และใช้เพื่อวัตถุประสงค์ในการประเมินสินเชื่อเท่านั้น
            </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="group relative w-full bg-slate-900 text-white rounded-full py-4 text-base font-medium overflow-hidden transition-all hover:bg-black active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none"
        >
          <div className="relative z-10 flex items-center justify-center gap-2">
            {isLoading ? (
              <LucideLoader2 className="animate-spin text-xl" />
            ) : (
              <>
                <span>ส่งข้อมูลลงทะเบียน</span>
                <LuSendHorizontal className="text-lg group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </div>
        </button>
      </div>
    </form>
  );
}