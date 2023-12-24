import { ReactNode, RefObject, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/app/styles/SnapSection.module.scss";



interface SnapSectionProps {
  sectionId: string;
  bgImg?: string | null;
  scrollTo?: Function| null;
  goTo?:  RefObject<HTMLDivElement> | null;
  content: ReactNode
}
const SnapSection:React.FC<SnapSectionProps> = ({ sectionId, bgImg, scrollTo, goTo, content }) => {
  return (
    <div className={`${styles.section}`} id={sectionId}>
      <div className={styles.copy}>
        {content}
      </div>
      {bgImg && <div className={styles.imageContainer}>
        <Image src={bgImg} layout="fill" alt=""/>
      </div>}
      {goTo && scrollTo &&
      <div className={styles.scrolldown} onClick={()=>scrollTo(goTo)}>
        <span className={styles.left}>Scroll</span>
        <span className={styles.mouse}></span>
        <span className={styles.right}>Down</span>
    </div>
       }
    </div>
  );
};

export default SnapSection;
