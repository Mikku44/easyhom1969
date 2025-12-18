import type { ActionFunctionArgs } from "react-router";
import { registrationService } from "~/services/registrationService";

export async function action({ request }: ActionFunctionArgs) {
    const data = await request.json();

    // สร้างข้อความส่ง LINE
    const message = `
    มีผู้กรอกแบบฟอร์มใหม่
    ชื่อ: ${data.firstName} ${data.lastName}
    โทร: ${data.phone}
    อาชีพ: ${data.job}
    รายได้: ${data.salary}
    สถานะหนี้: ${data.paymentStatus}
    กู้ร่วม: ${data.coBorrower}
    อีเมล: ${data.email || "-"}`;

    await registrationService.create({
        phone: data.phone,
        job: data.job,
        salary: data.salary,
        paymentStatus: data.paymentStatus,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        coBorrower: data.coBorrower,
    });

    return await sendLineMessage(message);

}


async function sendLineMessage(message: string) {
    const CHANNEL_ACCESS_TOKEN = process.env.CHANNEL_ACCESS_TOKEN!;
    const USER_ID = "C39efd2c4400664ff0189c5c318267c57"

    const result = await fetch("https://api.line.me/v2/bot/message/push", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${CHANNEL_ACCESS_TOKEN}`,
            "Content-Type": "application/json",

        },
        body: JSON.stringify({
            to: USER_ID,
            messages: [
                {
                    type: "text",
                    text: message,
                },
            ],
        }),
    });

    return result
}
