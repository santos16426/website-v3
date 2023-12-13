import React, { useState, useEffect } from "react";
import Logo from "../Logo";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollOffset = 100;
      const scrollTop = window.scrollY;

      setIsScrolled(scrollTop > scrollOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToSection = (sectionId) => {
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
      className={`z-10 fixed top-0 left-0 right-0 p-4 transition-all px-24 ${
        isScrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <nav className="space-x-4">
          <a
            href="#about"
            onClick={() => scrollToSection("2")}
            className="text-black hover:text-gray-500 transition-colors"
          >
            About
          </a>
          <a
            href="#experience"
            onClick={() => scrollToSection("3")}
            className="text-black hover:text-gray-500 transition-colors"
          >
            Experience
          </a>
          <a
            href="#projects"
            onClick={() => scrollToSection("4")}
            className="text-black hover:text-gray-500 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => scrollToSection("5")}
            className="text-black hover:text-gray-500 transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
