import { DesktopGridItems, MobileGridItems } from "../config/siteConfig";
import GridItem from "./GridItem";

const AboutMe = () => {
    return(
        <div className='relative w-full h-screen bg-muted overflow-y-auto  items-center flex flex-row justify-center '>
            <div className='hidden sm:grid  w-full h-full p-40 grid-cols-4 auto-rows-[90px] gap-4  max-w-[1920px]'>
                {DesktopGridItems && DesktopGridItems.map((item,index)=>{
                    return<GridItem key={index} size={item.layout}>{item.children &&  item.children}</GridItem>
                })}
            </div>
            <div className='grid sm:hidden w-full h-full px-4 pt-[50px] scale-90 grid-cols-4 auto-rows-[75px] gap-2'>
                {MobileGridItems.map((item,index)=>{
                    return<GridItem key={index} size={item.layout}>{item.children && item.children}</GridItem>
                })}
            </div>
        </div>
    )
}

export default AboutMe