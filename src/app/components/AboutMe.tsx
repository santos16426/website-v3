import { DesktopGridItems, MobileGridItems } from '../config/siteConfig'
import GridItem from './GridItem'

const AboutMe = () => {
  return (
    <div className="relative w-full items-center flex flex-row justify-center bg-[#EFEEEF]">
      <div className="hidden lg:grid w-full h-fit p-20 sm:px-40 lg:px-60 grid-cols-4 auto-rows-[90px] gap-4 max-w-[1920px]">
        {DesktopGridItems &&
          DesktopGridItems.map((item, index) => {
            return (
              <GridItem
                className={item.className}
                key={index}
                size={item.layout}
              >
                {item.children ? item.children : item.title}
              </GridItem>
            )
          })}
      </div>
      <div className="grid lg:hidden w-full h-fit scale-90 grid-cols-4 auto-rows-[95px] gap-4">
        {MobileGridItems.map((item, index) => {
          return (
            <GridItem className={item.className} key={index} size={item.layout}>
              {item.children ? item.children : item.title}
            </GridItem>
          )
        })}
      </div>
    </div>
  )
}

export default AboutMe
