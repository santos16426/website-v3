import Layout from '@/app/components/_layout'
import SnapSection from '@/app/components/SnapSection'
import { useRef, useState } from 'react'
import Homepage from '@/app/components/Homepage'
import AboutMe from '@/app/components/AboutMe'
import Experience from '@/app/components/Experience'
import Projects from '@/app/components/Projects'
import ContactMe from '@/app/components/ContactMe'
import FeatureBlogs from '@/app/components/FeatureBlogs'
import { ArrowUp } from 'lucide-react'
import { cn } from '@/app/lib/utils'

const Home = () => {
  const [isScrolledTop, setIsScrolledTop] = useState<boolean>(true)
  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const expRef = useRef<HTMLDivElement>(null)
  const projRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const blogsRef = useRef<HTMLDivElement>(null)
  const scrollTo = (section: React.RefObject<HTMLElement>) => {
    section.current &&
      section.current.scrollIntoView({
        behavior: 'smooth',
      })
  }
  const handleScroll = (event: { currentTarget: { scrollTop: number } }) => {
    setIsScrolledTop(event.currentTarget.scrollTop < 400)
  }

  return (
    <Layout>
      <div
        className="relative h-screen w-full  overflow-y-scroll font-inter"
        onScroll={handleScroll}
      >
        <div className="h-screen" ref={homeRef}>
          <SnapSection
            sectionId="1"
            showScrollTo={isScrolledTop}
            scrollTo={scrollTo}
            goTo={aboutRef}
            content={<Homepage />}
          />
        </div>
        <div className="h-fit" ref={projRef}>
          <SnapSection sectionId="2" content={<Projects />} />
        </div>
        <div className="h-fit" ref={expRef}>
          <SnapSection sectionId="3" content={<Experience />} />
        </div>
        <div className="h-fit" ref={aboutRef}>
          <SnapSection sectionId="4" content={<AboutMe />} />
        </div>
        <div className="h-fit" ref={blogsRef}>
          <SnapSection sectionId="5" content={<FeatureBlogs />} />
        </div>
        <div className="h-fit" ref={contactRef}>
          <SnapSection sectionId="5" content={<ContactMe />} />
        </div>
      </div>
      <div
        className={cn(
          'absolute z-50 bottom-10 left-1/2 -translate-x-1/2 p-4 bg-orange-400 text-white rounded-full shadow-sm transition-all scale-100 cursor-pointer',
          {
            'scale-0': isScrolledTop,
          },
        )}
        onClick={(e) => scrollTo(homeRef)}
      >
        <div>
          <ArrowUp />
        </div>
      </div>
    </Layout>
  )
}

export default Home
