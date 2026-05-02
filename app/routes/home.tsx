import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
import { Link, NavLink, useLoaderData } from "react-router";
import type { Route } from "./+types/home";
import { motion } from 'framer-motion';
import CondoCard from "~/components/CondoCard";
import ApplicationForm from "~/components/ApplicationForm";
import FAQSection from "~/components/FaQ";
import StepSection from "~/components/StepSection";
import WhyChooseUsSection from "~/components/WhyUs";
import BlogCard from "~/components/BlogCard";
import { blogService } from "~/services/blogService";
import { ChevronRight } from "lucide-react";
import { HIGHLIGHT_PROJECTS } from "~/const/app";
import HorizontalSwiper from "~/components/HorizontalSwiper";

export function meta({ }: Route.MetaArgs) {
  return [
    {
      title:
        "กู้บ้านเงินเหลือ คอนโดเงินเหลือ | EasyHom1969 เสริมสภาพคล่องครบวงจร",
    },
    {
      name: "description",
      content:
        "ประเมินกู้บ้านเงินเหลือ กู้คอนโดเงินเหลือ ฟรี บริการซื้อบ้านปิดหนี้ แถมเงินเหลือ และคอนโดการันตีผู้เช่า One Stop Service สำหรับพนักงานเงินเดือนและเจ้าของธุรกิจ",
    },

    {
      property: "og:title",
      content: "EasyHom1969 | กู้บ้านเงินเหลือ–คอนโดเงินเหลือ ครบจบที่เดียว",
    },
    {
      property: "og:description",
      content:
        "บริการกู้บ้านเงินเหลือ กู้คอนโดเงินเหลือ ซื้อบ้านปิดหนี้ พร้อมเงินเหลือ และคอนโดการันตีผู้เช่า ดูแลครบจบที่เดียว",
    },
    {
      property: "og:type",
      content: "website",
    },

    {
      property: "og:image",
      content: "https://easyhom1969.vercel.app/images/banner (1).jpg",
    },
    {
      property: "og:image:width",
      content: "1200",
    },
    {
      property: "og:image:height",
      content: "630",
    },
    {
      property: "og:image:type",
      content: "image/jpeg",
    },
  ];
}

// Define the limit constant (good practice)
const LIMIT = 4;

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const page = Number(url.searchParams.get("page") || 1);
  const { blogs } = await blogService.getAll(LIMIT, page);
  const hasMore = blogs.length === LIMIT;


  return {
    blogs,
    page,
    hasMore,
  };
}


