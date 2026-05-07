import { Hero, Services, Pricing, Reviews, Contact, Faq } from "@/components/home";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-[400svh]">
      <main className="flex flex-1 w-full flex-col items-center justify-betweensm:items-start">
        <Hero />
        <Services />
        <Pricing />
        <Reviews />
        <Contact />
        <Faq />
      </main>
    </div>
  );
}
