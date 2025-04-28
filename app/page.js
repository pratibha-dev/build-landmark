import Features from "@/components/features/features";
import Hero from "@/components/hero/hero";
import Header from "@/components/header/header";
import Pricing from "@/components/pricing/pricing";
import Testimonial from "@/components/testimonial/testimonial";
import Image from "next/image";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header/>
      <Hero/>
      <Features/>
      <Pricing/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}
