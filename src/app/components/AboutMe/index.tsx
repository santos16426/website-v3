import styles from './AboutMe.module.scss'
import { useRef } from 'react';
import Gallery from './Gallery';

const AboutMe = () => {

   
   
    return(
        <div className={`gap-3 ${styles.wrapper} sm:p-40 p-8`}>
            <div className="grid gap-4 w-full px-4 h-full grid-cols-2 py-16 sm:py-0 md:grid-cols-3 lg:px-96 ">
                {/* hidden introCardMobile view */}
                <div className={`${styles.introCard} inline sm:hidden bg-red-400 overflow-hidden shadow-2xl text-black w-full h-full rounded-2xl col-span-2 row-span-2`}>  
                    <div className={`min-h-screen`}>

                    </div>
                </div>


                <div className={`${styles.imageCard} bg-red-400 overflow-hidden relative shadow-2xl text-black h-full rounded-2xl`}> 
                    <Gallery/>
                </div>

                <div className={`${styles.introCard} hidden sm:inline bg-red-400 overflow-hidden shadow-2xl text-black w-full h-full rounded-2xl col-span-2 row-span-2`}>  
                    introCard
                </div>

                <div className={`${styles.profileCard} bg-red-400 overflow-hidden relative shadow-2xl text-black h-full rounded-2xl`}> 
                <Gallery/>
                </div>

                <div className={`${styles.techStack} bg-red-400 overflow-hidden shadow-2xl text-black w-full h-full rounded-2xl ${styles.colSpanInit}`}>
                    techstack
                </div>
                
                <div className={`${styles.socialLinks} bg-red-400 overflow-hidden relative shadow-2xl text-black w-full rounded-2xl`}> 
                    <Gallery/>
                </div>
                <div className={`${styles.socialLinks} inline sm:hidden col-span-2 bg-red-400 overflow-hidden relative shadow-2xl text-black w-full rounded-2xl`}> 
                    <Gallery/>
                </div>
               
                
                
            </div>
        </div>
    )
}

export default AboutMe