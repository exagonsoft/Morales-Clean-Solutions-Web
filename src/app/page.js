"use client";

import dynamic from "next/dynamic";
import AboutSection from "@/components/About/AboutSection";
const ReservationBooker = dynamic(() =>
  import("@/components/Booker/ReservationBooker")
);
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/Hero/HeroSection";
import NavBar from "@/components/NavBar/NavBar";
import PricingSection from "@/components/Pricing/PricingSection";
import ServicesSection from "@/components/Services/ServicesSection";
import { ToastNotification } from "@/handlers/notificationsHandler";
import { Dimensions } from "@/settings/constants";
import { useEffect, useState } from "react";
import ContactUs from "@/components/ContactUS/ContactUs";
import Testimonials from "@/components/Testimonials/Testimonials";
import Loader from "@/components/Loader/Loader";

export default function Home() {
  const [inMobile, setInMobile] = useState(false);
  const [showBooker, setShowBooker] = useState(false);
  const [selectedSection, setSelectedSection] = useState("");
  const [loading, setIsLoading] = useState(false);

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

  const handleSectionSelection = (section) => {
    setSelectedSection((prevData) => section);
  };

  const handleLoading = (loading) => {
    setIsLoading((prevData) => loading)
    if(loading || showBooker){
      freezeScreen();
    }else{
      unFreezeScreen();
    }
  }

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
  }, [inMobile, selectedSection]);

  return (
    <main className="flex min-h-screen overflow-hidden flex-col items-center">
      <ToastNotification />
      {loading ? (
        <Loader />
      ) : (
        <></>
      )}
      {showBooker ? (
        <ReservationBooker hideBookerHandler={hideBookerHandler} handleLoading={handleLoading}/>
      ) : (
        <></>
      )}
      <NavBar
        freezeScreen={freezeScreen}
        unFreezeScreen={unFreezeScreen}
        selectedSection={selectedSection}
        handleSectionSelection={handleSectionSelection}
      />
      <HeroSection inMobile={inMobile} showBookerHandler={showBookerHandler} />
      <ServicesSection
        inMobile={inMobile}
        showBookerHandler={showBookerHandler}
      />
      <PricingSection showBookerHandler={showBookerHandler} />
      <AboutSection inMobile={inMobile} />
      <ContactUs inMobile={inMobile} handleLoading={handleLoading}/>
      <Testimonials />
      <Footer
        selectedSection={selectedSection}
        handleSectionSelection={handleSectionSelection}
      />
    </main>
  );
}
