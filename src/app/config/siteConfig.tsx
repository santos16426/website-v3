import SocialLinks from '@/app/components/common/SocialLinks'
import { IconGallery, PhotoGallery } from '../components/Gallery'
import GoogleMapsComponent from '../components/Maps'
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  LucideIcon,
  MonitorSmartphone,
  ScanEye,
  UsersRound,
} from 'lucide-react'
import Slider from 'react-slick'
import Image from 'next/image'

export type GridItemLayout =
  | '1x1'
  | '1x2'
  | '2x1'
  | '2x2'
  | '4x2'
  | '2x4'
  | '2x5'
  | '2x3'
  | '3x1'
  | '3x2'
  | '4x4'
  | '4x6'
  | '4x1'

export interface GridItemInterface {
  layout: GridItemLayout
  title?: string
  children?: React.ReactNode
  className?: string
}

export interface IconGalleryItem {
  name: string
  url?: string
  icon: LucideIcon
  color?: string
  className?: string
}

const photoAlbum = [
  '/images/about/1x1/about-1.jpg',
  '/images/about/1x1/about-2.jpg',
  '/images/about/1x1/about-4.jpg',
  '/images/about/1x1/about-6.jpg',
]

export const digitalSpace: IconGalleryItem[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/billy-santos/',
    icon: Linkedin,
    className: 'bg-[#3076EE] h-full',
  },
  {
    name: 'Github',
    url: 'https://github.com/santos16426',
    icon: Github,
    className: 'bg-black h-full',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/lucas.gif/',
    icon: Instagram,
    className: 'instagram h-full',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/joeee.lucas',
    icon: Facebook,
    className: 'bg-[#0966FE] h-full',
  },
]

const iconPath = '/images/icons/'
const techStackList: {
  name: string
  iconPath: string
  className?: string
}[] = [
  {
    name: 'NextJS',
    iconPath: iconPath + 'nextjs.svg',
  },
  {
    name: 'TypeScript',
    iconPath: iconPath + 'typescript.svg',
  },
  {
    name: 'React',
    iconPath: iconPath + 'react.svg',
  },
  {
    name: 'NodeJS',
    iconPath: iconPath + 'nodejs.svg',
  },
  {
    name: 'Tailwind',
    iconPath: iconPath + 'tailwind.svg',
  },
  {
    name: 'SASS',
    iconPath: iconPath + 'sass.svg',
  },
  {
    name: 'CSS',
    iconPath: iconPath + 'css.svg',
  },
  {
    name: 'HTML',
    iconPath: iconPath + 'html.svg',
  },
  {
    name: 'Javascript',
    iconPath: iconPath + 'javascript.svg',
  },
  {
    name: 'Flutter',
    iconPath: iconPath + 'flutter.svg',
  },
  {
    name: 'Spring Boot',
    iconPath: iconPath + 'spring.svg',
  },
  {
    name: 'NetSuite',
    iconPath: iconPath + 'netsuite.svg',
  },
]
export interface CharacterType {
  name: string
  icon: LucideIcon
  color: string
}
export const characterBox: CharacterType[] = [
  {
    name: 'Detail Oriented',
    icon: ScanEye,
    color: 'green',
  },
  {
    name: 'Team Player',
    icon: UsersRound,
    color: 'orange',
  },
  {
    name: 'Responsive Designs',
    icon: MonitorSmartphone,
    color: 'blue',
  },
]
export const CharBox = ({
  desc,
  icon,
  index,
  color,
}: {
  desc: string
  icon: LucideIcon
  index: number
  color: string
}) => {
  const Icon = icon
  return (
    <div
      className="bg-white rounded-md flex flex-col justify-center items-center w-full text-center text-xs font-semibold"
      key={index}
    >
      <Icon color={color} />
      {desc}
    </div>
  )
}

