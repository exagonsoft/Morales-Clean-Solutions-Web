"use client";

import React, { useEffect, useState } from "react";
import "./servicestyles.css";
import SectionWrapper from "../Reusable/SectionWrapper";
import { Langs } from "@/langs/langs";
import { RecyclableList, Services } from "@/data/MockData";
import { motion } from "framer-motion";
import { FaTruck } from "react-icons/fa";
import { Dimensions } from "@/settings/constants";

const RecyclableItem = ({ category, items }) => {
  return (
    <div className="w-full flex justify-start flex-col">
      <span className="uppercase font-bold">{category}</span>
      <ul className="mx-8 list-disc">
        {items.map((item, index) => (
          <li key={index} className="text-white">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ServiceCard = ({ title, description, inMobile }) => {
  const transition = { type: "spring", duration: 1.5 };

  return (
    <motion.div
      initial={{ left: inMobile ? "-100px" : "-50rem" }}
      whileInView={{ left: 0 }}
      transition={{ ...transition, type: "tween" }}
      className="services-card flex flex-col relative gap-4 p-8 rounded-lg bg-[--color-primary] shadow-lg"
    >
      <span className="text-white uppercase font-bold">{title}</span>
      <p className="text-[var(--color-primary-comments)]">{description}</p>
    </motion.div>
  );
};

const ServicesSection = () => {
  const [inMobile, setInMobile] = useState(false);

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
    <SectionWrapper
      sectionId={Langs["en"].navbarUI.services}
      title={Langs["en"].servicesSectionUI.title}
    >
      <div className="services-container pb-[4rem]">
        <div className="w-full flex flex-col gap-4 items-center">
          {Services.map((service, index) => (
            <ServiceCard
              key={index}
              inMobile={inMobile}
              title={service.service}
              description={service.description}
            />
          ))}
        </div>
        <div className="w-max flex flex-col justify-center items-center gap-4">
          <div className="w-max flex flex-col justify-center items-center gap-4 p-2 rounded-lg services-items-list shadow-lg">
            <span className="text-white font-bold uppercase p-4 w-max">
              {Langs["en"].servicesSectionUI.recyclableList}
            </span>
            <div className="w-full flex flex-col items-center gap-4">
              {RecyclableList.map((material, index) => (
                <RecyclableItem
                  key={index}
                  category={material.category}
                  items={material.materials}
                />
              ))}
            </div>
          </div>
          <div className="hero-buttons w-full">
            <button className="button !w-full">
              <span className="text-2xl">
                <FaTruck />
              </span>
              {Langs["en"].globalUI.bookOnline}
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ServicesSection;
