import SocialLinks from "@/app/components/common/SocialLinks";
import {IconGallery, PhotoGallery} from "../components/Gallery";
import GoogleMapsComponent from "../components/Maps";
import { Facebook, Github, Instagram, Linkedin, LucideIcon } from 'lucide-react'
import TechStack from "../components/TechStack";

export type GridItemLayout = "1x1" | "1x2" | "2x1" | "2x2" | "4x2" | "2x4" | "2x3" | "4x4";

export interface GridItemInterface {
    layout : GridItemLayout;
    title?: string;
    children?: React.ReactNode
}

export interface IconGalleryItem{
    name: string,
    url: string,
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


export const DesktopGridItems : GridItemInterface[] = [
    {
        layout: "2x2",
        title:"Short introduction",
    },
    {
        layout: "1x2",
        title:"photo album",
        children: <PhotoGallery images={photoAlbum} />
    },
    {
        layout: "1x2",
        title:"1x2",
    },
    {
        layout: "2x4",
        title:"description",
    },
    {
        layout: "2x3",
        title:"map",
        children: <GoogleMapsComponent apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}/>
    },
    {
        layout: "2x2",
        title:"2x2",
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
]

export const MobileGridItems : GridItemInterface[] = [
    {
        layout: "2x2",
        title:"album",
        children: <PhotoGallery images={photoAlbum} />
    },
    {
        layout: "2x1",
        title:"short desciption",
    },
    {
        layout: "1x1",
        title:"digi space",
        children: <IconGallery items={digitalSpace} />
    },
    {
        layout: "1x1",
        title:"tech stack",
    },
    {
        layout: "4x2",
        title:"description",
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
    },  
]