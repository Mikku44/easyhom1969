import { useState } from "react";
import { Link } from "react-router";

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

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <form
      id="register-form"
      onSubmit={onSubmit}
      className={`${className} max-w-2xl mx-auto space-y-6 bg-white p-6 shadow rounded-3xl border border-zinc-300`}
    >
      <div className="grid grid-cols-2 gap-2">

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium mb-1">
            เบอร์โทร <span className="text-red-500">*</span>
          </label>
          <input
            name="phone"
            type="text"
            value={form.phone}
            onChange={onChange}
            className="w-full border border-zinc-300 rounded-full px-3 py-2"
            placeholder="เบอร์โทร"
            required
          />
        </div>
        {/* Job */}
        <div>
          <label className="block text-sm font-medium mb-1">
            อาชีพ <span className="text-red-500">*</span>
          </label>
          {/* <input
            name="job"
            type="text"
            value={form.job}
            onChange={onChange}
            className="w-full border border-zinc-300 rounded-full px-3 py-2"
            placeholder="อาชีพ"
            required
          /> */}
          <select
            name="job"
            value={form.job}
            onChange={onChange}
            className="w-full border border-zinc-300 rounded-full px-3 py-2"
            required
          >
            <option value="">-- เลือกอาชีพ --</option>
            <option value="พนักงานประจำ">พนักงานประจำ</option>
            <option value="เจ้าของกิจการ">เจ้าของกิจการ</option>

          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {/* Salary */}
        <div>
          <label className="block text-sm font-medium mb-1">
            {form.job == "เจ้าของกิจการ" ?
              "เงินหมุนเวียนบัญชีต่อเดือนเท่าไหร่"
              : "เงินเดือน รับรวมในสลิป เท่าไหร่"} <span className="text-red-500">*</span>
          </label>
          <input

            name="salary"
            type="number"
            value={form.salary}
            onChange={onChange}
            className="w-full border border-zinc-300 rounded-full px-3 py-2"
            placeholder={form.job == "เจ้าของกิจการ" ?
              "เงินหมุนเวียนบัญชีต่อเดือน"
              : "เงินเดือน "}
            required
          />
        </div>
        {/* Payment Status */}
        <div>
          <label className="block text-sm font-medium mb-1">
            สถานะการชำระ <span className="text-red-500">*</span>
          </label>
          <select
            name="paymentStatus"
            value={form.paymentStatus}
            onChange={onChange}
            className="w-full border border-zinc-300 rounded-full px-3 py-2"
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

      {/* First Name */}
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block text-sm font-medium mb-1">
            ชื่อ <span className="text-red-500">*</span>
          </label>
          <input
            name="firstName"
            type="text"
            value={form.firstName}
            onChange={onChange}
            className="w-full border border-zinc-300 rounded-full px-3 py-2"
            placeholder="ชื่อ"
            required
          />
        </div>
        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            นามสกุล <span className="text-red-500">*</span>
          </label>
          <input
            name="lastName"
            type="text"
            value={form.lastName}
            onChange={onChange}
            className="w-full border border-zinc-300 rounded-full px-3 py-2"
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
          className="w-full border border-zinc-300 rounded-full px-3 py-2"
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
          className="w-full border border-zinc-300 rounded-full px-3 py-2"
          required
        >
          <option value="">-- เลือกคำตอบ --</option>
          <option value="yes">มี</option>
          <option value="no">ไม่มี</option>
        </select>
      </div>


      <div className="">
        การใช้ข้อมูลเป็นไปตามนโยบายวัตถุประสงค์ในการเก็บข้อมูลส่วนบุคคลของบริษัทฯ ตาม<Link
          className="underline text-amber-500"
          to="/privacy-policy">เงื่อนไขความเป็นส่วนตัว</Link>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded-full hover:bg-gray-800"
      >
        ส่งข้อมูล
      </button>
    </form>
  );
}
