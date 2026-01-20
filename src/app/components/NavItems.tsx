import { useState } from "react";
import styles from "@/app/styles/NavItems.module.scss";
import { cn } from "@/app/lib/utils";
import { Menu, X } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import Logo from "./Logo";

const NavItems = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
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
    <>
      <nav className='space-x-6 hidden lg:block'>
        <a
          href='#about'
          onClick={() => scrollToSection("2")}
          className={cn("relative text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded", styles.navLink)}
          aria-label="Navigate to about section"
        >
          About
        </a>
        <a
          href='#projects'
          onClick={() => scrollToSection("3")}
          className={cn("relative text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded", styles.navLink)}
          aria-label="Navigate to projects section"
        >
          Projects
        </a>
        <a
          href='#experience'
          onClick={() => scrollToSection("4")}
          className={cn("relative text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded", styles.navLink)}
          aria-label="Navigate to experience section"
        >
          Experience
        </a>
        {/* <a
          href='#blogs'
          onClick={() => scrollToSection("5")}
          className={cn("relative text-primary", styles.navLink)}
        >
          Blogs
        </a> */}
        <button
          onClick={() => scrollToSection("6")}
          className={cn(
            "relative w-fit z-10 h-full border-2 border-black px-3 py-2 font-semibold rounded-full overflow-hidden transition-all ease-out duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2",
            'before:content-[""] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-black before:z-[-1] before:transition-all before:ease-out before:duration-500',
            "hover:before:w-full",
          )}
          aria-label="Navigate to contact section"
        >
          {`Let's Talk`}
        </button>
      </nav>
      <div className='block lg:hidden'>
        <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <DrawerTrigger asChild>
            <button
              className='block lg:hidden text-gray-700 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded p-1'
              aria-label="Open navigation menu"
              aria-expanded={isDrawerOpen}
            >
              <Menu />
            </button>
          </DrawerTrigger>
          <DrawerContent>
            <div className='h-screen text-black flex flex-col justify-center items-center text-center'>
              <nav className='flex flex-col justify-center items-center text-center gap-10'>
                <Logo
                  onClick={() => {
                    scrollToSection("1");
                    setIsDrawerOpen(false);
                  }}
                />
                <a
                  href='#about'
                  onClick={() => {
                    scrollToSection("2");
                    setTimeout(() => setIsDrawerOpen(false), 250);
                  }}
                  className={cn("relative text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded", styles.navLink)}
                  aria-label="Navigate to about section"
                >
                  About
                </a>
                <a
                  href='#projects'
                  onClick={() => {
                    scrollToSection("3");
                    setTimeout(() => setIsDrawerOpen(false), 250);
                  }}
                  className={cn("relative text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded", styles.navLink)}
                  aria-label="Navigate to projects section"
                >
                  Projects
                </a>
                <a
                  href='#experience'
                  onClick={() => {
                    scrollToSection("4");
                    setTimeout(() => setIsDrawerOpen(false), 250);
                  }}
                  className={cn("relative text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded", styles.navLink)}
                  aria-label="Navigate to experience section"
                >
                  Experience
                </a>
{/*
                <a
                  href='#about'
                  onClick={() => {
                    scrollToSection("5");
                    setTimeout(() => setIsDrawerOpen(false), 250);
                  }}
                  className={cn("relative text-primary", styles.navLink)}
                >
                  Blogs
                </a> */}
                <button
                  onClick={() => {
                    scrollToSection("6");
                    setTimeout(() => setIsDrawerOpen(false), 250);
                  }}
                  className={cn(
                    "relative w-fit h-full border-2 border-black px-3 py-2 font-semibold rounded-full overflow-hidden transition-all ease-out duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2",
                    'before:content-[""] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-black before:z-[-1] before:transition-all before:ease-out before:duration-500',
                    "hover:before:w-full",
                  )}
                  aria-label="Navigate to contact section"
                >
                  {`Let's Talk`}
                </button>
                <DrawerFooter>
                  <button
                    className='text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 rounded p-1'
                    onClick={() => setIsDrawerOpen(false)}
                    aria-label="Close navigation menu"
                  >
                    <X />
                  </button>
                </DrawerFooter>
              </nav>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};
export default NavItems;
