import React from "react";
import Logo from "./Logo";
import NavItems from "./NavItems";

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
      className={`z-10 fixed top-0 left-0 right-0 p-4 sm:p-8 transition-all bg-white shadow-md md:px-24`}>
      <div className="mx-auto flex items-center justify-between">
        <Logo  onClick={() => scrollToSection("1")}/>
        <NavItems/>
      </div>
    </header>
  );
};

export default Header;
