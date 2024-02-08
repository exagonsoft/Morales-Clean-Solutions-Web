import { Langs } from "@/langs/langs";
import { FaCalculator } from "react-icons/fa";
import React from "react";

const Estimator = () => {
  return (
    <div className="flex flex-col py-4 px-6 border border-white sm:mx-0 mx-2 rounded-lg bg-cyan-900 shadow-lg">
      <h1 className="text-white font-bold sm:text-[1.5rem] text-[1.2rem] align-middle flex justify-center">
        100% Free of charges
      </h1>
      <h1 className="text-white font-bold sm:text-[1rem] text-[.8rem] align-middle flex justify-center text-center">
        Get a real estimation of the required work cost
      </h1>
      <div className="hero-buttons w-full mt-8 text-black">
        <button className="button !w-full">
          <span className="text-2xl">
            <FaCalculator />
          </span>
          {Langs["en"].globalUI.estimate}
        </button>
      </div>
    </div>
  );
};

export default Estimator;
