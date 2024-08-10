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
    <main className="">
      <Hero />

      {/* info */}
      {/* <Info /> */}
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
