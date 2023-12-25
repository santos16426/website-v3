import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/app/components/ui/tooltip"
import { cn } from '@/app/lib/utils'
import { Facebook, Github, Instagram, Linkedin, LucideIcon } from 'lucide-react'
export interface DigitalSpaceItem{
    name: string,
    url: string,
    icon: LucideIcon,
    color?: string,
    className?:string,
}


const SocialLinks = ({showLabel = false}:{showLabel?:boolean}) => {
    const digitalSpace: DigitalSpaceItem[]= [
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
    const generateToolTip = ({
        content,
        description,
        key,
    }:{
        content: React.ReactNode, 
        description: string,
        key: number,
    }) =>(
        <TooltipProvider key={key}>
            <Tooltip>
                <TooltipTrigger>{content}</TooltipTrigger>
                <TooltipContent>
                    <p>{description}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
    return(
        <div className='p-[20px] text-2xl flex flex-row gap-4 justify-center'>
            {digitalSpace.map((item,index)=>(
                generateToolTip({
                    content: <a target='_blank' href={item.url} key={index} className='flex flex-col gap-2 items-center transform hover:scale-150'><item.icon></item.icon><p className={cn(!showLabel && 'hidden','text-xs')}>{item.name}</p></a>,
                    description: item.name,
                    key: index
                })
            ))}
        </div>)
}

export default SocialLinks