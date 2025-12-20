import { useState } from "react";
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Submit failed");
      }

      const result = await res.json();
      console.log("Success:", result);

      toast.success("ส่งข้อมูลเรียบร้อยแล้ว");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("เกิดข้อผิดพลาด กรุณาลองใหม่");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      id="register-form"
      onSubmit={onSubmit}
      className={`
    ${className}
    max-w-2xl mx-auto space-y-6
    bg-white p-5 sm:p-6
    shadow rounded-3xl
    border border-zinc-300
  `}
    >
      {/* Phone + Job */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            เบอร์โทร <span className="text-red-500">*</span>
          </label>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={onChange}
            className="w-full border border-zinc-300 rounded-full px-4 py-3 text-base"
            placeholder="เบอร์โทร"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            อาชีพ <span className="text-red-500">*</span>
          </label>
          <select
            name="job"
            value={form.job}
            onChange={onChange}
            className="w-full border border-zinc-300 rounded-full px-4 py-3 text-base"
            required
          >
            <option value="">-- เลือกอาชีพ --</option>
            <option value="พนักงานประจำ">พนักงานประจำ</option>
            <option value="เจ้าของกิจการ">เจ้าของกิจการ</option>
          </select>
        </div>
      </div>

      {/* Salary + Payment Status */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            {form.job === "เจ้าของกิจการ"
              ? "เงินหมุนเวียนบัญชีต่อเดือนเท่าไหร่"
              : "เงินเดือน รับรวมในสลิป เท่าไหร่"}{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            name="salary"
            type="number"
            value={form.salary}
            onChange={onChange}
            className="w-full border border-zinc-300 rounded-full px-4 py-3 text-base"
            placeholder={
              form.job === "เจ้าของกิจการ"
                ? "เงินหมุนเวียนบัญชีต่อเดือน"
                : "เงินเดือน"
            }
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            สถานะการชำระ <span className="text-red-500">*</span>
          </label>
          <select
            name="paymentStatus"
            value={form.paymentStatus}
            onChange={onChange}
            className="w-full border border-zinc-300 rounded-full px-4 py-3 text-base"
            required
          >
            <option value="">-- เลือกสถานะ --</option>
            <option value="ภาระหนี้ ชำระปกติ ไม่มีล่าช้า">ภาระหนี้ ชำระปกติ ไม่มีล่าช้า</option>
            <option value="ปัจจุบัน มีค้างชำระ แต่ไม่เกิน 3 เดือน">ปัจจุบัน มีค้างชำระ แต่ไม่เกิน 3 เดือน</option>
            <option value="ปัจจุบัน มีค้างชำระ เกิน 3 เดือน">ปัจจุบัน มีค้างชำระ เกิน 3 เดือน</option>
            <option value="เคยค้างชำระ แต่ชำระเป็นปกติแล้ว">เคยค้างชำระ แต่ชำระเป็นปกติแล้ว</option>
            <option value="กำลังปรับโครงสร้างหนี้">กำลังปรับโครงสร้างหนี้</option>
            <option value="ถูกฟ้อง กำลังชำระปิด">ถูกฟ้อง กำลังชำระปิด</option>
            <option value="เคยถูกฟ้อง ปิดแล้ว ยังไม่เกิน 3 ปี">เคยถูกฟ้อง ปิดแล้ว ยังไม่เกิน 3 ปี</option>
            <option value="เคยถูกฟ้อง ปิดแล้ว เกิน 3 ปี">เคยถูกฟ้อง ปิดแล้ว เกิน 3 ปี</option>
            <option value="อื่นๆ">อื่นๆ</option>
          </select>
        </div>
      </div>

      {/* Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            ชื่อ <span className="text-red-500">*</span>
          </label>
          <input
            name="firstName"
            type="text"
            value={form.firstName}
            onChange={onChange}
            className="w-full border border-zinc-300 rounded-full px-4 py-3 text-base"
            placeholder="ชื่อ"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            นามสกุล <span className="text-red-500">*</span>
          </label>
          <input
            name="lastName"
            type="text"
            value={form.lastName}
            onChange={onChange}
            className="w-full border border-zinc-300 rounded-full px-4 py-3 text-base"
            placeholder="นามสกุล"
            required
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-1">อีเมล์</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={onChange}
          className="w-full border border-zinc-300 rounded-full px-4 py-3 text-base"
          placeholder="อีเมล์"
        />
      </div>

      {/* Co-borrower */}
      <div>
        <label className="block text-sm font-medium mb-1">
          มีกู้ร่วมหรือไม่ <span className="text-red-500">*</span>
        </label>
        <select
          name="coBorrower"
          value={form.coBorrower}
          onChange={onChange}
          className="w-full border border-zinc-300 rounded-full px-4 py-3 text-base"
          required
        >
          <option value="">-- เลือกคำตอบ --</option>
          <option value="yes">มี</option>
          <option value="no">ไม่มี</option>
        </select>
      </div>

      {/* Privacy */}
      <p className="text-sm text-zinc-600 leading-relaxed">
        การใช้ข้อมูลเป็นไปตามนโยบายวัตถุประสงค์ในการเก็บข้อมูลส่วนบุคคลของบริษัทฯ
        ตาม
        <Link to="/privacy-policy" className="underline text-amber-500 ml-1">
          เงื่อนไขความเป็นส่วนตัว
        </Link>
      </p>

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className={`
      w-full rounded-full py-3 text-base text-white
      transition
      ${isLoading ? "bg-zinc-800" : "bg-black hover:bg-zinc-800"}
    `}
      >
        {isLoading ? "กำลังทำรายการ..." : "ส่งข้อมูล"}
      </button>
    </form>

  );
}
