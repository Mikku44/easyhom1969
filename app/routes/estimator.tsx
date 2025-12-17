"use client";

import { useState } from "react";

import { Calculator } from "lucide-react";

export default function CondoLoanCalculatorPage() {
  const [income, setIncome] = useState(30000);
  const [debt, setDebt] = useState(0);
  const [rate, setRate] = useState(40);

  const maxInstallment = (income * rate) / 100 - debt;
  const estimatedLoan = maxInstallment * 140; // approx 30 yrs

  return (
    <main className="min-h-[130vh] overflow-hidden  bg-gray-50 flex items-center justify-center p-6 relative">
        <img src="/images/hero.jpg"
        className="absolute h-full object-cover brightness-75 z-0"
        alt="background image" />
      <section className="relative z-1 bg-white w-full max-w-xl rounded-2xl shadow-lg">
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5" />
            <h1 className="text-xl font-semibold">ประเมินวงเงินกู้ซื้อคอนโด</h1>
          </div>

          <div className="space-y-2">
            <label className="text-sm">รายได้ต่อเดือน (บาท)</label>
            <input className="input"  type="number" value={income} onChange={(e) => setIncome(+e.target.value)} />
          </div>

          <div className="space-y-2">
            <label className="text-sm">ภาระหนี้ต่อเดือน (บาท)</label>
            <input className="input"  type="number" value={debt} onChange={(e) => setDebt(+e.target.value)} />
          </div>

          <div className="space-y-2">
            <label className="text-sm">สัดส่วนผ่อนที่ธนาคารรับได้ (%)</label>
            <input className="input"  type="number" value={rate} onChange={(e) => setRate(+e.target.value)} />
          </div>

          <div className="bg-gray-100 rounded-xl p-4 space-y-2">
            <p className="text-sm">ค่างวดที่ผ่อนได้สูงสุด</p>
            <p className="text-2xl font-bold text-green-600">
              {maxInstallment > 0 ? maxInstallment.toLocaleString() : 0} บาท / เดือน
            </p>

            <p className="text-sm mt-4">วงเงินกู้โดยประมาณ (ผ่อน 30 ปี)</p>
            <p className="text-xl font-semibold">
              {estimatedLoan > 0 ? estimatedLoan.toLocaleString() : 0} บาท
            </p>
          </div>

          <button className="w-full  bg-zinc-900 rounded-full text-white py-3  ">คำนวณใหม่</button>

          <p className="text-xs text-gray-500">
            * เป็นการประเมินเบื้องต้น วงเงินจริงขึ้นอยู่กับการพิจารณาของธนาคาร
          </p>
        </div>
      </section>
    </main>
  );
}
