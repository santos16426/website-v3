import React from "react";
import Typewriter from "typewriter-effect";
import styles  from "./Typewriter.module.scss";
interface BannerStringProps{
  skills : string[]
}
const BannerString:React.FC<BannerStringProps> = ({ skills }) => (
  <div className={styles.wrapper}>
    <Typewriter
      options={{
        strings: skills,
        autoStart: true,
        loop: true,
      }}
    />
  </div>
);
export default BannerString;
