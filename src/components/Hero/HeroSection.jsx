"use client";

import React, { useEffect, useState } from "react";
import "./herostyles.css";
import { motion } from "framer-motion";
import { Langs } from "@/langs/langs";
import NumberCounter from "number-counter";
import { FaTruck } from "react-icons/fa";
import { Dimensions } from "@/settings/constants";

const HeroSection = ({ inMobile, showBookerHandler }) => {
  const transition = { type: "spring", duration: 3 };
  const backgroundTransition = { type: "spring", duration: 1.5 };

  return (
    <section id="#" className="w-full flex flex-col items-center">
      <div className="w-full nav-bg pt-[6rem] flex hero-flex pb-[5rem]">
        <div className="flex flex-col px-4 best-hauler-add gap-8">
          <div className="best-hauler shadow-md">
            <motion.div
              initial={{ left: inMobile ? "150px" : "220px" }}
              whileInView={{ left: "8px" }}
              transition={{ ...transition, type: "tween" }}
            ></motion.div>
            <span className="w-full text-xs">
              {Langs["en"].heroSectionUI.bestHaulerAd}
            </span>
          </div>
          <div className="hero-heading">
            <div>
              <span className="stroke-text">
                {Langs["en"].heroSectionUI.bestHaulerAdText1}{" "}
              </span>
              <span>{Langs["en"].heroSectionUI.bestHaulerAdText2}</span>
            </div>
            <div>
              <span>{Langs["en"].heroSectionUI.bestHaulerAdText3}</span>
            </div>
            <div>
              <span>{Langs["en"].heroSectionUI.bestHaulerAdSlogan}</span>
            </div>
          </div>
          <div className="hero-decos">
            <div>
              <span>
                <NumberCounter
                  end={24}
                  start={5}
                  delay="4"
                  preFix="+"
                ></NumberCounter>
              </span>
              <span>{Langs["en"].heroSectionUI.monthlyDates}</span>
            </div>
            <div>
              <span>
                <NumberCounter
                  end={977}
                  start={520}
                  delay="4"
                  preFix="+"
                ></NumberCounter>
              </span>
              <span>{Langs["en"].heroSectionUI.happyClients}</span>
            </div>
            <div>
              <span>
                <NumberCounter
                  end={20}
                  start={6}
                  delay="4"
                  preFix="+"
                ></NumberCounter>
              </span>
              <span>{Langs["en"].heroSectionUI.experienceYears}</span>
            </div>
          </div>
          <div className="hero-buttons w-full">
            <button className="button" onClick={showBookerHandler}>
              <span className="text-2xl">
                <FaTruck />
              </span>
              {Langs["en"].globalUI.bookOnline}
            </button>
          </div>
        </div>
        <div className="relative flex flex-col best-hauler-image-container">
          <div className="star" style={{ top: "10%", left: "20%" }}></div>
          <div className="star" style={{ top: "20%", left: "50%" }}></div>
          <div className="star" style={{ top: "30%", left: "80%" }}></div>
          <motion.div
            transition={backgroundTransition}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="absolute w-full h-[90%] best-hauler-image"
          >
          </motion.div>
          <motion.div
            transition={transition}
            initial={{ left: "30%", opacity: 0 }}
            whileInView={{ left: 0, opacity: 1 }}
            className="relative flex w-[95%] h-full justify-center items-center py-8"
          >
            <img src="/herotruck.webp" alt="" className="hero-image-back" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
