import SocialLinks from "@/app/components/common/SocialLinks";
import {IconGallery, PhotoGallery} from "../components/Gallery";
import GoogleMapsComponent from "../components/Maps";
import { Facebook, Github, Instagram, Linkedin, LucideIcon, MonitorSmartphone, ScanEye, UsersRound } from 'lucide-react'
import TechStack from "../components/TechStack";
import Typewriter from "typewriter-effect";
import Resources from "../components/Resources";
import Slider, { Settings } from 'react-slick';
import Image from 'next/image'
import Link from 'next/link'
import HoverText from "../components/HoverText";

export type GridItemLayout = "1x1" | "1x2" | "2x1" | "2x2" | "4x2" | "2x4" | "2x3" | "4x4" | "4x1";

export interface GridItemInterface {
    layout : GridItemLayout;
    title?: string;
    children?: React.ReactNode;
    className?: string;
}

export interface IconGalleryItem{
    name: string,
    url?: string,
    icon: LucideIcon,
    color?: string,
    className?:string,
}

const photoAlbum = [
    "/images/about/1x1/about-1.jpg",
    "/images/about/1x1/about-2.jpg",
    "/images/about/1x1/about-4.jpg",
    "/images/about/1x1/about-6.jpg",
]

export const digitalSpace: IconGalleryItem[] = [
    {
        name: 'LinkedIn',
        url: "https://www.linkedin.com/in/billy-santos/",
        icon: Linkedin,
        className: 'bg-[#3076EE]',
    },
    {
        name: 'Github',
        url: "https://github.com/santos16426",
        icon: Github,
        className: 'bg-black'
    },
    {
        name: 'Instagram',
        url: "https://www.instagram.com/lucas.gif/",
        icon: Instagram,
        className:"instagram"
    },
    {
        name: 'Facebook',
        url: "https://www.facebook.com/joeee.lucas",
        icon: Facebook,
        className: 'bg-[#0966FE]'
    }
]

const iconPath = '/images/icons/'
const techStackList: {
    name: string,
    iconPath: string,
    className?:string,
}[] = [
    {
        name: "NextJS",
        iconPath: iconPath + 'nextjs.svg',
    },
    {
        name: "TypeScript",
        iconPath: iconPath + 'typescript.svg',
    },
    {
        name: "React",
        iconPath: iconPath + 'react.svg',
    },
    {
        name: "NodeJS",
        iconPath: iconPath + 'nodejs.svg',
    },
    {
        name: "Tailwind",
        iconPath: iconPath + 'tailwind.svg',
    },
    {
        name: "SASS",
        iconPath: iconPath + 'sass.svg',
    },
    {
        name: "CSS",
        iconPath: iconPath + 'css.svg',
    },
    {
        name: "HTML",
        iconPath: iconPath + 'html.svg',
    },
    {
        name: "Javascript",
        iconPath: iconPath + 'javascript.svg',
    },
    {
        name: "Flutter",
        iconPath: iconPath + 'flutter.svg',
    },
    {
        name: "Spring Boot",
        iconPath: iconPath + 'spring.svg',
    },
    {
        name: "NetSuite",
        iconPath: iconPath + 'netsuite.svg',
    },
]
export interface CharacterType {
    name: string,
    icon: LucideIcon,
    color: string,
}
export const characterBox:CharacterType[] = [
    {
        name:'Detail Oriented',
        icon: ScanEye,
        color:'green'    
    },
    {
        name:'Team Player',
        icon: UsersRound,
        color:'orange'    
    },
    {
        name:'Responsive Designs',
        icon: MonitorSmartphone,
        color:'blue'
    },
]
export const CharBox = ({desc, icon, index, color}:{desc:string, icon:LucideIcon, index:number, color:string})=>{
    const Icon = icon;
    return(
    <div className="bg-white rounded-md flex flex-col justify-center items-center w-full text-center text-xs font-semibold shadow-xl" key={index}>    
        <Icon color={color}/>
        {desc}
    </div>
)}

