import SocialLinks from "@/app/components/common/SocialLinks";
import {IconGallery, PhotoGallery} from "../components/Gallery";
import GoogleMapsComponent from "../components/Maps";
import { Facebook, Github, Instagram, Linkedin, LucideIcon, MonitorSmartphone, ScanEye, UsersRound } from 'lucide-react'
import TechStack from "../components/TechStack";
import Typewriter from "typewriter-effect";
import Resources from "../components/Resources";
export type GridItemLayout = "1x1" | "1x2" | "2x1" | "2x2" | "4x2" | "2x4" | "2x3" | "4x4";

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

export const techStack: IconGalleryItem[] = [
    {
        name: 'NextJS',
        icon: Github,
        className: 'bg-[#3076EE]',
    },
    {
        name: 'Github',
        icon: Github,
        className: 'bg-black'
    },
    {
        name: 'Instagram',
        icon: Instagram,
        className:"instagram"
    },
    {
        name: 'Facebook',
        icon: Facebook,
        className: 'bg-[#0966FE]'
    }
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
export const CharBox = ({desc, icon, key, color}:{desc:string, icon:LucideIcon, key:number, color:string})=>{
    const Icon = icon;
    return(
    <div className="bg-white rounded-md flex flex-col justify-center items-center w-full text-center text-xs font-semibold shadow-xl" key={key}>    
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
        title:"1x2",
        className:"bg-slate-400 text-white flex flex-col justify-center items-center",
        children: <div className="flex flex-row gap-2">
                    <div className='bg-[#00ff00] rounded-full p-4 animate-blink'/>
                    <p className="text-white text-sm md:text-2xl font-nunito">Looking for work</p>
                </div>
    },
    {
        layout: "2x2",
        title:"Short introduction",
        className:"bg-slate-400 flex flex-col justify-center items-center",
        

    },
    {
        layout: "1x2",
        title:"photo album",
        children: <PhotoGallery images={photoAlbum} />
    },
    {
        layout: "1x1",
        title:"digital space",
        children: <div>
                    <div className="text-sm absolute bg-black text-white px-2 rounded-sm flex flex-row">
                        <span className="text-orange-500">&lt;</span>
                        <span className="text-black-500 hidden sm:flex">digital space</span>
                        <span className="text-orange-500">/&gt;</span>
                    </div>
                    <SocialLinks showLabel/>
                    </div>
    },
    {
        layout: "2x4",
        title:"description",
        children:
        <div className="flex flex-col justify-center items-center w-full h-full px-2 pt-15 pb-2  text-xl text-left font-nunito bg-black text-white">
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
        className:'bg-slate-50',
        children: <Resources/>
        
    },
    {
        layout: "1x1",
        title:"techStack",
        children:   <div className="relative h-full">
                        <div className="text-sm absolute bg-black text-white px-2 rounded-sm flex flex-row">
                            <span className="text-orange-500">&lt;</span>
                            <span className="text-black-500 hidden sm:flex">tech stack</span>
                            <span className="text-orange-500">/&gt;</span>
                        </div>
                        <TechStack/>
                    </div>
        
    },
    {
        layout: "1x1",
        title:"isipan ko pa?",
        className:"bg-slate-400 flex flex-col justify-center items-center",
        children: <div className="flex flex-row gap-2 p-2 w-full h-full">
                    {characterBox.map((char,index)=>
                        <CharBox desc={char.name} key={index} icon={char.icon} color={char.color}/>
                    )}
                    
                </div>
    },
    
]

export const MobileGridItems : GridItemInterface[] = [
    {
        layout: "2x2",
        title:"album",
        children: <PhotoGallery images={photoAlbum} />
    },
    {
        layout: "2x1",
        className:"bg-slate-400 text-white flex flex-col justify-center items-center",
        children: <div className="flex flex-row gap-2">
        <div className='bg-[#00ff00] rounded-full p-3 animate-blink'/>
        <p className="text-white text-sm md:text-2xl mt-0.5 sm:mt-0 font-nunito">Looking for work</p>
        </div>
    },
    {
        layout: "1x1",
        title:"digi space",
        children: <IconGallery items={digitalSpace} />
    },
    {
        layout: "1x1",
        title:"tech stack",
        children: <IconGallery items={techStack} />
    },
    {
        layout: "4x2",
        title:"description",
        children:
        <div className="flex flex-col justify-center items-center w-full h-full pt-5 pb-2  text-xs text-left font-nunito bg-black text-white">
        <div className="flex flex-row gap-2 absolute top-1 left-1">
            <div className='bg-[#ff423c] rounded-full p-1'/>
            <div className='bg-[#ffc13a] rounded-full p-1'/>
            <div className='bg-[#00ff00] rounded-full p-1'/>
        </div>
        <div className="w-full h-full rounded-md px-2 font-[Courier] leading-[.8rem]">
            <div className="flex flex-row gap-2"><span className="text-cyan-400">$</span><Typewriter options={{
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
    },
    {
        layout: "2x2",
        title:"2x2",
    },
    {
        layout: "2x2",
        title:"map",
        children: <GoogleMapsComponent apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}/>
    },
    {
        layout: "4x2",
        title:"2x4",
        children: <Resources/>
    },  
]