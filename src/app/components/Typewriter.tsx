import React from "react";
import Typewriter from "typewriter-effect";
import styles  from "@/app/styles/Typewriter.module.scss";
import { cn } from "@/app/lib/utils";
interface BannerStringProps{
  skills : string[],
  className?:string,
}
const BannerString:React.FC<BannerStringProps> = ({ skills, className }) => (
  <div className={cn('text-left text-black text-2xl md:text-4xl mt-4 font-serif', styles.wrapper,className)}>
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
