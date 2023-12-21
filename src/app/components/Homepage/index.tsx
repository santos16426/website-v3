import styles from './Homepage.module.scss'
import TypeWriter from '@/app/components/Typewriter'
import Image from 'next/image'
import { useState } from 'react';
import {FillButton} from '@/app/components/common/Button'
import SocialLinks from '../common/SocialLinks';
const Homepage = () =>{
    const skills = [
        "Software Engineer",
        "Web Development",
        "Backend Development",
        "Mobile Development",
        "Continuous Integration",
        "Continuous Deployment"
    ];
    const [isHovered, setIsHovered] = useState(false);

    return(
        <div className={styles.container}>
            <div className={styles.avatarOnHover}>
                <div className={styles.avatar}>
                    <Image src="/images/profile.jpg"  width={200} height={200} layout='responsive' alt=""/>
                </div>
                <div className={styles.techStack}>
                    <Image className={styles.techStackItem}  src="/images/icons/html.svg"  width={5} height={5} layout='responsive' alt="" style={{ width: 30, height: 30}}/>
                    <Image className={styles.techStackItem}  src="/images/icons/css.svg"  width={5} height={5} layout='responsive' alt="" style={{ width: 30, height: 30}}/>
                    <Image className={styles.techStackItem}  src="/images/icons/javascript.svg"  width={5} height={5} layout='responsive' alt=""style={{ width: 30, height: 30}}/>
                    <Image className={styles.techStackItem}  src="/images/icons/react.svg"  width={5} height={5} layout='responsive' alt="" style={{ width: 30, height: 30}}/>
                    <Image className={styles.techStackItem}  src="/images/icons/tailwind.svg"  width={5} height={5} layout='responsive' alt="" style={{ width: 30, height: 30}}/>
                    <Image className={styles.techStackItem}  src="/images/icons/sass.svg"  width={5} height={5} layout='responsive' alt="" style={{ width: 30, height: 30}}/>
                </div>
            </div>
            <p>Billy Santos</p>
            <TypeWriter skills={skills}/>
            <SocialLinks/>
            <div>
                <FillButton label="Hire Me"/>
            </div>
            
        </div>
    )
}
export default Homepage