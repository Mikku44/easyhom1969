import type { Route } from "./+types/home";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Easy hom 1969 - Qualifications" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
interface QualificationItem {
  title: string;
  description: string;
}

interface QualificationGroup {
  img: string,
  group: string;
  subtitle: string;
  items: QualificationItem[];
  highlight: string;
}

const QUALIFICATION_GROUPS: QualificationGroup[] = [
  {
    img: "/images/banner (2).jpg",
    group: "พนักงานประจำ",
    subtitle: "เหมาะสำหรับผู้ที่ต้องการเงินก้อนเพื่อปิดหนี้ ลดภาระผ่อนรายเดือน",
    highlight: "เงินทอนโดยทั่วไปประมาณ 300,000 – 1,000,000 บาท",
    items: [
      {
        title: "รายได้ต่อเดือน",
        description:
          "สลิปเงินเดือนตั้งแต่ 30,000 บาทขึ้นไป สามารถกู้ร่วมกับคู่สมรสหรือบุคคลในครอบครัวได้",
      },
      {
        title: "เอกสารรายได้",
        description:
          "มีสลิปเงินเดือน หรือหนังสือรับรองเงินเดือนจากบริษัท",
      },
      {
        title: "อายุงาน",
        description:
          "อายุงานตั้งแต่ 6 เดือนขึ้นไป กรณีเปลี่ยนงานแต่ยังอยู่ในสายอาชีพเดียวกันสามารถประเมินเป็นกรณีพิเศษได้",
      },
      {
        title: "วัตถุประสงค์ในการกู้",
        description:
          "นำเงินไปปิดหนี้ผ่อนหลายทาง รวมภาระหนี้ให้เหลือก้อนเดียว",
      },
    ],
  },
  {
    img: "/images/banner (3).jpg",
    group: "เจ้าของธุรกิจ",
    subtitle: "เหมาะสำหรับผู้ประกอบการที่ต้องการเสริมสภาพคล่องและขยายธุรกิจ",
    highlight: "บางเคสสามารถทอนเงินได้สูงถึง 10 – 20 ล้านบาท",
    items: [
      {
        title: "สถานะธุรกิจ",
        description:
          "เป็นเจ้าของกิจการ ผู้ประกอบการ หรือฟรีแลนซ์ ที่มีรายได้สม่ำเสมอ",
      },
      {
        title: "เอกสารทางการเงิน",
        description:
          "มีเอกสารแสดงรายได้ เช่น Statement, ภ.พ.30, ภ.ง.ด. หรือเอกสารที่ธนาคารรับรอง",
      },
      {
        title: "วัตถุประสงค์ในการกู้",
        description:
          "นำเงินไปเสริมสภาพคล่อง ลงทุนต่อ หรือปรับโครงสร้างทางการเงินของธุรกิจ",
      },
      {
        title: "ประวัติทางการเงิน",
        description:
          "มีประวัติดี แม้ภาระหนี้สูงหรือยื่นแบงก์เองไม่ผ่าน ทีมงานช่วยวิเคราะห์และแก้เคสให้",
      },
    ],
  },
];

export default function QualificationSection() {
  return (
    <main>
      <section className="h-[500px] overflow-hidden rounde-3xl">
        <img src="https://cdn.prod.website-files.com/64805be211766565d95bb26a/6627616200652854524fc15c_190809_Scene001-p-2000.jpg"

          className="h-full w-full object-cover" alt="hero image qualicication" />
      </section>
      <section className="max-w-5xl mx-auto px-4 py-24">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900">
            คุณสมบัติเบื้องต้นผู้สมัคร
          </h2>
          <p className="mt-4 text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            สำหรับผู้ที่ต้องการกู้บ้านเงินเหลือ คอนโดเงินเหลือ
            หรือซื้อบ้านปิดหนี้ให้ก่อน EasyHom1969
            เราช่วยประเมินความสามารถในการกู้และวางแผนให้เหมาะกับแต่ละกลุ่ม
          </p>
        </div>
        {/* Groups */}
        <div className="grid md:grid-cols-2 gap-10">
          {QUALIFICATION_GROUPS.map((group, index) => (
            <div
              key={index}
              className="rounded-3xl border border-neutral-200 p-8"
            >
              <div className="overflow-hidden rounded-xl mb-4">
                <img src={group.img} alt={group.group} />
              </div>
              <h3 className="text-2xl font-semibold text-neutral-800">
                {group.group}
              </h3>
              <p className="mt-2 text-neutral-600">
                {group.subtitle}
              </p>
              <div className="mt-4 rounded-xl bg-neutral-50 px-4 py-3 text-sm text-neutral-700">
                {group.highlight}
              </div>
              <ul className="mt-6 space-y-4">
                {group.items.map((item, i) => (
                  <li key={i}>
                    <p className="font-medium text-neutral-800">
                      {item.title}
                    </p>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-neutral-700 font-medium">
            ประเมินวงเงินเบื้องต้น รู้ผลภายใน 24 ชั่วโมง*
          </p>
          <p className="mt-2 text-sm text-neutral-500">
            ใช้เอกสารเพียงเครดิตบูโร และเอกสารรายได้
            (*ขึ้นอยู่กับความครบถ้วนของเอกสาร)
          </p>
          <button
            className="mt-8 rounded-full bg-neutral-900 px-10 py-3 text-white
                       hover:bg-neutral-800 transition"
          >
            ประเมินวงเงินฟรี
          </button>
        </div>
      </section>
    </main>
  );
}