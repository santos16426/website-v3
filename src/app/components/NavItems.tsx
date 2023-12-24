import { useState } from "react";
import styles from '@/app/styles/NavItems.module.scss'
import { cn } from "@/app/lib/utils";
import { Menu } from "lucide-react";



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
        <Menu className="block sm:hidden text-gray-700 cursor-pointer" onClick={()=>setIsDrawerOpen(true)}/>
    </>
        
    )
}
export default NavItems