export const DesktopGridItems: GridItemInterface[] = [
  {
    layout: '1x1',
    title: 'techStack',
    className: 'rounded-md',
    children: (
      <div className="relative h-full">
        <Slider
          infinite
          slidesToScroll={1}
          slidesToShow={4.2}
          autoplaySpeed={500}
          autoplay
        >
          {techStackList.map((tech, index) => (
            <div
              className="mt-2 tech-slide flex py-4 flex-col justify-between items-center text-center h-full"
              key={index}
            >
              <Image
                src={tech.iconPath}
                width={25}
                height={25}
                alt={tech.name}
                className="object-cover shadow-lg rounded-full w-8 h-8 bg-transparent mb-1 border-2 border-orange-400"
              />
              <p className="text-[.6rem] line-clamp-1">{tech.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    ),
  },
  {
    className: 'rounded-md',
    layout: '1x2',
    title: 'photo album',
    children: <PhotoGallery images={photoAlbum} />,
  },

  {
    layout: '2x5',
    title: 'description',
    className: 'rounded-md',
    children: (
      <div className="flex flex-col justify-center items-center w-full h-full px-2 pt-5 pb-2 text-lg text-left">
        <div className="flex flex-row gap-2 absolute top-5 left-5">
          <div className="bg-[#ff423c] rounded-full p-2" />
          <div className="bg-[#ffc13a] rounded-full p-2" />
          <div className="bg-[#00ff00] rounded-full p-2" />
        </div>
        <div className="w-full h-full rounded-md p-2 py-10">
          <div>
            <span className="text-orange-400 !font-[Courier] ">$ </span>
            <span className="!font-[Courier]">npm run dev</span>
            <span className="text-orange-400 !font-[Courier]">
              {' '}
              billyjoe.tsx
            </span>
            <br />
            <div className="mt-3 flex flex-row gap-2">
              <span className="text-orange-400 !font-[Courier]">$</span>
              <span className="!font-[Courier]">
                {`Hey there! I'm a `}{' '}
                <span className="inline font-semibold bg-gradient-to-b from-transparent from-50% to-50% to-orange-300 !font-[Courier]">
                  Software Engineer
                </span>{' '}
                {`based in the Philippines, with over 7 years of hands-on experience in crafting and maintaining software. Fluent in various programming languages, I enjoy coming up with creative solutions for complex problems. I thrive on continual learning, navigating the ever-evolving realm of software engineering with a fervor for achieving excellence. Let's code and have some fun on this exciting journey!`}
                <span className="-ml-1 w-2 h-3 bg-orange-400 animate-pulse duration-500 bg-opacity-50">
                  |
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    layout: '1x1',
    title: 'digital space',
    className: 'rounded-md text-primary',
    children: <SocialLinks showLabel className="" />,
  },
  {
    layout: '2x3',
    title: 'map',
    className: 'rounded-md',
    children: (
      <GoogleMapsComponent apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY} />
    ),
  },
]

export const MobileGridItems: GridItemInterface[] = [
  {
    layout: '3x1',
    className: 'rounded-md',
    children: (
      <div className="relative h-full">
        <Slider
          infinite
          slidesToScroll={1}
          slidesToShow={3.2}
          autoplay
          autoplaySpeed={500}
          responsive={[
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 6.3,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3.9,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          {techStackList.map((tech, index) => (
            <div
              className="tech-slide flex py-4 flex-col justify-between items-center text-center h-full"
              key={index}
            >
              <Image
                src={tech.iconPath}
                width={25}
                height={25}
                alt={tech.name}
                className="object-cover shadow-lg rounded-full w-10 h-10 bg-transparent mb-1 border-2 border-orange-400"
              />
              <p className="text-md line-clamp-1">{tech.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    ),
  },
  {
    layout: '1x1',
    title: 'digi space',
    className: 'rounded-md h-full',
    children: <IconGallery items={digitalSpace} />,
  },
  {
    layout: '2x2',
    title: 'album',
    className: 'rounded-md',
    children: <PhotoGallery images={photoAlbum} />,
  },
  {
    layout: '2x2',
    title: 'map',
    className: 'rounded-md',
    children: (
      <GoogleMapsComponent apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY} />
    ),
  },
  {
    layout: '4x6',
    title: 'description',
    className: 'rounded-md',
    children: (
      <div className="flex flex-col justify-center items-center w-full h-full text-md text-left">
        <div className="flex flex-row gap-2 absolute top-3 left-3">
          <div className="bg-[#ff423c] rounded-full p-1" />
          <div className="bg-[#ffc13a] rounded-full p-1" />
          <div className="bg-[#00ff00] rounded-full p-1" />
        </div>
        <div className="w-full h-full rounded-md px-2 py-8 font-[Courier] leading-2  text-[1.3em]">
          <div>
            <span className="text-orange-400">$ </span>npm run dev
            <span className="text-orange-400"> billyjoe.tsx</span>
            <br />
            <div className="mt-3 flex flex-row gap-2">
              <span className="text-orange-400">$</span>
              <span>
                {`Hey there! I'm a Software Engineer based in the Philippines, with over 7 years of hands-on experience in crafting and maintaining software. Fluent in various programming languages, I enjoy coming up with creative solutions for complex problems. I thrive on continual learning, navigating the ever-evolving realm of software engineering with a fervor for achieving excellence. Let's code and have some fun on this exciting journey!`}
                <span className="-ml-1 w-2 h-2 bg-orange-400 animate-pulse duration-500 bg-opacity-50">
                  |
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
]
