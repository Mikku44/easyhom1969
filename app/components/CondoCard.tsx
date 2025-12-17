import { motion } from 'framer-motion';

interface CondoCardProps {
    id : number;
    title : string;
    image : string;
    description : string;
    price : string;
    location : string;
}

export default function CondoCard(
 {
    image,
    title,
    description,
    price,
    location
 } : CondoCardProps
) {
    return (
        <div className='w-full border  border-zinc-200 rounded-md min-h-[350px] group grid gap-5 md:grid-cols-2'>
            <section className="flex flex-col justify-between px-5 py-10 ">
                <div className="">
                    <div className="  overflow-clip mb-4">
                        <motion.div
                            initial={{
                                y: 18, opacity: 0
                            }}
                            whileInView={{
                                y: 0, opacity: 1
                            }}
                            transition={{
                                duration: 0.4
                            }}
                            className="text-2xl line-clamp-2 ">{title || "ไม่มีหัวข้อ"}
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{
                            y: -18, opacity: 0
                        }}
                        whileInView={{
                            y: 0, opacity: 1
                        }}
                        transition={{
                            duration: 0.4
                        }}
                        className=" italic font-[300] line-clamp-3">{description || "ไม่มีคำอธิบาย"}
                    </motion.div>
                </div>

                {/* bottom */}
                <div className="">
                    <div className="text-xl  font-[300]">
                        {price || "ไม่ระบุราคา"}
                    </div>
                    <div className="text-sm text-black/80 font-[300]">
                        {location || "ไม่ระบุสถานที่"}
                    </div>
                </div>
            </section>

            {/* Images */}

            <div className="bg-black h-full w-full overflow-hidden">
                <img
                    className='w-full h-full object-cover group-hover:scale-110 duration-200'
                    src={image || "https://condonayoo.com/wp-content/uploads/2019/08/The-Cube-Loft-Srinakarin-Theparak-1.jpg"}
                    alt="condo" />
            </div>

            {/* <div className="grid grid-cols-2 justify-items-end gap-2">
                <div className="bg-black h-[150px] md:w-2/3">
                    <img
                        className='w-full h-full object-cover'
                        src="/images/The-Cube-Loft-Srinakarin-Theparak_019.jpg"
                        alt="condo" />
                </div>
                <div className="bg-black h-[250px] w-full">
                    <img
                        className='w-full h-full object-cover'
                        src="https://condonayoo.com/wp-content/uploads/2019/08/The-Cube-Loft-Srinakarin-Theparak-1.jpg"
                        alt="condo" />
                </div>
            </div> */}
        </div>
    )
}
