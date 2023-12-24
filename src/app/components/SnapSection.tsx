import { ReactNode, RefObject, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/app/styles/SnapSection.module.scss";
import { cn } from "@/lib/utils";



interface SnapSectionProps {
  sectionId: string;
  scrollTo?: Function| null;
  goTo?:  RefObject<HTMLDivElement> | null;
  content: ReactNode
}
const SnapSection:React.FC<SnapSectionProps> = ({ sectionId, scrollTo, goTo, content }) => {
  return (
    <div className='h-screen w-full relative snap-center' id={sectionId}>
      <div>
        {content}
      </div>
      {goTo && scrollTo &&
      <div className='absolute left-2/4 transform translate-x-[-50%] text-center bottom-[10px] cursor-pointer' onClick={()=>scrollTo(goTo)}>
        <span className={cn('inline-block align-middle py-0 px-[10px] text-[13px] font-bold uppercase',styles.textScroll)}>Scroll</span>
        <span className={cn('inline-block align-middle w-[14px] h-[22px] relative border-2 border-solid border-gray-100 rounded-xl', styles.mouse)}></span>
        <span className={cn('inline-block align-middle py-0 px-[10px] text-[13px] font-bold uppercase',styles.textScroll)}>Down</span>
    </div>
       }
    </div>
  );
};

export default SnapSection;
