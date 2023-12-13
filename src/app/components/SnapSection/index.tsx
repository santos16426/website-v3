import { RefObject, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./SnapSection.module.scss";
interface SnapSectionProps {
  sectionId: string;
  bgImg: string;
  scrollTo?: Function| null;
  goTo?:  RefObject<HTMLDivElement> | null;
}
const SnapSection:React.FC<SnapSectionProps> = ({ sectionId, bgImg, scrollTo, goTo }) => {
  return (
    <div className={`container ${styles.section}`} id={sectionId}>
      <div className={styles.copy}>
        <h2>Lorem Ipsum</h2>
      </div>
      <div className={styles.imageContainer}>
        <Image src={bgImg} layout="fill" alt=""/>
      </div>
      {goTo && scrollTo &&<button className={styles.downarrow} onClick={()=>scrollTo(goTo)}></button>}
    </div>
  );
};

export default SnapSection;
