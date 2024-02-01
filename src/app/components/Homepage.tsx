import { cn } from '@/app/lib/utils'
import { MoveRight } from 'lucide-react'
import Header from './Header'
const Homepage = () => {
  const scrollToSection = () => {
    const section = document.getElementById('5')
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
  return (
    <div className={cn('relative w-full h-screen')}>
      <Header />
      <div className=" flex flex-col-reverse sm:flex-row p-4 lg:p-20 sm:py-4 lg:py-36 tracking-wider justify-center">
        <div className="w-full flex items-center">
          <div className="">
            <p className="text-2xl sm:text-xl lg:text-4xl font text-[#2E2D2B] ">
              {`Hi there! I'm Billy Santos `} — a Software Engineer from the
              Philippines. My expertise lies in crafting websites and mobile
              apps that seamlessly blend creativity with functionality, catering
              to the needs of various brands and agencies.
            </p>
            <p className="text-gray-500 text-lg lg:text-2xl mt-10 lg:flex gap-2">
              {`If you're interested in working with me, `}
              <span
                className="text-[#2e2d2b] flex flex-row items-center cursor-pointer hover:underline underline-offset-2"
                onClick={scrollToSection}
              >
                {`let's talk`}
                <MoveRight />
              </span>
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div
            className="relative w-[300px] sm:w-[280px] sm:h-[280px] lg:w-[350px] h-[300px] lg:h-[450px] rounded-full lg:rounded-lg mb-5 cursor-pointer shadow-2xl transition-all hover:scale-105"
            style={{
              backgroundImage: 'url(/images/profile.jpg)',
              backgroundSize: 'cover',
            }}
          />
        </div>
      </div>
    </div>
  )
}
export default Homepage
