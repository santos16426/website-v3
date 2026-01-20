import { cn } from "@/app/lib/utils";
import { MoveRight } from "lucide-react";
import Header from "./Header";
const Homepage = () => {
  const scrollToSection = () => {
    const section = document.getElementById("6");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <main className={cn("relative w-full min-h-screen pb-10 flex flex-col")} role="main">
      <div className='absolute inset-0 z-[-10] h-full w-full bg-[#E3E1DF] bg-[radial-gradient(#f0f0f0_1px,transparent_1px)] [background-size:16px_16px]' aria-hidden="true" />
      <Header />
      <div className='flex flex-col-reverse sm:flex-row px-4 sm:px-6 md:px-8 lg:p-20 py-8 sm:py-12 lg:py-36 tracking-wider justify-center h-full gap-6 sm:gap-8'>
        <div className='w-full flex items-center'>
          <div className='flex flex-col items-center sm:items-start md:items-start w-full'>
            <div className='mb-4 sm:mb-5 flex w-fit items-center rounded-full gap-2 sm:gap-3 py-1.5 pl-3 pr-4 border border-zinc-600/75 enter-animation' role="status" aria-live="polite">
              <div className='relative size-3' aria-hidden="true">
                <div className='absolute size-full animate-ping rounded-full bg-green-300 opacity-65'></div>
                <div className='drop-shadow-green size-full rounded-full bg-green-400'></div>
              </div>
              <span className='text-xs sm:text-sm text-slate-900'>
                Available for projects
              </span>
            </div>
            <h1 className='text-lg sm:text-xl md:text-2xl lg:text-4xl font text-[#2E2D2B] text-center sm:text-left leading-relaxed sm:leading-normal'>
              {`Hi there! I'm Billy Santos `} — a Software Engineer from the
              Philippines. My expertise lies in crafting websites and mobile
              apps that seamlessly blend creativity with functionality, catering
              to the needs of various brands and agencies.
            </h1>
            <p className='text-gray-500 text-base sm:text-lg lg:text-2xl mt-6 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2 text-center sm:text-left'>
              {`If you're interested in working with me, `}
              <button
                className='text-[#2e2d2b] flex flex-row items-center cursor-pointer hover:underline underline-offset-2 bg-transparent border-none p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2e2d2b] focus-visible:ring-offset-2 rounded'
                onClick={scrollToSection}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    scrollToSection();
                  }
                }}
                aria-label="Navigate to contact section"
              >
                {`let's talk`}
                <MoveRight className='ml-1' size={18} aria-hidden="true" />
              </button>
            </p>
          </div>
        </div>
        <div className='w-full flex justify-center items-center sm:justify-end'>
          <div
            className='relative w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[450px] rounded-full lg:rounded-lg mb-4 sm:mb-5 cursor-pointer shadow-2xl transition-all hover:scale-105'
            style={{
              backgroundImage: "url(/images/profile.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            role="img"
            aria-label="Billy Santos - Software Engineer from the Philippines"
          />
        </div>
      </div>
    </main>
  );
};
export default Homepage;
