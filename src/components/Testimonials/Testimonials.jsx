import React from "react";
import "./testimonialstyles.css";
import SectionWrapper from "../Reusable/SectionWrapper";
import { Langs } from "@/langs/langs";

const Testimonials = ({selectedLanguage}) => {
  return (
    <SectionWrapper
      title={Langs[selectedLanguage].testimonialSectionUI.title}
      sectionId={Langs[selectedLanguage].navbarUI.testimonials}
    />
  );
};

export default Testimonials;
