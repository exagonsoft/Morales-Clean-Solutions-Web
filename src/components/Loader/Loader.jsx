import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen z-[1000]  !rounded-md">
      <div className="w-full h-full absolute inset-0 z-[5] glassmorphism"></div>
      <div className="relative w-full h-full z-[8] flex justify-center items-center">
        <span className="">
          <img
            src="/loading-54.gif"
            alt="LOADING..."
            className="w-[8rem] h-[8rem] rounded-full"
            loading="lazy"
          />
        </span>
      </div>
    </div>
  );
};

export default Loader;
