import styles from '@/app/styles/Homepage.module.scss'
import TypeWriter from '@/app/components/Typewriter'
import Image from 'next/image'
import {FillButton} from '@/app/components/common/Button'
import SocialLinks from './common/SocialLinks';
import MaxWidthWrapper from './MaxWidthWrapper';
import { cn } from '@/app/lib/utils';
const Homepage = () =>{
    const skills = [
        "Software Engineer",
        "Web Development",
        "Backend Development",
        "Mobile Development",
        "Continuous Integration",
        "Continuous Deployment"
    ];
    const scrollToSection = () => {
        const section = document.getElementById('2');
          if (section) {
            section.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
      };
    return(
        <MaxWidthWrapper className={cn('relative w-full h-screen p-[0] sm:p-[80px] flex flex-col justify-center items-center')}>
            <div className={cn('relative', styles.avatarOnHover)}>
                <div className='relative w-[200px] h-[200px] rounded-full overflow-hidden mb-5 cursor-pointer'>
                    <Image src="/images/profile.jpg"  width={200} height={200} layout='responsive' alt=""/>
                </div>
                <div className={cn('flex absolute z-[-999] top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]',styles.techStack)}>
                    <Image className={styles.techStackItem}  src="/images/icons/html.svg"  width={5} height={5} layout='responsive' alt="" style={{ width: 30, height: 30}}/>
                    <Image className={styles.techStackItem}  src="/images/icons/css.svg"  width={5} height={5} layout='responsive' alt="" style={{ width: 30, height: 30}}/>
                    <Image className={styles.techStackItem}  src="/images/icons/javascript.svg"  width={5} height={5} layout='responsive' alt=""style={{ width: 30, height: 30}}/>
                    <Image className={styles.techStackItem}  src="/images/icons/react.svg"  width={5} height={5} layout='responsive' alt="" style={{ width: 30, height: 30}}/>
                    <Image className={styles.techStackItem}  src="/images/icons/tailwind.svg"  width={5} height={5} layout='responsive' alt="" style={{ width: 30, height: 30}}/>
                    <Image className={styles.techStackItem}  src="/images/icons/sass.svg"  width={5} height={5} layout='responsive' alt="" style={{ width: 30, height: 30}}/>
                </div>
            </div>
            <p className='text-3xl font-bold'>Billy Santos</p>
            <TypeWriter skills={skills}/>
            <SocialLinks showLabel={false}/>
            <div>
                <FillButton label="Know more about me" onClick={scrollToSection}/>
            </div>
        </MaxWidthWrapper>
    )
}
export default Homepage