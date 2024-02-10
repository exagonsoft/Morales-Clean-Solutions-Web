import React from "react";
import "./testimonialstyles.css";
import SectionWrapper from "../Reusable/SectionWrapper";
import { Langs } from "@/langs/langs";
import FeedBack from "../Feedback/FeedBack";
import { AiFillNotification } from "react-icons/ai";

const Testimonials = ({ selectedLanguage, showOpinionHandler }) => {
  return (
    <SectionWrapper
      title={Langs[selectedLanguage].testimonialSectionUI.title}
      sectionId={Langs[selectedLanguage].navbarUI.testimonials}
    >
      <div className="w-full flex sm:flex-row flex-col gap-8 sm:px-0 px-4">
        <div className="w-full flex flex-col justify-start items-center gap-8">
          <h1 className="font-bold uppercase sm:text-[2rem] text-[1.5rem]">
            <span className="stroke-text">
              {Langs[selectedLanguage].testimonialSectionUI.blockTitle1}
            </span>
            <span className="text-white">
              {Langs[selectedLanguage].testimonialSectionUI.blockTitle2}
            </span>
          </h1>
          <div className="w-full flex flex-col gap-4 p-4 rounded-lg bg-[var(--color-secondary)] border border-white shadow-md">
            <p className="w-full text-justify text-white sm:text-[1rem] text-[.8rem]">
              {Langs[selectedLanguage].testimonialSectionUI.blockText}
            </p>
            <p className="w-full text-justify text-white sm:text-[1rem] text-[.8rem]">
              {Langs[selectedLanguage].testimonialSectionUI.thanksText}
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-12 sm:justify-end justify-center items-center">
          <div className="w-full flex">
            <FeedBack />
          </div>
          <div className="hero-buttons w-full">
            <button type="button" className="button !w-full" onClick={() => {showOpinionHandler()}}>
              <span className="text-2xl">
                <AiFillNotification />
              </span>
              {Langs[selectedLanguage].testimonialSectionUI.feedBack}
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
