import React from "react";
import "./pricingstyles.css";
import SectionWrapper from "../Reusable/SectionWrapper";
import { Langs } from "@/langs/langs";
import {
  blurredWastePlan,
  hazardousWastePlan,
  packagedWastePlan,
} from "@/data/MockData";

const PlanCard = ({ title, lacking, included }) => {
    console.log("From Card: ",lacking);
  return (
    <div className="flex w-full flex-col gap-2 p-4 rounded-lg shadow-lg bg-[var(--color-secondary)]">
      <div className="">
        <span className="">{title}</span>
      </div>
      <div className="">
        {lacking.map((lack, index) => {
          <div key={index} className="">
            {lack}mierda
          </div>;
        })}
      </div>
      <div className="">
        {included.map((include, index) => {
          <div key={index} className="">
            {include}
          </div>;
        })}
      </div>
    </div>
  );
};

const PricingSection = () => {
  return (
    <SectionWrapper
      sectionId={Langs["en"].navbarUI.pricing}
      title={Langs["en"].pricingSectionUI.title}
    >
      <div className="pricing-container py-[4rem] gap-4">
        <PlanCard
          title={packagedWastePlan.name}
          lacking={packagedWastePlan.lacks}
          included={packagedWastePlan.includes}
        />
        <PlanCard
          title={blurredWastePlan.name}
          lacking={blurredWastePlan.lacks}
          included={blurredWastePlan.includes}
        />
        <PlanCard
          title={hazardousWastePlan.name}
          lacking={hazardousWastePlan.lacks}
          included={hazardousWastePlan.includes}
        />
      </div>
    </SectionWrapper>
  );
};

export default PricingSection;
