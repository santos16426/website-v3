import { DesktopGridItems, MobileGridItems } from "../config/siteConfig";
import GridItem from "./GridItem";

const AboutMe = () => {
    return(
        <div className='relative w-full h-screen bg-muted overflow-y-auto'>
            <div className='hidden sm:grid  w-full h-full p-40 grid-cols-4 auto-rows-[90px] gap-4'>
                {DesktopGridItems.map((item,index)=>{
                    return<GridItem key={index} size={item.layout}><p>{item.title}</p></GridItem>
                })}
            </div>
            <div className='grid sm:hidden w-full h-full p-8 py-24 grid-cols-4 auto-rows-[85px] gap-4'>
                {MobileGridItems.map((item,index)=>{
                    return<GridItem key={index} size={item.layout}><p>{item.title}</p></GridItem>
                })}
            </div>
        </div>
    )
}

export default AboutMe