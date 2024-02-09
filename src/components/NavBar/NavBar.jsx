"use client";

import React, { useEffect, useState } from "react";
import "./navstyles.css";
import { Dimensions, NavLinks } from "@/settings/constants";
import { Link } from "react-scroll";
import { FaBars, FaCross, FaWindowClose } from "react-icons/fa";
import { motion } from "framer-motion";

const NavLink = ({
  text,
  link,
  toggleMenu = null,
  onSelected,
  textColor = 'text-white',
}) => {
  return (
    <Link
      to={link}
      spy={true}
      smooth={true}
      className="nav-link cursor-pointer"
      onClick={() => {
        if (toggleMenu) {
          toggleMenu();
        }
        onSelected(text);
      }}
    >
      <span
        className={`${textColor} font-bold`}
      >
        {text}
      </span>
    </Link>
  );
};

const NavSideBar = ({ toggleMenu, handleSectionSelection, selected }) => {
  const transition = { type: "spring", duration: 1 };

  return (
    <div className="fixed right-4 z-30">
      <div className="w-screen fixed h-screen z-20 top-0 left-0 nav-blur"></div>
      <motion.div
        initial={{ top: "-150px" }}
        whileInView={{ top: "2rem" }}
        transition={{ ...transition, type: "tween" }}
        className="flex flex-col items-center gap-4 relative z-30 top-8 p-8 bg-green-700 rounded-lg shadow-lg"
      >
        <div
          className="text-white p-1 border-solid border rounded-md absolute right-4 top-4"
          onClick={toggleMenu}
        >
          <FaWindowClose />
        </div>
        <br />
        <NavLink
          key={-1}
          text="Home"
          link="#"
          toggleMenu={toggleMenu}
          onSelected={handleSectionSelection}
        />
        {NavLinks.map((link, index) => (
          <NavLink
            key={index}
            text={link.text}
            link={link.link}
            toggleMenu={toggleMenu}
            onSelected={handleSectionSelection}
            textColor={selected === link.text ? 'text-[text-black]' : 'text-white'}
          />
        ))}
      </motion.div>
    </div>
  );
};

const NavBar = ({
  freezeScreen,
  unFreezeScreen,
  selectedSection,
  handleSectionSelection,
}) => {
  const [atHome, setAtHome] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [inMobile, setInMobile] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !menuOpen);
    if (!menuOpen) {
      freezeScreen();
    } else {
      unFreezeScreen();
    }
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
  }, []);

  useEffect(() => {
    console.log(selectedSection);
  }, [selectedSection])
  

  return (
    <>
      {atHome ? (
        <></>
      ) : (
        <div className=" w-screen fixed h-[6rem] top-0 z-10 nav-blur nav-animation"></div>
      )}
      {menuOpen ? (
        <NavSideBar
          toggleMenu={toggleMenu}
          handleSectionSelection={handleSectionSelection}
          selected={selectedSection}
        />
      ) : (
        <></>
      )}
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
          onClick={() => handleSectionSelection("")}
        >
          <img src="/logo.webp" alt="MHS" className="w-[4rem] rounded-full" loading="lazy"/>{" "}
          <span className="text-white font-extrabold">MHS</span>
        </Link>
        {inMobile ? (
          <div
            className="text-white p-1 border-solid border rounded-md"
            onClick={toggleMenu}
          >
            {menuOpen ? <FaWindowClose /> : <FaBars />}
          </div>
        ) : (
          <div className="flex items-center gap-4">
            {NavLinks.map((link, index) => (
              <NavLink
                key={index}
                text={link.text}
                link={link.link}
                onSelected={handleSectionSelection}
                textColor={selectedSection === link.text ? 'text-[var(--color-primary)]' : 'text-white'}
              />
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
