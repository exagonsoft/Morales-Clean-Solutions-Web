"use client";

import React from "react";
import "./navstyles.css";

const NavBar = () => {
  return (
    <nav className="h-[5rem] flex justify-between items-center fixed z-20 w-full nav-bg px-4">
      <img src="/logo.png" alt="MCS" className="w-[4rem] rounded-full" /> The NavBar
    </nav>
  );
};

export default NavBar;
