import "./pricingstyles.css";
import SectionWrapper from "../Reusable/SectionWrapper";
import { FaTruck } from "react-icons/fa";
import { Langs } from "@/langs/langs";
import {
  blurredWastePlan,
  hazardousWastePlan,
  packagedWastePlan,
} from "@/data/MockData";
import Estimator from "../Estimator/Estimator";

const PlanCard = ({ title, lacking, included, showBookerHandler, selectedLanguage }) => {
  return (
    <div className="flex justify-between items-start w-full flex-col gap-2 p-4 rounded-lg shadow-lg bg-[var(--color-secondary)] min-h-[25rem] hover:scale-[1.03] transitions">
      <div className="flex flex-col justify-start items-start">
        <div className="mb-6">
          <h1 className="text-white font-bold text-xl">{title}</h1>
        </div>
        <div className="">
          {lacking?.map((lack, index) => (
            <div key={index} className="">
              ⛔<span className="text-sm text-white">{lack}</span>
            </div>
          ))}
        </div>
        <div className="">
          {included?.map((include, index) => (
            <div key={index} className="">
              ✅<span className="text-sm text-white">{include}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-buttons w-full">
        <button className="button !w-full" onClick={showBookerHandler}>
          <span className="text-2xl">
            <FaTruck />
          </span>
          {Langs[selectedLanguage].globalUI.bookOnline}
        </button>
      </div>
    </div>
  );
};

const PricingSection = ({ showBookerHandler, selectedLanguage  }) => {
  return (
    <SectionWrapper
      sectionId={Langs[selectedLanguage].navbarUI.pricing}
      title={Langs[selectedLanguage].pricingSectionUI.title}
      backGround="nav-bg"
    >
      <div className="w-full flex flex-col">
        <div className="pricing-container !items-start sm:py-[4rem] py-4 gap-4 sm:px-4 px-2">
          <PlanCard
            title={packagedWastePlan.name}
            lacking={packagedWastePlan.lacks}
            included={packagedWastePlan.includes}
            showBookerHandler={showBookerHandler}
            selectedLanguage={selectedLanguage}
          />
          <PlanCard
            title={blurredWastePlan.name}
            lacking={blurredWastePlan.lacks}
            included={blurredWastePlan.includes}
            showBookerHandler={showBookerHandler}
            selectedLanguage={selectedLanguage}
          />
          <PlanCard
            title={hazardousWastePlan.name}
            lacking={hazardousWastePlan.lacks}
            included={hazardousWastePlan.includes}
            showBookerHandler={showBookerHandler}
            selectedLanguage={selectedLanguage}
          />
        </div>
        <div className="w-full justify-center items-center flex flex-col gap-2 mb-12">
          <Estimator />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PricingSection;