export interface LearningPathItem {
    thumbnail: string[],
    title: string,
    url:string,
    status: number
}

export const learningPath:LearningPathItem[] = [
    {
        thumbnail:['/images/icons/typescript.svg'],
        title:"Typescript: The Complete Developer's Guide",
        url:'https://www.udemy.com/course/typescript-the-complete-developers-guide/',
        status: 100
    },
    {
        thumbnail:['/images/icons/java.svg', '/images/icons/spring.svg'],
        title:"Java Spring Boot - Complete Course Bundle",
        url:'https://www.udemy.com/course/java-spring-boot-complete-course-bundle/',
        status: 50
    },
    {
        thumbnail:['/images/icons/mongo.svg', '/images/icons/express.svg', '/images/icons/nodejs.svg'],
        title:"Node.js, Express, MongoDB & More: The Complete Bootcamp 2024",
        url:'https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/',
        status: 20
    },
]

export const DesktopGridItems : GridItemInterface[] = [
    {
        layout: "1x1",
        title:"techStack",
        children:<TechStack/>
    },
    {
        layout: "2x2",
        title:"Short introduction",
        className:'bg-slate-600',
        children:
        <>
        <div className=" flex flex-row gap-5 items-center justify-center mt-12 cursor-pointer">
            <HoverText string="<"/>
            <HoverText string="Billy"/>
            <HoverText string="Joe"/>
            <HoverText string="Santos"/>
            <HoverText string="/>"/>

        </div>
        </>
        

    },
    {
        layout: "1x2",
        title:"photo album",
        children: <PhotoGallery images={photoAlbum} />
    },
    {
        layout: "1x1",
        title:"digital space",
        className:"bg-slate-600 text-white",
        children: <SocialLinks showLabel className=""/>
    },
    {
        layout: "2x4",
        title:"description",
        children:
        <div className="flex flex-col justify-center items-center w-full h-full px-2 pt-15 pb-2  text-xl text-left font-nunito bg-slate-600 text-white">
            <div className="flex flex-row gap-2 absolute top-5 left-5">
                <div className='bg-[#ff423c] rounded-full p-2'/>
                <div className='bg-[#ffc13a] rounded-full p-2'/>
                <div className='bg-[#00ff00] rounded-full p-2'/>
            </div>
            <div  className="w-full h-full rounded-md p-10 font-[Courier] leading-6">
            <div>
                <span className="text-cyan-400">$ </span>node<span className="text-green-400"> billyjoe.tsx</span> 
                <br />
                <div className="mt-3 flex flex-row gap-2"><span className="text-cyan-400">$</span><Typewriter options={{
                    strings:["Hey there! I'm a Software Engineer based in the Philippines, with over 5 years of hands-on experience in crafting and maintaining software. Fluent in various programming languages, I enjoy coming up with creative solutions for complex problems. I thrive on continual learning, navigating the ever-evolving realm of software engineering with a fervor for achieving excellence. Let's code and have some fun on this exciting journey!"],
                    autoStart:true,
                    loop:true,
                    delay: 25,
                    deleteSpeed:10,
                    cursorClassName:"w-2 bg-green-400"
                    
                }}/>
                </div>
            </div>
            </div>
        </div>

    },
    {
        layout: "2x3",
        title:"map",
        children: <GoogleMapsComponent apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}/>
    },
    {
        layout: "2x2",
        title:"2x2",
        children: <Resources/>
        
    },
    {
        layout: "1x1",
        title:"1x2",
        className:"bg-slate-600 text-white flex flex-col justify-center items-center",
        children: <div className="flex flex-row gap-2">
                    <div className='bg-[#00ff00] rounded-full p-4 animate-blink blur-sm'/>
                    <p className="text-white text-sm md:text-2xl font-nunito">Looking for work</p>
                </div>
    },
    {
        layout: "1x1",
        className:"bg-slate-600 flex flex-col justify-center items-center",
        children: 
                <div className="flex flex-row gap-2 p-2 w-full h-full">
                    {characterBox.map((char,index)=>
                        <CharBox desc={char.name} key={index} index={index} icon={char.icon} color={char.color}/>
                    )}
                    
                </div>
    },
    
]

