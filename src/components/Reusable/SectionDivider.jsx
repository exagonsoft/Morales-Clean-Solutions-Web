"use client";

import { Slogans } from "@/data/MockData";
import { Langs } from "@/langs/langs";
import React, { useEffect, useState } from "react";

const SectionDivider = () => {
  const [index, setIndex] = useState(0);
  const [currentSlogan, setCurrentSlogan] = useState(Slogans[index]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment index, and loop back to 0 if it exceeds the array length
      setIndex((prevIndex) => (prevIndex + 1) % Slogans.length);
    }, 5000); // Change the interval (in milliseconds) as needed

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the effect runs only once during mount

  useEffect(() => {
    // Update the current slogan whenever the index changes
    setCurrentSlogan(Slogans[index]);
  }, [index]);

  return (
    <>
      <div className="hero-green-declaration-blur"></div>
      <div className="hero-green-declaration">
        <div className="flex gap-4 justify-center items-center text-white font-bold text-2xl">
          <span className="">{currentSlogan.fraise1}</span>
          <span className=" text-green-400">{currentSlogan.icon}</span>
          <span className="">{currentSlogan.fraise2}</span>
        </div>
        <span className="text-white font-bold text-4xl">
          {currentSlogan.slogan}
        </span>
      </div>
    </>
  );
};

export default SectionDivider;
