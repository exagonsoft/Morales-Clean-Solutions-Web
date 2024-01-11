"use client";

import React from "react";
import "./navstyles.css";

const NavBar = () => {
  return (
    <nav className="h-[5rem] flex justify-between items-center fixed z-20 w-full nav-bg px-4">
      <div className="flex justify-center items-center gap-2">
      <img src="/logo.png" alt="MCS" className="w-[4rem] rounded-full" /> <span className="text-white font-extrabold">MCS</span>
      </div>
      <div className=""></div>
       The NavBar
    </nav>
  );
};

export default NavBar;
