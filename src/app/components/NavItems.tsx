import { useState } from 'react'
import styles from '@/app/styles/NavItems.module.scss'
import { cn } from '@/app/lib/utils'
import { Menu, X } from 'lucide-react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './ui/drawer'
import Logo from './Logo'

const NavItems = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
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
    <>
      <nav className="space-x-6 hidden lg:block">
        <a
          href="#projects"
          onClick={() => scrollToSection('2')}
          className={cn('relative text-primary', styles.navLink)}
        >
          Projects
        </a>
        <a
          href="#experience"
          onClick={() => scrollToSection('3')}
          className={cn('relative text-primary', styles.navLink)}
        >
          Experience
        </a>
        <a
          href="#about"
          onClick={() => scrollToSection('4')}
          className={cn('relative text-primary', styles.navLink)}
        >
          About
        </a>
        <a href="#contact" onClick={() => scrollToSection('5')}>
          <button
            className={cn(
              'relative w-fit z-10 h-full border-2 border-black px-3 py-2 font-semibold rounded-full overflow-hidden transition-all ease-out duration-300 hover:text-white',
              'before:content-[""] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-black before:z-[-1] before:transition-all before:ease-out before:duration-500',
              'hover:before:w-full',
            )}
          >
            {`Let's Talk`}
          </button>
        </a>
      </nav>
      <div className="block lg:hidden">
        <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <DrawerTrigger>
            <Menu
              className="block lg:hidden text-gray-700 cursor-pointer"
              onClick={() => setIsDrawerOpen(true)}
            />
          </DrawerTrigger>
          <DrawerContent>
            <div className="h-screen text-black flex flex-col justify-center items-center text-center">
              <nav className="flex flex-col justify-center items-center text-center gap-10">
                <Logo
                  onClick={() => {
                    scrollToSection('1')
                    setIsDrawerOpen(false)
                  }}
                />
                <a
                  href="#projects"
                  onClick={() => {
                    scrollToSection('2')
                    setTimeout(() => setIsDrawerOpen(false), 250)
                  }}
                  className={cn('relative text-primary', styles.navLink)}
                >
                  Projects
                </a>
                <a
                  href="#experience"
                  onClick={() => {
                    scrollToSection('3')
                    setTimeout(() => setIsDrawerOpen(false), 250)
                  }}
                  className={cn('relative text-primary', styles.navLink)}
                >
                  Experience
                </a>
                <a
                  href="#about"
                  onClick={() => {
                    scrollToSection('4')
                    setTimeout(() => setIsDrawerOpen(false), 250)
                  }}
                  className={cn('relative text-primary', styles.navLink)}
                >
                  About
                </a>
                <a
                  href="#contact"
                  onClick={() => {
                    scrollToSection('5')
                    setTimeout(() => setIsDrawerOpen(false), 250)
                  }}
                >
                  <button
                    className={cn(
                      'relative w-fit h-full border-2 border-black px-3 py-2 font-semibold rounded-full overflow-hidden transition-all ease-out duration-300 hover:text-white',
                      'before:content-[""] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-black before:z-[-1] before:transition-all before:ease-out before:duration-500',
                      'hover:before:w-full',
                    )}
                  >
                    {`Let's Talk`}
                  </button>
                </a>
                <DrawerFooter>
                  <X
                    className="text-primary"
                    onClick={() => setIsDrawerOpen(false)}
                  />
                </DrawerFooter>
              </nav>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  )
}
export default NavItems
