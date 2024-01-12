"use client";

import React, { useEffect, useState } from "react";
import "./navstyles.css";
import { NavLinks } from "@/settings/constants";
import { Link } from "react-scroll";
import { FaBars, FaCross } from "react-icons/fa";

const NavLink = ({ text, link }) => {
  return (
    <Link
      to={link}
      spy={true}
      smooth={true}
      className="nav-link cursor-pointer"
    >
      <span className="text-white font-bold">{text}</span>
    </Link>
  );
};

const NavSideBar = ({ toggleMenu }) => {
  return (
    <aside className="fixed right-4 z-30">
      <div className="w-screen fixed h-screen z-20 top-0 left-0 nav-blur"></div>
      <div className="flex flex-col items-center gap-4 relative z-30 top-8 p-8 bg-green-700 rounded-lg shadow-lg">
        <div
          className="text-white p-1 border-solid border rounded-md absolute right-4 top-4"
          onClick={toggleMenu}
        >
          <FaCross />
        </div>
        <br />
        <NavLink key={-1} text="Home" link="#" />
        {NavLinks.map((link, index) => (
          <NavLink key={index} text={link.text} link={link.link} />
        ))}
      </div>
    </aside>
  );
};

const NavBar = () => {
  const [atHome, setAtHome] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const inMobile = window.innerWidth <= 768 ? true : false;

  const toggleMenu = () => {
    setMenuOpen((prevState) => !menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // Check if scroll position is greater than 400px
      if (scrollY > 350) {
        setAtHome(false);
      } else {
        setAtHome(true);
      }
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {atHome ? (
        <></>
      ) : (
        <div className=" w-screen fixed h-[6rem] top-0 z-10 nav-blur nav-animation"></div>
      )}
      {menuOpen ? <NavSideBar toggleMenu={toggleMenu} /> : <></>}
      <nav
        className={`h-[5rem] flex justify-between items-center z-20 nav-width  px-4 mx-8 my-2  ${
          atHome
            ? " sticky mb-[-6rem] nav-animation-back"
            : "rounded-xl nav-bg fixed shadow-xl nav-animation"
        }`}
      >
        <Link
          to="#"
          spy={true}
          smooth={true}
          className="flex justify-center items-center gap-2 cursor-pointer"
        >
          <img src="/logo.png" alt="MCS" className="w-[4rem] rounded-full" />{" "}
          <span className="text-white font-extrabold">MCS</span>
        </Link>
        {inMobile ? (
          <div
            className="text-white p-1 border-solid border rounded-md"
            onClick={toggleMenu}
          >
            {menuOpen ? <FaCross /> : <FaBars />}
          </div>
        ) : (
          <div className="flex items-center gap-4">
            {NavLinks.map((link, index) => (
              <NavLink key={index} text={link.text} link={link.link} />
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
