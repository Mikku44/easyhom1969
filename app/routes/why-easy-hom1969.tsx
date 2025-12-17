import type { Route } from "./+types/home";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Easy hom 1969 - " },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function WhyEasyHom() {
  return <main className="min-h-screen ">

    <section className="h-[500px] overflow-hidden relative">
      <div className="absolute inset-0 w-full h-full flex flex-col items-baseline
        p-10 justify-center gap-4 
        bg-linear-0 from-black/80 to-black/0"></div>

      <img src="/images/contact-bg.jpg"
        className="h-full w-full object-cover" alt="hero image qualicication" />
    </section>

  </main>;
}
