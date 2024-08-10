import { Switch } from "@/components/ui/switch";
import { CheckIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Header from "./_components/header";
import Hero from "./_components/hero";
import Info from "./_components/info";
import Pricing from "./_components/pricing";
import Support from "./_components/support";
import Testimonials from "./_components/testimonials";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="  w-full text-[#5b5b5b] relative   p-8  flex flex-col items-center bg-background  lg:text-2xl">
        <h1 className="text-center">
          This versatile to-do board app supports Mac, iOS, Windows, and more,
          ensuring seamless task
        </h1>
        <h1 className="">management across all your devices.</h1>
      </div>
      {/* info */}
      <Info />
      {/* pricing */}
      <Pricing />
      {/* support platform */}
      <Support />
      {/* testimonials */}
      <Testimonials />
      <Footer />
    </main>
  );
}
