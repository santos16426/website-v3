import Layout from "@/app/components/Layout";
import styles from "@/app/styles/Home.module.scss";
import SnapSection from "@/app/components/SnapSection";
import { useRef } from "react";

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
      <div className={`container ${styles.container}`}>
        <div ref={homeRef}>
          <SnapSection sectionId="3" bgImg="/images/coffee-bg3.jpg" scrollTo={scrollTo} goTo={aboutRef}/>
        </div>
        <div ref={aboutRef}>
          <SnapSection sectionId="1" bgImg="/images/coffee-bg1.jpg" scrollTo={scrollTo} goTo={expRef}/>
        </div>
        <div ref={expRef}>
          <SnapSection sectionId="2" bgImg="/images/coffee-bg2.jpg" scrollTo={scrollTo} goTo={projRef}/>
        </div>
        <div ref={projRef}>
          <SnapSection sectionId="3" bgImg="/images/coffee-bg3.jpg" scrollTo={scrollTo} goTo={contactRef}/>
        </div>
        <div ref={contactRef}>
          <SnapSection sectionId="4" bgImg="/images/coffee-bg1.jpg"/>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
