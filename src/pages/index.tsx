import Layout from "@/app/_layout";
import SnapSection from "@/app/components/SnapSection";
import { useRef, useEffect, useState, SetStateAction } from "react";
import Homepage from "@/app/components/Homepage";
import AboutMe from "@/app/components/AboutMe";
import Experience from "@/app/components/Experience";
import Projects from "@/app/components/Projects";
import ContactMe from "@/app/components/ContactMe";
const Home = () => {
  const [isScrolledTop, setIsScrolledTop] = useState<boolean>(true);
  const homeRef = useRef <HTMLDivElement>(null);
  const aboutRef = useRef <HTMLDivElement>(null);
  const expRef = useRef <HTMLDivElement>(null);
  const projRef = useRef <HTMLDivElement>(null);
  const contactRef = useRef <HTMLDivElement>(null);
  const scrollTo = (section: React.RefObject<HTMLElement>) =>{
    section.current && section.current.scrollIntoView({
      behavior: "smooth"
    })
  }
  const handleScroll = (event: { currentTarget: { scrollTop: number; }; }) => {
    setIsScrolledTop(event.currentTarget.scrollTop < 400)
  };
  
  return (
    <Layout>
      <div className='relative overflow-x-hidden overflow-y-auto overscroll-y-contain h-screen w-full' onScroll={handleScroll}>
        <div className="h-screen" ref={homeRef}>
          <SnapSection sectionId="1" showScrollTo={isScrolledTop} scrollTo={scrollTo} goTo={aboutRef} content={<Homepage/>}/>
        </div>
        <div className="h-screen" ref={aboutRef}>
          <SnapSection sectionId="2" content={<AboutMe/>}/>
        </div>
        <div className="h-screen" ref={expRef}>
          <SnapSection sectionId="3" content={<Experience/>}/>
        </div>
        <div className="h-screen" ref={projRef}>
          <SnapSection sectionId="4"  content={<Projects/>}/>
        </div>
        <div className="h-screen" ref={contactRef}>
          <SnapSection sectionId="5"  content={<ContactMe/>}/>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
