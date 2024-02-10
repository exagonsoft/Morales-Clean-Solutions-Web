"use client";

import React, { useEffect, useState } from "react";
import "./servicestyles.css";
import SectionWrapper from "../Reusable/SectionWrapper";
import { Langs } from "@/langs/langs";
import { RecyclableList, Services } from "@/data/MockData";
import { motion } from "framer-motion";
import { FaTruck } from "react-icons/fa";

const RecyclableItem = ({ category, items }) => {
  return (
    <div className="w-full flex justify-start flex-col">
      <span className="uppercase font-bold text-white">{category}</span>
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
      initial={{ right: inMobile ? "150px" : "220px" }}
      whileInView={{ right: 0 }}
      transition={{ ...transition, type: "tween" }}
      className="services-card flex flex-col relative gap-4 p-8 rounded-lg bg-[--color-primary] shadow-lg"
    >
      <span className="text-[var(--color-primary-comments)] uppercase font-bold">{title}</span>
      <p className="text-[var(--color-primary-comments)]">{description}</p>
    </motion.div>
  );
};

const ServicesSection = ({inMobile, showBookerHandler, selectedLanguage }) => {

  return (
    <SectionWrapper
      sectionId={Langs[selectedLanguage].navbarUI.services}
      title={Langs[selectedLanguage].servicesSectionUI.title}
    >
      <div className="services-container pb-[4rem] sm:pt-[3rem] pt-[1rem]">
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
              {Langs[selectedLanguage].servicesSectionUI.recyclableList}
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
            <button className="button !w-full" onClick={showBookerHandler}>
              <span className="text-2xl">
                <FaTruck />
              </span>
              {Langs[selectedLanguage].globalUI.bookOnline}
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ServicesSection;
