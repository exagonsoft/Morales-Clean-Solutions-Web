"use client";

import React from "react";
import "./herostyles.css";
import { motion } from "framer-motion";
import { Langs } from "@/langs/langs";
import NumberCounter from "number-counter";
import { FaTruck } from "react-icons/fa";

const HeroSection = () => {
  const transition = { type: "spring", duration: 3 };
  const inMobile = window.innerWidth <= 768 ? true : false;

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
            <button className="button">
              <span className="text-2xl"><FaTruck /></span>
              {Langs["en"].globalUI.bookOnline}
            </button>
          </div>
        </div>
        <div className="flex flex-col best-hauler-image">
          <motion.img
            transition={transition}
            initial={{ left: "30%", opacity: 0 }}
            whileInView={{ left: 0, opacity: 1 }}
            src="/herotruck.png"
            alt=""
            className="w-[80%] hero-image-back"
          />
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;
