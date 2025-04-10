import AboutSectionOne from "@/components/home/About/AboutSectionOne";
import AboutSectionTwo from "@/components/home/About/AboutSectionTwo";
import Blog from "@/components/home/Blog";
import Brands from "@/components/home/Brands";
import ScrollUp from "@/components/home/Common/ScrollUp";
import Contact from "@/components/home/Contact";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Pricing from "@/components/home/Pricing";
import Testimonials from "@/components/home/Testimonials";
import Video from "@/components/home/Video";
import Team from "@/components/home/Squad";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Zion Media",
  // other metadata
};

export default function Home() {
  //<AboutSectionOne />
  //<AboutSectionTwo />

  //<Pricing />
  //<Blog />

  
  //<Testimonials />
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Team />
      <Video />
      <Brands /> 
      

      <Contact />
    </>
  );
}
