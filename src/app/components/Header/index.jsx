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

  return (
    <header
      className={`fixed top-0 left-0 right-0 p-4 transition-all ${
        isScrolled ? "bg-slate-gray bg-opacity-75" : "bg-slate-gray"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <nav className="space-x-4">
          <a
            href="#about"
            className="text-gray-300 hover:text-gray-500 transition-colors"
          >
            About
          </a>
          <a
            href="#experience"
            className="text-gray-300 hover:text-gray-500 transition-colors"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-gray-300 hover:text-gray-500 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-gray-500 transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
