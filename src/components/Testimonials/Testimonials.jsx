import React from "react";
import "./testimonialstyles.css";
import SectionWrapper from "../Reusable/SectionWrapper";
import { Langs } from "@/langs/langs";
import { NavLinks } from "@/settings/constants";

const Testimonials = () => {
  return (
    <SectionWrapper
      title={Langs["en"].testimonialSectionUI.title}
      sectionId={Langs["en"].navbarUI.testimonials}
    />
  );
};

export default Testimonials;
