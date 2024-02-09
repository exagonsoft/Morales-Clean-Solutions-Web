import React from "react";
import SectionWrapper from "../Reusable/SectionWrapper";
import { Langs } from "@/langs/langs";
import Carousel from "../Carousel/Carousel";
import { AboutImages } from "@/settings/constants";

const Paragraph = ({ text }) => {
  return (
    <p className="p-4 text-justify border border-white rounded-lg sm:mx-0 mx-2  bg-[var(--color-secondary)] shadow-lg">
      {text}
    </p>
  );
};

const AboutSection = ({inMobile}) => {
  return (
    <SectionWrapper
      sectionId={Langs["en"].navbarUI.about}
      title={Langs["en"].aboutSectionUI.title}
    >
      <div className="w-full flex flex-col gap-8 py-8">
        <div className="w-full my-6">
            <Carousel images={AboutImages} inMobile={inMobile}/>
        </div>
        <div className="w-full flex sm:flex-row flex-col gap-8">
          <div className="w-full flex flex-col justify-start items-center gap-4">
            <h1 className="font-bold uppercase text-[2rem]">
              <span className="stroke-text">Our</span>
              <span className="text-white"> Story</span>
            </h1>
            <div className="flex flex-col  text-white gap-4">
              <Paragraph text={Langs["en"].aboutSectionUI.ourStoryParagraph1} />
              <Paragraph text={Langs["en"].aboutSectionUI.ourStoryParagraph2} />
              <Paragraph text={Langs["en"].aboutSectionUI.ourStoryParagraph3} />
              <Paragraph text={Langs["en"].aboutSectionUI.ourStoryParagraph4} />
              <Paragraph text={Langs["en"].aboutSectionUI.ourStoryParagraph5} />
              <Paragraph text={Langs["en"].aboutSectionUI.ourStoryParagraph6} />
              <Paragraph text={Langs["en"].aboutSectionUI.ourStoryParagraph7} />
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-center gap-4">
            <h1 className="font-bold uppercase text-[2rem]">
              <span className="stroke-text">Our</span>
              <span className="text-white"> Mission</span>
            </h1>
            <div className="flex flex-col  text-white gap-4">
              <Paragraph
                text={Langs["en"].aboutSectionUI.ourMissionParagraph1}
              />
              <Paragraph
                text={Langs["en"].aboutSectionUI.ourMissionParagraph2}
              />
              <Paragraph
                text={Langs["en"].aboutSectionUI.ourMissionParagraph3}
              />
              <Paragraph
                text={Langs["en"].aboutSectionUI.ourMissionParagraph4}
              />
              <Paragraph
                text={Langs["en"].aboutSectionUI.ourMissionParagraph5}
              />
              <Paragraph
                text={Langs["en"].aboutSectionUI.ourMissionParagraph6}
              />
              <Paragraph
                text={Langs["en"].aboutSectionUI.ourMissionParagraph7}
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
