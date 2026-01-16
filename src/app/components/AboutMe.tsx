'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { DesktopGridItems, MobileGridItems } from '../config/siteConfig'
import GridItem from './GridItem'
import GoogleMapsComponent from './Maps'
import {
  ArrowRight,
  Codepen,
  Github,
  Keyboard,
  Linkedin,
  Pin,
} from 'lucide-react'
import { GitHubCalendar } from 'react-github-calendar'
import { PhotoGallery } from './Gallery'

interface GitHubRepo {
  updated_at: string
}

type TypingBest = {
  wpm: number
  acc: number
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const dayName = date.toLocaleDateString('en-US', { weekday: 'long' })
  const monthName = date.toLocaleDateString('en-US', { month: 'long' })
  const day = date.getDate()
  const year = date.getFullYear()

  const getOrdinalSuffix = (n: number): string => {
    const j = n % 10
    const k = n % 100
    if (j === 1 && k !== 11) return 'st'
    if (j === 2 && k !== 12) return 'nd'
    if (j === 3 && k !== 13) return 'rd'
    return 'th'
  }

  return `${dayName}, ${monthName} ${day}${getOrdinalSuffix(day)} ${year}`
}

const AboutMe = () => {
  const [repo, setRepo] = useState<GitHubRepo | null>(null)
  const [typingStats, setTypingStats] = useState<TypingBest | null>(null)

  useEffect(() => {
    fetch('https://api.monkeytype.com/users/lucas_gif/profile?isUid=false')
      .then((res) => res.json())
      .then(({ data }) => {
        if (data?.personalBests?.time?.[15]) {
          setTypingStats({
            wpm: data.personalBests.time[15][0].wpm,
            acc: data.personalBests.time[15][0].acc,
          })
        }
      })
  }, [])
  useEffect(() => {
    fetch('https://api.github.com/users/santos16426/repos?sort=pushed')
      .then((res) => res.json())
      .then((data) => setRepo(data[0]))
  }, [])
  const photoAlbum = [
    '/images/about/1x1/about-1.jpg',
    '/images/about/1x1/about-2.jpg',
    '/images/about/1x1/about-4.jpg',
    '/images/about/1x1/about-6.jpg',
  ]
  return (
    <div className="relative w-full items-center flex flex-row justify-center bg-[#EFEEEF]">
      <div className="auto-rows-[minmax(0,1fr)] grid-cols-[repeat(36,_minmax(0,_1fr))] gap-4 flex-col max-lg:grid-cols-6 max-md:flex max-md:gap-4 md:grid w-full lg:px-52 md:px-12 px-24">
        {/* location grid 1 */}
        <div className="overflow-hidden w-full relative rounded-3xl col-start-1 aspect-square col-end-11 row-start-1 row-end-[8] max-lg:col-end-3 max-lg:row-end-3">
          <div className="relative aspect-square h-full rounded-3xl border-[#1f2b3a] max-md:border">
            <div className="absolute top-2 left-2 p-2 rounded-3xl text-white">
              <p className="z-10 flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950 shrink-0 py-2 pl-3 pr-4 absolute left-2 top-2 text-xs no-text-wrap">
                <Pin size={14} strokeWidth={2} />
                Location
              </p>
            </div>
            <GoogleMapsComponent
              apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
            />
          </div>
        </div>
        {/* socials grid 2 */}
        <div className="w-full  grid grid-cols-3 rounded-3xl gap-4 col-start-1 col-end-11 row-start-[7] row-end-[9] max-lg:col-end-4 max-lg:row-start-3 max-lg:row-end-4 overflow-hidden">
          <div className="aspect-square flex flex-row justify-between gap-6">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/billy-santos/"
              className="min-w-full h-full flex items-center justify-center rounded-3xl bg-[#0e1218] text-[#e5e7eb] hover:text-orange-400"
            >
              <div>
                <Linkedin size={52} />
              </div>
            </Link>
            <div className="min-w-full h-full">x</div>
            <div className="min-w-full h-full">x</div>
          </div>
          <div className="aspect-square flex flex-row justify-between gap-6">
            <Link
              target="_blank"
              href="http://github.com/santos16426"
              className="min-w-full h-full flex items-center justify-center rounded-3xl bg-[#0e1218] text-[#e5e7eb] hover:text-orange-400"
            >
              <div>
                <Github size={52} />
              </div>
            </Link>
          </div>
          <div className="aspect-square flex flex-row justify-between gap-6">
            <Link
              href="https://codepen.io/joe_lucas"
              target="_blank"
              className="min-w-full h-full flex items-center justify-center rounded-3xl bg-[#0e1218] text-[#e5e7eb] hover:text-orange-400"
            >
              <div>
                <Codepen size={52} />
              </div>
            </Link>
            <div className="min-w-full h-full">x</div>
            <div className="min-w-full h-full">x</div>
          </div>
        </div>
        {/* featured work grid 3 */}
        <div className="w-full  rounded-3xl bg-[#0e1218] text-[#e5e7eb] col-start-11 col-end-[24] row-start-1 row-end-[7] max-lg:col-start-3 max-lg:col-end-7 max-lg:row-end-3 overflow-hidden">
          <div className="border-[#1f2b3a] max-md:border max-h-[300px]">
            <PhotoGallery images={photoAlbum} />
          </div>
        </div>

        {/* more projects grid 4 */}
        <div className="bg-[#0e1218] text-[#e5e7eb] w-full rounded-3xl overflow-hidden col-start-11 col-end-[24] row-start-[7] row-end-[9] max-lg:col-start-4 max-lg:col-end-7 max-lg:row-start-3 max-lg:row-end-4 ">
          <Link
            href="#projects"
            className="group flex flex-row justify-between gap-6 h-full items-center px-10 hover:text-orange-400"
          >
            <p className="relative font-medium after:absolute after:left-0 after:top-1/2 after:w-0 after:content-[''] after:bg-gradient-to-tr from-orange-400 to-orange-600 after:mt-3 after:h-0.5 after:transition-all after:duration-700 group-hover:after:w-full">
              Discover more projects
            </p>
            <ArrowRight
              size={20}
              className="transition-all duration-300 group-hover:rotate-[90deg]"
            />
          </Link>
        </div>

        {/* spotify last played grid 5 */}
        <div className="bg-red-100 w-full  rounded-3xl col-start-[24] col-end-[37] row-start-1 row-end-4 max-lg:col-start-1 max-lg:col-end-4 max-lg:row-start-4 max-lg:row-end-6 overflow-hidden">
          <div className="border-[#1f2b3a] max-md:border h-full w-full">
            {/* <PhotoGallery images={photoAlbum} /> */}
          </div>
        </div>

        {/* typing speed grid 6 */}
        <div className="bg-[#0e1218] text-[#e5e7eb] w-full  rounded-3xl col-start-[24] col-end-[37] row-start-4 row-end-[9] max-lg:col-start-4 max-lg:col-end-7 max-lg:row-start-4 max-lg:row-end-6 overflow-hidden">
          <Link
            href="https://monkeytype.com/profile/lucas_gif"
            target="_blank"
            className="border-[#1f2b3a] max-md:border relative h-full w-full"
          >
            <div className="absolute top-2 left-2 p-2 rounded-3xl text-white ">
              <p className="z-10 flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950 shrink-0 py-2 pl-3 pr-4 absolute text-xs text-nowrap">
                <Keyboard size={14} strokeWidth={4} />
                Typing speed
              </p>
            </div>
            <p className="font-display absolute z-0 w-full text-white h-full text-[196px] font-extrabold text-transparent left-1/2 top-8 -translate-x-1/2 leading-none opacity-70 bg-gradient-to-b from-[#1E293B] to-[transparent] bg-clip-text">
              {typingStats?.wpm}
            </p>
            <div className="w-full relative flex h-full flex-col justify-between overflow-hidden rounded-3xl px-8 pb-10 pt-4 max-md:gap-12">
              <div className="h-full w-full" />
              <div className="flex items-baseline">
                <p className="font-display text-[84px] font-medium leading-tight tracking-normal">
                  {typingStats?.wpm}
                </p>
                <p className="ml-2 text-2xl leading-none">wpm</p>
              </div>
              <div className="flex gap-4">
                <button data-state="closed">
                  <div className="flex items-center gap-1 tracking-wider text-slate-200">
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 256 256"
                      className="size-4 text-slate-500 group-hover:text-slate-300"
                    >
                      <path
                        fill="currentColor"
                        d="M128 40a96 96 0 1 0 96 96a96.11 96.11 0 0 0-96-96m0 176a80 80 0 1 1 80-80a80.09 80.09 0 0 1-80 80m45.66-125.66a8 8 0 0 1 0 11.32l-40 40a8 8 0 0 1-11.32-11.32l40-40a8 8 0 0 1 11.32 0M96 16a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8"
                      ></path>
                    </svg>
                    <p>15s</p>
                  </div>
                </button>
                <button data-state="closed">
                  <div className="flex items-center gap-1 tracking-wider text-slate-200">
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 256 256"
                      className="size-4 text-slate-500 group-hover:text-slate-300"
                    >
                      <path
                        fill="currentColor"
                        d="M221.87 83.16A104.1 104.1 0 1 1 195.67 49l22.67-22.68a8 8 0 0 1 11.32 11.32l-96 96a8 8 0 0 1-11.32-11.32l27.72-27.72a40 40 0 1 0 17.87 31.09a8 8 0 1 1 16-.9a56 56 0 1 1-22.38-41.65l22.75-22.75a87.88 87.88 0 1 0 23.13 29.67a8 8 0 0 1 14.44-6.9"
                      ></path>
                    </svg>
                    <p>{typingStats?.acc.toFixed(2)}%</p>
                  </div>
                </button>
                <button data-state="closed">
                  <div className="flex items-center gap-1 tracking-wider text-slate-200">
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 256 256"
                      className="size-4 text-slate-500 group-hover:text-slate-300"
                    >
                      <path
                        fill="currentColor"
                        d="m247.15 212.42l-56-112a8 8 0 0 0-14.31 0l-21.71 43.43A88 88 0 0 1 108 126.93A103.65 103.65 0 0 0 135.69 64H160a8 8 0 0 0 0-16h-56V32a8 8 0 0 0-16 0v16H32a8 8 0 0 0 0 16h87.63A87.76 87.76 0 0 1 96 116.35a87.7 87.7 0 0 1-19-31a8 8 0 1 0-15.08 5.34A103.6 103.6 0 0 0 84 127a87.55 87.55 0 0 1-52 17a8 8 0 0 0 0 16a103.46 103.46 0 0 0 64-22.08a104.2 104.2 0 0 0 51.44 21.31l-26.6 53.19a8 8 0 0 0 14.31 7.16L148.94 192h70.11l13.79 27.58A8 8 0 0 0 240 224a8 8 0 0 0 7.15-11.58M156.94 176L184 121.89L211.05 176Z"
                      ></path>
                    </svg>
                    <p>EN</p>
                  </div>
                </button>
              </div>
            </div>
          </Link>
        </div>

        {/* github contributions grid 7 */}
        <div className="bg-[#0e1218] text-[#e5e7eb] w-full rounded-3xl overflow-hidden  items-center justify-center flex flex-col col-start-1 col-end-[19] row-start-9 row-end-[14] max-lg:col-start-1 max-lg:col-end-4 max-lg:row-start-6 max-lg:row-end-9">
          <div className="relative border-[#1f2b3a] max-md:border group flex flex-col overflow-y-scroll  items-left justify-center w-full h-full px-10 items-center ">
            <div className="absolute top-2 left-2 p-2 rounded-3xl text-white ">
              <p className="z-10 flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950 shrink-0 py-2 pl-3 pr-4 absolute text-xs text-nowrap">
                <Github size={14} strokeWidth={4} />
                Github contributions
              </p>
            </div>
            {repo && (
              <div className="absolute top-5 right-2 w-full text-end px-10">
                <p className="text-nowrap">
                  <strong>Last pushed on </strong> {formatDate(repo.updated_at)}
                </p>
              </div>
            )}

            <GitHubCalendar
              username="santos16426"
              labels={{
                totalCount: '{{count}} contributions in the last year',
              }}
            />
          </div>
        </div>

        {/* tech stack grid 8 */}
        <div className="bg-[#0e1218] text-[#e5e7eb] w-full rounded-3xl overflow-hidden col-start-[19] col-end-[37] row-start-9 row-end-[14] max-lg:col-start-4 max-lg:col-end-7 max-lg:row-start-6 max-lg:row-end-9">
          <div className="border-[#1f2b3a] max-md:border">techstack</div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
