import styles from './Homepage.module.scss'
import TypeWriter from '@/app/components/Typewriter'

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
            <h1> Homepage</h1>
            <TypeWriter skills={skills}/>
        </div>
    )
}
export default Homepage