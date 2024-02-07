"use client";

import AboutSection from "@/components/About/AboutSection";
import ReservationBooker from "@/components/Booker/ReservationBooker";
import HeroSection from "@/components/Hero/HeroSection";
import NavBar from "@/components/NavBar/NavBar";
import PricingSection from "@/components/Pricing/PricingSection";
import ServicesSection from "@/components/Services/ServicesSection";
import { Dimensions } from "@/settings/constants";
import { useEffect, useState } from "react";

export default function Home() {
  const [inMobile, setInMobile] = useState(false);
  const [showBooker, setShowBooker] = useState(false);

  const freezeScreen = () => {
    document.body.style.overflowY = "hidden";
  };

  const unFreezeScreen = () => {
    document.body.style.overflowY = "auto";
  };

  const showBookerHandler = () => {
    setShowBooker((prevState) => true);
    freezeScreen();
  };

  const hideBookerHandler = () => {
    setShowBooker((prevState) => false);
    unFreezeScreen();
  };

  useEffect(() => {
    // Check window width only in client-side (browser) environment
    const handleResize = () => {
      setInMobile(window.innerWidth <= Dimensions.mobileScreen);
    };

    // Initial check on component mount
    handleResize();

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [inMobile]);

  return (
    <main className="flex min-h-screen overflow-hidden flex-col items-center">
      {showBooker ? <ReservationBooker hideBookerHandler={hideBookerHandler}/> : <></>}
      <NavBar freezeScreen={freezeScreen} unFreezeScreen={unFreezeScreen}/>
      <HeroSection inMobile={inMobile} showBookerHandler={showBookerHandler}/>
      <ServicesSection inMobile={inMobile} showBookerHandler={showBookerHandler}/>
      <PricingSection showBookerHandler={showBookerHandler}/>
      <AboutSection inMobile={inMobile} />
    </main>
  );
}