export const MobileGridItems : GridItemInterface[] = [
    {
        layout: "4x1",
        children:
        <div className="relative h-full">
            <Slider 
                infinite
                slidesToScroll={3}
                slidesToShow={7.2}
            >
            {techStackList.map((tech,index)=>(
                <div className="tech-slide flex py-4 flex-col justify-between items-center text-center h-full" key={index}>
                    <Image src={tech.iconPath} width={25} height={25} alt={tech.name} className="object-cover shadow-lg rounded-full w-8 h-8 bg-transparent mb-1 border-2 border-orange-400" />
                    <p className="text-[.6rem] line-clamp-1">{tech.name}</p>
                </div>
            ))}
        </Slider>
        </div>
    },
    {
        layout: "2x2",
        title:"album",
        children: <PhotoGallery images={photoAlbum} />
    },
    {
        layout: "2x2",
        title:"map",
        children: <GoogleMapsComponent apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}/>
    },
    {
        layout: "4x4",
        title:"description",
        children:
        <div className="flex flex-col justify-center items-center w-full h-full text-sm text-left font-nunito bg-slate-600 text-white">
            <div className="flex flex-row gap-2 absolute top-3 left-3">
                <div className='bg-[#ff423c] rounded-full p-1'/>
                <div className='bg-[#ffc13a] rounded-full p-1'/>
                <div className='bg-[#00ff00] rounded-full p-1'/>
            </div>
            <div  className="w-full h-full rounded-md px-2 py-8 font-[Courier] leading-2">
            <div>
                <span className="text-cyan-400">$ </span>node<span className="text-green-400"> billyjoe.tsx</span> 
                <br />
                <div className="mt-3 flex flex-row gap-2"><span className="text-cyan-400">$</span><Typewriter options={{
                    strings:["Hey there! I'm a Software Engineer based in the Philippines, with over 5 years of hands-on experience in crafting and maintaining software. Fluent in various programming languages, I enjoy coming up with creative solutions for complex problems. I thrive on continual learning, navigating the ever-evolving realm of software engineering with a fervor for achieving excellence. Let's code and have some fun on this exciting journey!"],
                    autoStart:true,
                    loop:true,
                    delay: 25,
                    deleteSpeed:10,
                    cursorClassName:"w-2 bg-green-400"
                    
                }}/>
                </div>
            </div>
            </div>
        </div>
    },
    {
        layout: "4x2",
        title:"2x4",
        className:"bg-slate-600 p-2",
        children:
        <>
        <p className="text-xl text-white font-bold mb-3">Resources</p>
        <div className="flex flex-col px-3">
            {learningPath.map((res, index)=>(
                <Link key={index} href={res.url} target="_blank" className="border-b-[1px] last:border-b-0 border-orange-200">
                <div className="flex flex-row gap-2 p-1 text-left">
                    <div className="flex flex-row min-w-[90px] gap-2">{res.thumbnail.map((img,index)=><Image key={index} alt={img} src={img} width={20} height={20}/>)}</div>
                    <div><p className="line-clamp-1 text-white font-bold">{res.title}</p></div>
                    <div className="text-right text-white">{res.status<100?`${res.status}%`:'Done'}</div>
                </div>
                </Link>
            ))}
        </div>
        </>
    },
    {
        layout: "2x2",
        title:"2x2",
        
    },
    {
        layout: "2x1",
        title:"digi space",
        className:'bg-slate-600',
        children: <IconGallery items={digitalSpace} />
    },
    {
        layout: "2x1",
        className:"bg-slate-600 text-white flex flex-col justify-center items-center",
        children: 
        <div className="flex flex-row gap-1 justify-center items-center text-center">
            <div className='bg-[#00ff00] blur-sm mr-2 rounded-full p-2 w-1 h-1 animate-blink text-center'/>
            <p className="text-white text-xs font-nunito ">Looking for work</p>
        </div>
        
    },
     
]