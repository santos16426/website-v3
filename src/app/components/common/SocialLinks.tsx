import { Github, Instagram, Linkedin } from 'lucide-react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/app/components/ui/tooltip"
import { digitalSpace } from '@/app/config/siteConfig'
const generateToolTip = ({
        content,
        description
    }:{
        content: React.ReactNode, 
        description: string
    }) =>{
    return(
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>{content}</TooltipTrigger>
                <TooltipContent>
                    <p>{description}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

const SocialLinks = () => (
<div className='p-[20px] text-2xl flex flex-row gap-4 '>
    {digitalSpace.map((item,index)=>(
        generateToolTip({
            content: <a target='_blank' href={item.url} key={index}><item.icon></item.icon></a>,
            description: item.name
        })
    ))}
</div>)

export default SocialLinks