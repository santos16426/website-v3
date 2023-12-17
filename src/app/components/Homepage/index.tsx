import styles from './Homepage.module.scss'
import TypeWriter from '@/app/components/Typewriter'
import Image from 'next/image'
const Homepage = () =>{
    const skills = [
        "Software Engineer",
        "Web Development",
        "Backend Development",
        "Mobile Development",
        "Continuous Integration",
        "Continuous Deployment"
      ];
    return(
        <div className={styles.container}>
            <div className={styles.avatar}>
                <Image  src="/images/profile.jpg"  width={200} height={200} layout='responsive' alt=""/>
            </div>
            <p>Billy Santos</p>
            <TypeWriter skills={skills}/>
            <div className={styles.socials}>
                <a target='_blank' href="https://www.linkedin.com/in/billy-santos/"><i className='bx bxl-linkedin'></i></a>
                <a target='_blank' href="https://github.com/santos16426"><i className='bx bxl-github' ></i></a>
                <a target='_blank' href="https://www.instagram.com/lucas.gif/"><i className='bx bxl-instagram' ></i></a>
            </div>
            <div>
                <button className={styles.hireButton}>Hire me</button>
            </div>
        </div>
    )
}
export default Homepage