import React from "react";
import SectionDivider from "./SectionDivider";

const SectionWrapper = ({ sectionId, title, backGround = '', children }) => {
  return (
    <section id={`#${sectionId}`} className={`section-wrapper pb-12 ${backGround}`}>
      <SectionDivider />
      <div className={`w-full flex justify-center items-center font-bold text-white uppercase section-wrapper-title`}>
        <span className="uppercase">{title}</span>
      </div>
      <div className="section-wrapper-outlet flex mt-12">{children}</div>
    </section>
  );
};

export default SectionWrapper;
