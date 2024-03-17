import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUserDelete } from "react-icons/ai";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  const handleNavClick = (navId) => {
    setActiveNav(navId);
  };

  return (
    <nav>
      <a
        href="#"
        onClick={() => handleNavClick("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome className=" " />
      </a>
      <a
        href="#about"
        onClick={() => handleNavClick("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUserDelete className=" " />
      </a>
      <a
        href="#experience"
        onClick={() => handleNavClick("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <GiSkills />
      </a>

      <a
        href="#portfolio"
        onClick={() => handleNavClick("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <BsJournalBookmarkFill />
      </a>

      <a
        href="#contact"
        onClick={() => handleNavClick("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <RiContactsLine />
      </a>
    </nav>
  );
};

export default Nav;
