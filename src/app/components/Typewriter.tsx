import React from "react";
import Typewriter from "typewriter-effect";
import styles  from "@/app/styles/Typewriter.module.scss";
import { cn } from "@/lib/utils";
interface BannerStringProps{
  skills : string[]
}
const BannerString:React.FC<BannerStringProps> = ({ skills }) => (
  <div className={cn('text-left text-black text-3xl md:text-4xl', styles.wrapper)}>
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
