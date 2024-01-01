import { DesktopGridItems, MobileGridItems } from "../config/siteConfig";
import GridItem from "./GridItem";

const AboutMe = () => {
    return(
        <div className='relative w-full bg-muted items-center flex flex-row justify-center '>
            <div className='hidden lg:grid  w-full h-full p-20 sm:px-40 lg:px-40 grid-cols-4 auto-rows-[90px] gap-4  max-w-[1920px]'>
                {DesktopGridItems && DesktopGridItems.map((item,index)=>{
                    return<GridItem className={item.className} key={index} size={item.layout}>{item.children ? item.children: item.title}</GridItem>
                })}
            </div>
            <div className='grid lg:hidden w-full h-full pt-[50px] scale-90 grid-cols-4 auto-rows-[75px] gap-4'>
                {MobileGridItems.map((item,index)=>{
                    return<GridItem className={item.className} key={index} size={item.layout}>{item.children ? item.children: item.title}</GridItem>
                })}
            </div>
        </div>
    )
}

export default AboutMe