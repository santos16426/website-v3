import React from 'react'
import Logo from './Logo'
import NavItems from './NavItems'

const Header: React.FC<{ isScrolledTop?: boolean }> = ({ isScrolledTop }) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <header className="p-4 md:px-8 bg-[#E3E1DF]">
      <div className="mx-auto flex items-center justify-between">
        <Logo onClick={() => scrollToSection('1')} />
        <NavItems />
      </div>
    </header>
  )
}

export default Header
