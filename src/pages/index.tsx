import Layout from "@/app/components/Layout";
import styles from "@/app/styles/Home.module.scss";
import SnapSection from "@/app/components/SnapSection";
import { useRef } from "react";
import Homepage from "@/app/components/Homepage";
import AboutMe from "@/app/components/AboutMe";
import Experience from "@/app/components/Experience";
import Projects from "@/app/components/Projects";
import ContactMe from "@/app/components/ContactMe";
const Home = () => {
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
  
  return (
    <Layout>
      <div className={`${styles.container}`}>
        <div ref={homeRef}>
          <SnapSection sectionId="1" scrollTo={scrollTo} goTo={aboutRef} content={<Homepage/>}/>
        </div>
        <div ref={aboutRef}>
          <SnapSection sectionId="2" scrollTo={scrollTo} goTo={expRef}  content={<AboutMe/>}/>
        </div>
        <div ref={expRef}>
          <SnapSection sectionId="3" scrollTo={scrollTo} goTo={projRef}  content={<Experience/>}/>
        </div>
        <div ref={projRef}>
          <SnapSection sectionId="4"  scrollTo={scrollTo} goTo={contactRef}  content={<Projects/>}/>
        </div>
        <div ref={contactRef}>
          <SnapSection sectionId="5"  content={<ContactMe/>}/>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
