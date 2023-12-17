import React, { useState, useEffect, useRef } from "react";
import Logo from "../Logo";
import styles from './Header.module.scss'


const Header: React.FC = () => {

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
  };

  return (
    <header
      className={`z-10 fixed top-0 left-0 right-0 p-8 transition-all px-24 bg-white shadow-md`}
>
      <div className="container mx-auto flex items-center justify-between">
        <Logo  onClick={() => scrollToSection("1")}/>
        <nav className="space-x-4">
          <a
            href="#about"
            onClick={() => scrollToSection("2")}
            className={styles.navLink} // Use the styles
          >
            About
          </a>
          <a
            href="#experience"
            onClick={() => scrollToSection("3")}
            className={styles.navLink} // Use the styles
          >
            Experience
          </a>
          <a
            href="#projects"
            onClick={() => scrollToSection("4")}
            className={styles.navLink} // Use the styles
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => scrollToSection("5")}
            className={styles.navLink} // Use the styles
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
