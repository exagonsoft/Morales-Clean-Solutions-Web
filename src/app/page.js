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
import OpinionForm from "@/components/Opinion/OpinionForm";

export default function Home() {
  const [inMobile, setInMobile] = useState(false);
  const [showBooker, setShowBooker] = useState(false);
  const [showOpinionForm, setShowOpinionFrom] = useState(false);
  const [selectedSection, setSelectedSection] = useState("");
  const [loading, setIsLoading] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

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

  const showOpinionHandler = () => {
    setShowOpinionFrom((prevState) => true);
    freezeScreen();
  };

  const hideOpinionHandler = () => {
    setShowOpinionFrom((prevState) => false);
    unFreezeScreen();
  };

  const handleSectionSelection = (section) => {
    setSelectedSection((prevData) => section);
  };

  const handleLoading = (loading) => {
    setIsLoading((prevData) => loading);
    if (loading || showBooker || showOpinionForm) {
      freezeScreen();
    } else {
      unFreezeScreen();
    }
  };

  const listUsers = async () => {
    try {
      const _res = await listUsers();
    } catch (error) {
      console.log("Error Listing Users: ", error);
    }
  };

  useEffect(() => {
    listUsers();
  }, []);

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
      {loading ? <Loader /> : <></>}
      {showBooker ? (
        <ReservationBooker
          hideBookerHandler={hideBookerHandler}
          handleLoading={handleLoading}
          selectedLanguage={selectedLanguage}
        />
      ) : (
        <></>
      )}
      {showOpinionForm ? (
        <OpinionForm
          hideOpinionHandler={hideOpinionHandler}
          handleLoading={handleLoading}
          selectedLanguage={selectedLanguage}
        />
      ) : (
        <></>
      )}
      <NavBar
        freezeScreen={freezeScreen}
        unFreezeScreen={unFreezeScreen}
        selectedSection={selectedSection}
        handleSectionSelection={handleSectionSelection}
        selectedLanguage={selectedLanguage}
      />
      <HeroSection
        inMobile={inMobile}
        showBookerHandler={showBookerHandler}
        selectedLanguage={selectedLanguage}
      />
      <ServicesSection
        inMobile={inMobile}
        showBookerHandler={showBookerHandler}
        selectedLanguage={selectedLanguage}
      />
      <PricingSection
        showBookerHandler={showBookerHandler}
        selectedLanguage={selectedLanguage}
      />
      <AboutSection inMobile={inMobile} selectedLanguage={selectedLanguage} />
      <ContactUs
        inMobile={inMobile}
        handleLoading={handleLoading}
        selectedLanguage={selectedLanguage}
      />
      <Testimonials
        selectedLanguage={selectedLanguage}
        showOpinionHandler={showOpinionHandler}
      />
      <Footer
        selectedSection={selectedSection}
        handleSectionSelection={handleSectionSelection}
        inMobile={inMobile}
        selectedLanguage={selectedLanguage}
      />
    </main>
  );
}
