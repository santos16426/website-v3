import Layout from "@/app/components/_layout";
import SnapSection from "@/app/components/SnapSection";
import { useRef, useState } from "react";
import Homepage from "@/app/components/Homepage";
import Dashboard from "@/app/components/Dashboard";
import Experience from "@/app/components/Experience";
import Projects from "@/app/components/Projects";
import ContactMe from "@/app/components/ContactMe";
import FeatureBlogs from "@/app/components/FeatureBlogs";
import { ArrowUp } from "lucide-react";
import { cn } from "@/app/lib/utils";

const Home = () => {
  const [isScrolledTop, setIsScrolledTop] = useState<boolean>(true);
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const expRef = useRef<HTMLDivElement>(null);
  const projRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const blogsRef = useRef<HTMLDivElement>(null);
  const scrollTo = (section: React.RefObject<HTMLElement>) => {
    section.current &&
      section.current.scrollIntoView({
        behavior: "smooth",
      });
  };
  const handleScroll = (event: { currentTarget: { scrollTop: number } }) => {
    setIsScrolledTop(event.currentTarget.scrollTop < 400);
  };

  return (
    <Layout>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-orange-400 focus:text-white focus:rounded focus:shadow-lg"
      >
        Skip to main content
      </a>
      <div
        className='relative h-screen w-full  overflow-y-scroll font-inter'
        onScroll={handleScroll}
        id="main-content"
        tabIndex={-1}
      >
        <div className='min-h-screen' ref={homeRef}>
          <SnapSection
            sectionId='1'
            showScrollTo={isScrolledTop}
            scrollTo={scrollTo}
            goTo={aboutRef}
            content={<Homepage />}
          />
        </div>
        <div className='h-fit'>
          <SnapSection sectionId='2' content={<Dashboard />} />
        </div>
        <div className='h-fit' ref={projRef}>
          <SnapSection sectionId='3' content={<Projects />} />
        </div>
        <div className='h-fit' ref={expRef}>
          <SnapSection sectionId='4' content={<Experience />} />
        </div>
        {/* <div className='h-fit' ref={blogsRef}>
          <SnapSection sectionId='5' content={<FeatureBlogs />} />
        </div> */}
        <div className='h-fit' ref={contactRef}>
          <SnapSection sectionId='6' content={<ContactMe />} />
        </div>
      </div>
      <button
        className={cn(
          "absolute z-50 bottom-10 left-1/2 -translate-x-1/2 p-4 bg-orange-400 text-white rounded-full shadow-sm transition-all scale-100 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2",
          {
            "scale-0": isScrolledTop,
          },
        )}
        onClick={(e) => scrollTo(homeRef)}
        aria-label="Scroll to top"
        aria-hidden={isScrolledTop}
      >
        <ArrowUp aria-hidden="true" />
      </button>
    </Layout>
  );
};

export default Home;
