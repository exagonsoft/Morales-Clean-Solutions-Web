"use client"

import AboutSection from "@/components/About/AboutSection";
import HeroSection from "@/components/Hero/HeroSection";
import PricingSection from "@/components/Pricing/PricingSection";
import ServicesSection from "@/components/Services/ServicesSection";
import { Dimensions } from "@/settings/constants";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [inMobile, setInMobile] = useState(false);

  useEffect(() => {
    // Check window width only in client-side (browser) environment
    const handleResize = () => {
      setInMobile(window.innerWidth <= Dimensions.mobileScreen);
    };

    // Initial check on component mount
    handleResize();

    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [inMobile]);

  return (
    <main className="flex min-h-screen overflow-hidden flex-col items-center">
      <HeroSection inMobile={inMobile}/>
      <ServicesSection inMobile={inMobile}/>
      <PricingSection />
      <AboutSection inMobile={inMobile}/>
    </main>
  );
}
