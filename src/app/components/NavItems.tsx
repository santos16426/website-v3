import { useState } from "react";
import styles from '@/app/styles/NavItems.module.scss'
import { cn } from "@/app/lib/utils";
import { Menu, X } from "lucide-react";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer";
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
    return(
    <>
        <nav className="space-x-6 hidden lg:block">
            <a
                href="#about"
                onClick={() => scrollToSection("2")}
                className={cn('relative text-gray-500',styles.navLink)}
            >
                About
            </a>
            <a
                href="#experience"
                onClick={() => scrollToSection("3")}
                className={cn('relative text-gray-500',styles.navLink)}
            >
                Experience
            </a>
            <a
                href="#projects"
                onClick={() => scrollToSection("4")}
                className={cn('relative text-gray-500',styles.navLink)}
            >
                Projects
            </a>
            <a
                href="#contact"
                onClick={() => scrollToSection("5")}
                className={cn('relative text-gray-500',styles.navLink)}
            >
                Contact
            </a>
        </nav>
        
        <Drawer open={isDrawerOpen}>
            <DrawerTrigger><Menu className="block sm:hidden text-gray-700 cursor-pointer" onClick={()=>setIsDrawerOpen(true)}/></DrawerTrigger>
            <DrawerContent>
                <div className="h-screen text-black flex flex-col justify-center items-center text-center">
                    <nav className="flex flex-col justify-center items-center text-center gap-10">
                            <Logo  onClick={() =>{ 
                                scrollToSection("1")
                                setIsDrawerOpen(false)
                            }}/>
                        <a
                            href="#about"
                            onClick={() => {
                                scrollToSection("2")
                                setTimeout(()=>setIsDrawerOpen(false),250)
                            }}
                            className={cn('relative text-gray-500',styles.navLink)}
                        >
                            About
                        </a>
                            <a
                                href="#experience"
                                onClick={() => {
                                    scrollToSection("3")
                                    setTimeout(()=>setIsDrawerOpen(false),250)
                                }}
                                className={cn('relative text-gray-500',styles.navLink)}
                            >
                                Experience
                            </a>
                            <a
                                href="#projects"
                                onClick={() => {
                                    scrollToSection("4")
                                    setTimeout(()=>setIsDrawerOpen(false),250)
                                }}
                                className={cn('relative text-gray-500',styles.navLink)}
                            >
                                Projects
                            </a>
                            <a
                                href="#contact"
                                onClick={() => {
                                    scrollToSection("5")
                                    setTimeout(()=>setIsDrawerOpen(false),250)
                                }}
                                className={cn('relative text-gray-500',styles.navLink)}
                            >
                                Contact
                            </a>
                        <DrawerFooter>
                                <X className="text-gray-500" onClick={()=>setIsDrawerOpen(false)}/>
                        </DrawerFooter>
                    </nav>
                </div>
            </DrawerContent>
        </Drawer>
    </>
        
    )
}
export default NavItems