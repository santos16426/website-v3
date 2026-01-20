"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Linkedin, Github, Codepen, Pin, ArrowRight, Layers, Briefcase, Keyboard, Music } from "lucide-react";
import GoogleMapsComponent from "./Maps";
import { GitHubCalendar } from "react-github-calendar";
import TechStackV2 from "./TechStackV2";

type TypingBest = {
  wpm: number;
  acc: number;
};

type YouTubeVideo = {
  title: string;
  author_name: string;
};

const DEFAULT_TYPING_STATS: TypingBest = {
  wpm: 112.07,
  acc: 100,
};

const YOUTUBE_URL = 'https://www.youtube.com/watch?v=sNY_2TEmzho&list=RDpvPsJFRGleA&index=8';

const Dashboard = () => {
  const [typingStats, setTypingStats] = useState<TypingBest>(DEFAULT_TYPING_STATS);
  const [youtubeVideo, setYoutubeVideo] = useState<YouTubeVideo | null>(null);

  const scrollToSection = () => {
    const section = document.getElementById("3");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    fetch("https://api.monkeytype.com/users/lucas_gif/profile?isUid=false")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then(({ data }) => {
        if (data?.personalBests?.time?.[15]?.[0]) {
          setTypingStats({
            wpm: data.personalBests.time[15][0].wpm,
            acc: data.personalBests.time[15][0].acc,
          });
        }
      })
      .catch((error) => {
        console.error("Failed to fetch typing stats:", error);
        // Keep default values
        setTypingStats(DEFAULT_TYPING_STATS);
      });
  }, []);

  useEffect(() => {
    fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(YOUTUBE_URL)}&format=json`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setYoutubeVideo({
          title: data.title,
          author_name: data.author_name,
        });
      })
      .catch((error) => {
        console.error("Failed to fetch YouTube video info:", error);
      });
  }, []);


  return (
    <section className='relative w-full min-h-screen items-center flex flex-row justify-center bg-[#EFEEEF] pt-20' id="about" aria-label="About section">
      <div className='auto-rows-[minmax(0,1fr)] grid-cols-[repeat(36,_minmax(0,_1fr))] gap-4 flex-col max-lg:grid-cols-6 max-md:flex max-md:gap-4 md:grid w-full lg:px-40 xl:px-52 2xl:px-64 md:px-4 px-4'>
        {/* Location card - grid 1 */}
        <div className='overflow-hidden w-full relative rounded-3xl col-start-1 aspect-square col-end-11 row-start-1 row-end-[8] max-lg:col-end-3 max-lg:row-end-3 max-md:aspect-auto max-md:min-h-[300px] max-md:h-[300px]'>
          <div className='relative aspect-square h-full w-full rounded-3xl border-[#1f2b3a] max-md:border max-md:aspect-auto max-md:h-full'>
            <div className='absolute top-2 left-2 p-2 rounded-3xl text-white z-10'>
              <p className='flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950 shrink-0 py-2 pl-3 pr-4 absolute left-2 top-2 text-xs whitespace-nowrap'>
                <Pin size={14} strokeWidth={2} />
                Location
              </p>
            </div>
            <div className='absolute inset-0 w-full h-full rounded-3xl overflow-hidden'>
              <GoogleMapsComponent />
            </div>
          </div>
        </div>

        {/* Social icons - grid 2 */}
        <div className='w-full grid grid-cols-3 rounded-3xl gap-4 col-start-1 col-end-11 row-start-[7] row-end-[9] max-lg:col-end-4 max-lg:row-start-3 max-lg:row-end-4 overflow-hidden max-md:min-h-[100px]'>
          <Link
            target='_blank'
            href='https://www.linkedin.com/in/billy-santos/'
            className='aspect-square flex items-center justify-center rounded-3xl bg-[#0e1218] border border-[#1f2b3a] text-[#e5e7eb] hover:text-orange-400 max-md:min-h-[100px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2'
            aria-label="Visit LinkedIn profile"
            rel="noopener noreferrer"
          >
            <Linkedin size={52} aria-hidden="true" />
          </Link>
          <Link
            target='_blank'
            href='http://github.com/santos16426'
            className='aspect-square flex items-center justify-center rounded-3xl bg-[#0e1218] border border-[#1f2b3a] text-[#e5e7eb] hover:text-orange-400 max-md:min-h-[100px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2'
            aria-label="Visit GitHub profile"
            rel="noopener noreferrer"
          >
            <Github size={52} aria-hidden="true" />
          </Link>
          <Link
            href='https://codepen.io/joe_lucas'
            target='_blank'
            className='aspect-square flex items-center justify-center rounded-3xl bg-[#0e1218] border border-[#1f2b3a] text-[#e5e7eb] hover:text-orange-400 max-md:min-h-[100px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2'
            aria-label="Visit CodePen profile"
            rel="noopener noreferrer"
          >
            <Codepen size={52} aria-hidden="true" />
          </Link>
        </div>

        {/* Featured work - grid 3 */}
        <div className='group w-full rounded-3xl bg-[#0e1218] text-[#e5e7eb] col-start-11 col-end-[24] row-start-1 row-end-[7] max-lg:col-start-3 max-lg:col-end-7 max-lg:row-end-3 overflow-hidden'>
          <div className='relative border-[#1f2b3a] max-md:border max-h-[300px]'>
            <div className='absolute top-2 left-2 p-2 rounded-3xl text-white'>
              <p className='z-10 flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950 shrink-0 py-2 pl-3 pr-4 absolute left-2 top-2 text-xs whitespace-nowrap'>
                <Briefcase size={14} strokeWidth={2} />
                Featured Work
              </p>
            </div>
            <div className='flex h-full flex-col gap-5 px-5 pb-6 pt-4 max-md:gap-8'>
              <div className='w-full h-full flex-grow place-content-center lg:mt-16 mt-10'>
                <p className='text-3xl'>Ambag (Split Bill App)</p>
                <p className='text-sm text-slate-400 w-3/4'>
                  Split bills with friends, track expenses, and settle up.
                  Simple, fair, hassle-free.
                </p>
              </div>
              <div className='w-full h-full space-y-2'>
                <Image
                  className='group-hover:-mt-15 group-hover:transition-all group-hover:duration-700 scale-120 z-0'
                  src={"/images/projects/receipt.png"}
                  alt="Ambag Split Bill App - Receipt tracking interface showing bill splitting functionality"
                  width={2000}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Discover more projects - grid 4 */}
        <div className='min-h-5 bg-[#0e1218] text-[#e5e7eb] w-full rounded-3xl col-start-11 col-end-[24] row-start-[7] row-end-[9] max-lg:col-start-4 max-lg:col-end-7 max-lg:row-start-3 max-lg:row-end-4'>
          <Link
            href='#projects'
            onClick={scrollToSection}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 rounded"
            aria-label="Navigate to projects section"
            className='group flex flex-row justify-between gap-6 h-full items-center px-10 hover:text-orange-400'
          >
            <p className="relative font-medium after:absolute after:left-0 after:top-1/2 after:w-0 after:content-[''] after:bg-gradient-to-tr from-orange-400 to-orange-600 after:mt-3 after:h-0.5 after:transition-all after:duration-700 group-hover:after:w-full py-6">
              Discover more projects
            </p>
            <ArrowRight
              size={20}
              className='transition-all duration-300 group-hover:rotate-[90deg]'
            />
          </Link>
        </div>

        {/* Music/YouTube - grid 5 */}
        <div className='group bg-[#0e1218] w-full rounded-3xl col-start-[24] col-end-[37] row-start-1 row-end-4 max-lg:col-start-1 max-lg:col-end-4 max-lg:row-start-4 max-lg:row-end-6 overflow-hidden max-md:min-h-[250px]'>
          <Link
            href={YOUTUBE_URL}
            target='_blank'
            className='relative border-[#1f2b3a] max-md:border h-full w-full max-md:min-h-[250px] flex flex-col hover:text-orange-400'
          >
            <div className='absolute top-2 left-2 p-2 rounded-3xl text-white z-10'>
              <p className='flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950 shrink-0 py-2 pl-3 pr-4 text-xs whitespace-nowrap'>
                <Music size={14} strokeWidth={2} />
                Music
              </p>
            </div>

            <div className='flex-1 flex flex-col justify-center p-4 pt-10 h-full'>
              <div className='w-full flex items-center gap-3'>
                {/* Thumbnail */}
                <div className='flex-shrink-0'>
                  <div className='w-14 h-14 md:w-16 md:h-16 lg:w-16 lg:h-16 rounded-full overflow-hidden bg-slate-800'>
                    <Image
                      src={`https://img.youtube.com/vi/sNY_2TEmzho/maxresdefault.jpg`}
                      alt='YouTube thumbnail'
                      width={72}
                      height={72}
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>

                {/* Song Info */}
                <div className='flex-1 flex flex-col justify-center gap-0.5 min-w-0'>
                  <p className='text-[10px] text-slate-400 font-medium'>Now playing</p>
                  <p className='text-xs md:text-sm font-bold text-white truncate'>
                    {youtubeVideo?.title || 'Loading...'}
                  </p>
                  <p className='text-[10px] md:text-xs text-slate-300 truncate'>
                    {youtubeVideo?.author_name || 'YouTube'}
                  </p>
                </div>

                {/* YouTube Logo */}
                <div className='flex-shrink-0'>
                  <div className='w-6 h-6 md:w-7 md:h-7 rounded-full bg-red-600 flex items-center justify-center'>
                    <svg
                      className='w-3.5 h-3.5 md:w-4 md:h-4 text-white'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                    >
                      <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Typing speed - grid 6 */}
        <div className='group bg-[#0e1218] text-[#e5e7eb] w-full rounded-3xl col-start-[24] col-end-[37] row-start-4 row-end-[9] max-lg:col-start-4 max-lg:col-end-7 max-lg:row-start-4 max-lg:row-end-6 overflow-hidden max-md:min-h-[250px]'>
          <Link
            href='https://monkeytype.com/profile/lucas_gif'
            target='_blank'
            className='border-[#1f2b3a] max-md:border relative h-full w-full flex flex-col items-center justify-center max-md:min-h-[250px]'
          >
            <div className='absolute top-2 left-2 p-2 rounded-3xl text-white z-10'>
              <p className='flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950 shrink-0 py-2 pl-3 pr-4 text-xs whitespace-nowrap'>
                <Keyboard size={14} strokeWidth={2} />
                Typing speed
              </p>
            </div>

            {/* Background gradient number - positioned behind */}
            <p className='absolute z-0 text-[180px] md:text-[240px] lg:text-[280px] font-extrabold leading-none opacity-[0.15] text-transparent bg-clip-text bg-gradient-to-t from-[#0e1218] from-0% via-[#0e1218] via-30% to-white to-100% font-sans'>
              {typingStats.wpm.toFixed(0)}
            </p>

            {/* Main content - centered */}
            <div className='relative z-10 flex flex-col items-center justify-center gap-6 md:gap-8 px-6 py-8 md:py-0'>
              {/* Main WPM display */}
              <div className='flex items-baseline'>
                <p className='text-[64px] md:text-[88px] lg:text-[108px] font-bold text-white leading-none tracking-tight font-mono'>
                  {typingStats.wpm.toFixed(2)}
                </p>
                <p className='ml-3 text-2xl md:text-3xl lg:text-4xl text-white/90 leading-none font-sans'>wpm</p>
              </div>

              {/* Stats indicators */}
              <div className='flex gap-4 md:gap-5 items-center'>
                <div className='flex items-center gap-2 text-white/80 text-sm md:text-base font-medium font-sans'>
                  <svg
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    width='1em'
                    height='1em'
                    viewBox='0 0 256 256'
                    className='size-4 md:size-5'
                  >
                    <path
                      fill='currentColor'
                      d='M128 40a96 96 0 1 0 96 96a96.11 96.11 0 0 0-96-96m0 176a80 80 0 1 1 80-80a80.09 80.09 0 0 1-80 80m45.66-125.66a8 8 0 0 1 0 11.32l-40 40a8 8 0 0 1-11.32-11.32l40-40a8 8 0 0 1 11.32 0M96 16a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8'
                    ></path>
                  </svg>
                  <span>15s</span>
                </div>
                <div className='flex items-center gap-2 text-white/80 text-sm md:text-base font-medium font-sans'>
                  <svg
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    width='1em'
                    height='1em'
                    viewBox='0 0 256 256'
                    className='size-4 md:size-5'
                  >
                    <path
                      fill='currentColor'
                      d='M221.87 83.16A104.1 104.1 0 1 1 195.67 49l22.67-22.68a8 8 0 0 1 11.32 11.32l-96 96a8 8 0 0 1-11.32-11.32l27.72-27.72a40 40 0 1 0 17.87 31.09a8 8 0 1 1 16-.9a56 56 0 1 1-22.38-41.65l22.75-22.75a87.88 87.88 0 1 0 23.13 29.67a8 8 0 0 1 14.44-6.9'
                    ></path>
                  </svg>
                  <span>{typingStats.acc.toFixed(0)}%</span>
                </div>
                <div className='flex items-center gap-2 text-white/80 text-sm md:text-base font-medium font-sans'>
                  <svg
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    width='1em'
                    height='1em'
                    viewBox='0 0 256 256'
                    className='size-4 md:size-5'
                  >
                    <path
                      fill='currentColor'
                      d='m247.15 212.42l-56-112a8 8 0 0 0-14.31 0l-21.71 43.43A88 88 0 0 1 108 126.93A103.65 103.65 0 0 0 135.69 64H160a8 8 0 0 0 0-16h-56V32a8 8 0 0 0-16 0v16H32a8 8 0 0 0 0 16h87.63A87.76 87.76 0 0 1 96 116.35a87.7 87.7 0 0 1-19-31a8 8 0 1 0-15.08 5.34A103.6 103.6 0 0 0 84 127a87.55 87.55 0 0 1-52 17a8 8 0 0 0 0 16a103.46 103.46 0 0 0 64-22.08a104.2 104.2 0 0 0 51.44 21.31l-26.6 53.19a8 8 0 0 0 14.31 7.16L148.94 192h70.11l13.79 27.58A8 8 0 0 0 240 224a8 8 0 0 0 7.15-11.58M156.94 176L184 121.89L211.05 176Z'
                    ></path>
                  </svg>
                  <span>EN</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Github activity - grid 7 */}
        <div className='bg-[#0e1218] text-[#e5e7eb] w-full rounded-3xl overflow-hidden items-center justify-center flex flex-col col-start-1 col-end-[19] row-start-9 row-end-[14] max-lg:col-start-1 max-lg:col-end-4 max-lg:row-start-6 max-lg:row-end-9'>
          <div className='relative border-[#1f2b3a] max-md:border group flex flex-col overflow-y-scroll items-left justify-center w-full h-full px-10 items-center'>
            <div className='absolute top-2 left-2 p-2 rounded-3xl text-white'>
              <p className='z-10 flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950 shrink-0 py-2 pl-3 pr-4 absolute text-xs whitespace-nowrap'>
                <Github size={14} strokeWidth={4} />
                Github contributions
              </p>
            </div>

            <div className='w-full overflow-x-auto max-md:py-8'>
              <GitHubCalendar
                username='santos16426'
                tooltips={{
                  activity: {
                    text: (activity) =>
                      `${activity.count} contributions on ${activity.date}`,
                    placement: "right",
                    offset: 6,
                    hoverRestMs: 300,
                    transitionStyles: {
                      duration: 100,
                      common: { fontFamily: "monospace" },
                    },
                    withArrow: true,
                  },
                }}
                year={2026}
                blockSize={16}
                colorScheme={"dark"}
                fontSize={16}
                labels={{
                  totalCount: "{{count}} contributions in the last year",
                }}
              />
            </div>
          </div>
        </div>

        {/* Tech stack - grid 8 */}
        <div className='bg-[#0e1218] text-[#e5e7eb] w-full rounded-3xl overflow-hidden col-start-[19] col-end-[37] row-start-9 row-end-[14] max-lg:col-start-4 max-lg:col-end-7 max-lg:row-start-6 max-lg:row-end-9'>
          <div className='relative border-[#1f2b3a] max-md:border h-full'>
            <div className='absolute top-2 left-2 p-2 rounded-3xl text-white'>
              <p className='z-10 flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950 shrink-0 py-2 pl-3 pr-4 absolute left-2 top-2 text-xs whitespace-nowrap'>
                <Layers size={14} strokeWidth={2} />
                Tech Stack
              </p>
            </div>
            <div className='flex h-full flex-col gap-5 px-5 pb-6 pt-4 max-md:gap-8'>
              <div className='w-full h-full flex-grow place-content-center mt-10'>
                <div className='relative flex w-full flex-col items-center justify-center overflow-hidden'>
                  <div className='group flex overflow-hidden p-2 flex-row [--duration:10s]'></div>
                  <TechStackV2 />
                </div>
              </div>
              <div className='w-full h-full space-y-2'>
                <p className='text-lg'>Tech stacks I&apos;m familiar with</p>
                <p className='text-sm text-slate-400 w-3/4'>
                  Primarily focused on the JavaScript ecosystem, but always
                  eager to explore and learn new technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