export default function Home() {
  const { blogs } = useLoaderData<typeof loader>();
  return <main className="">
    <section className="h-[110vh] overflow-hidden relative w-full flex ">
      <div className="w-full absolute bottom-20 flex items-center  justify-center z-10">
        <a href="#learnmore" className="animate-bounce rounded-full p-2 border-2 border-white text-white mb-5">
          <FaArrowDown className="size-8  " />
        </a>
      </div>
      <div className="absolute w-full h-full bg-linear-180 to-black from-black/30
      flex flex-col md:items-center px-6 justify-center 
      ">
        <div className="lg:h-[68px]  ">
          <motion.h1
            initial={{
              y: 32, opacity: 0
            }}
            whileInView={{
              y: 0, opacity: 1
            }}
            transition={{
              duration: 0.6
            }}
            className="lg:text-5xl md:text-3xl text-2xl text-white font-[300] mb-4">กู้บ้านเงินเหลือ คอนโดเงินเหลือ</motion.h1>
        </div>
        <div className="lg:h-[72px] flex items-end  overflow-clip">
          <motion.h2
            initial={{
              y: 32, opacity: 0
            }}
            whileInView={{
              y: 0, opacity: 1
            }}
            transition={{
              duration: 0.6
            }}
            className="lg:text-6xl text-4xl text-white font-[300]">ซื้อบ้านปิดหนี้ให้ก่อน แถมเงินเหลือ</motion.h2>
        </div>

        <div className="font-light max-w-[500px] md:text-center text-lg mt-4 text-white/80">
          บริการคอนโดเงินเหลือ การีนตีผู้เช่า One stop service <br />ดูให้ครบจบที่เดียว ไม่ว่าคุณจะเป็นพนักงานเงินเดือน หรือ เจ้าของธุรกิจ เสริมสภาพคล่องได้คอนโดการันตีผู้เช่าให้
        </div>


        {/* CTA */}

        <NavLink
          to="#register-form"
          className="btn-1 mt-4 py-4 hover:w-[240px] flex gap-2 group w-[230px] items-center text-center">
          <div className="">ลงทะเบียนตอนนี้</div>
          <div className="overflow-clip opacity-0 group-hover:opacity-100 duration-200
          group-hover:translate-x-4 "><FaArrowRight /></div>
        </NavLink>
      </div>
      <img
        className="h-[140vh] w-full object-cover"
        src="/images/hero.jpg"
        alt="hero image" />
    </section>

    <div id="learnmore" className="">

      <div className="bg-amber-950/30 relative overflow-hidden">
        {/* <img src="/images/background.svg"
          className="w-full h-full object-cover z-0 absolute"
          alt="" /> */}
        <section className="md:grid flex group flex-col-reverse  md:grid-cols-2 gap-5 bg- container-x py-10 relative z-1">
          <div className="-mb-5 md:opacity-100 opacity-0 duration-200 md:-mb-[115px] w-full absolute lg:right-[-10%] md:right-[-5%] bottom-0
           pointer-events-none md:bottom-10 flex justify-end ">
            <img src="/images/owner.png"
              className="md:h-[500px] h-[350px] hover:opacity-0 duration-200 hover: "
              alt="owner" />
          </div>


          <div className=" flex flex-col items-end">
            <div className="md:hidden h-[250px] w-auto -mr-5 -mt-14">
              <img src="/images/owner.png"
                className="md:h-[500px] h-[350px] aspect-[9/12]  duration-200 hover: "
                alt="owner" />
            </div>
            <ApplicationForm className="w-full" />
          </div>
          <div className=" text-black/80 relative z-10 font-light h-full w-full max-w-[80%] space-y-2 flex flex-col justify-center">
            <div className="text-3xl font-medium text-black mb-3">
              <h3 className="text-sm uppercase tracking-[0.2em] text-emerald-600 font-bold">
                Service Requirements
              </h3>
              เงื่อนไขการรับบริการ
            </div>
            <div className="text-xl mb-5 font-[200] flex gap-2">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-lg transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                1
              </div>
              พนักงานประจำเงินเดือน 30,000 ขึ้นไป รวมหนี้ผ่อนทางเดียวได้คอนโดการันตีผู้เช่า
            </div>
            <div className="text-xl mb-5 font-[200] flex gap-2">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-lg transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                2
              </div>
              เจ้าของกิจการจดทะเบียนธุรกิจขั้นต่ำ1ปี มีการหมุนเวียนบัญชีธุรกิจ ประวัติการชำระปกติ
            </div>
          </div>

        </section>
      </div>


    </div>


    {/* HIGHTLIGHT PROJECT */}

    <section className="container-x min-h-screen pt-10">
      <div className="h-[38px] flex justify-between  overflow-clip mb-4">
        <motion.div
          initial={{
            y: 18, opacity: 0
          }}
          whileInView={{
            y: 0, opacity: 1
          }}
          transition={{
            duration: 0.6
          }}
          className="text-2xl text-black/80 font-[300] ">
          โครงการเด่น
        </motion.div>


        {/* <Link
          to='#'
          className='group text-sm  animated-slide-bg rounded-full hover:text-white px-3 '
        >
          <span className='flex duration-200 text-(--primary-color) items-center gap-2 font-bold'>
            ดูเพิ่มเติม
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              className='size-[36px]'
              viewBox='0 0 24 24'
            >
              <path
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 12h14m-4 4l4-4m-4-4l4 4'
              />
            </svg>
          </span>
        </Link> */}
      </div>
      {/*  */}
      <div className="grid md:grid-cols-2 gap-4">
        {HIGHLIGHT_PROJECTS.map((item, key) => <CondoCard {...item} key={key} />)}
      </div>
    </section>


    <section className=" grid gap-2 min-h-[300px]  pt-10">
      <div className="w-full h-[400px]">
        <img src="/images/The-Cube-Loft-Srinakarin-Theparak_019.jpg"
          className="w-full h-full object-cover"
          alt="image" />
      </div>
      <FAQSection />
    </section>


    <section className="container-x">
      <div className="relative  md:h-[520px] h-[420px] w-full overflow-hidden rounded-2xl">
        {/* Background image */}
        <img
          src="/images/condo-cover.jpg"
          alt="image"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
        {/* Content */}
        <div className="relative  z-10 flex h-full flex-col md:flex-row items-start md:items-center justify-center md:justify-between px-6 md:px-12 gap-8">
          {/* Text */}
          <div className="max-w-xl space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-semibold text-white leading-snug"
            >
              ให้คำปรึกษาด้านการกู้อย่างเป็นระบบ
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base md:text-lg text-white/90 font-light leading-relaxed"
            >
              วิเคราะห์กู้บ้านเงินเหลือกับผู้เชี่ยวชาญ
              วางแผนการกู้ให้เหมาะกับชีวิตและอนาคตของคุณ
            </motion.p>
          </div>
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:self-center"
          >
            <NavLink
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black shadow-lg transition hover:bg-black hover:text-white"
            >
              สมัครปรึกษาฟรี
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </NavLink>
          </motion.div>
        </div>
      </div>
    </section>
    <section className=" grid gap-2 min-h-[300px]  pt-10">

      <WhyChooseUsSection />
    </section>

    {/* step */}
    <section className=" grid gap-2 min-h-[300px] container-x">
      <div className="relative flex h-[400px] md:h-[520px] w-full overflow-hidden rounded-4xl">
        {/* Overlay content */}
        <div
          className="
      absolute inset-0 z-10 flex flex-col justify-center gap-6
      px-6 md:px-10
      bg-gradient-to-r from-black/80 via-black/40 to-black/0
    "
        >
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
        text-white font-medium leading-tight
        max-w-[85%] md:max-w-[40%]
        text-[clamp(1.5rem,4vw,2.25rem)]
      "
          >
            วางแผนดี มีบ้านพร้อมเงินเหลือ ด้วยทีมมืออาชีพ
          </motion.h1>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full md:w-auto"
          >
            <NavLink
              to="/contact"
              className="
          group inline-flex w-full md:w-auto items-center justify-center gap-2
          rounded-full bg-neutral-900 text-white
          px-6 md:px-10 py-3 md:py-4
          text-sm md:text-base
          transition hover:bg-neutral-800
        "
            >
              ปรึกษาฟรีกับ EasyHom1969
              <span
                className="
            opacity-0 -translate-x-1
            transition-all duration-200
            group-hover:opacity-100 group-hover:translate-x-1
          "
              >
                <FaArrowRight />
              </span>
            </NavLink>
          </motion.div>
        </div>

        {/* Background image */}
        <img
          src="/images/condo-cover-1.jpg"
          alt="image"
          className="h-full w-full object-cover rounded-4xl"
        />
      </div>



      <StepSection />
    </section>




    {/*  */}

    <section className="container-x p-10">
      <div className="h-[38px] flex justify-between  overflow-clip mb-4">
        <motion.div
          initial={{
            y: 18, opacity: 0
          }}
          whileInView={{
            y: 0, opacity: 1
          }}
          transition={{
            duration: 0.6
          }}
          className="text-2xl text-black/80 font-[300] ">
          บทความที่น่าสนใจ
        </motion.div>


        <Link
          to='/blogs'
          className='group text-sm  animated-slide-bg rounded-full hover:text-white px-3 '
        >
          <span className='flex duration-200 text-(--primary-color) items-center gap-2 font-bold'>
            ดูเพิ่มเติม
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              className='size-[36px]'
              viewBox='0 0 24 24'
            >
              <path
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 12h14m-4 4l4-4m-4-4l4 4'
              />
            </svg>
          </span>
        </Link>
      </div>
      {/*  */}<HorizontalSwiper className='h-[350px] box-container-md w-full items-center'>
        {blogs.map((item, key) => <BlogCard blog={item} key={key} />)}
      </HorizontalSwiper>
      {/* <div className="grid md:grid-cols-2 gap-4">
        {blogs.map((item, key) => <BlogCard blog={item} key={key} />)}
      </div> */}
    </section>
  </main>;
}
