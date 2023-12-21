import styles from './AboutMe.module.scss'
const AboutMe = () => {
    return(
        <div className={`gap-3 ${styles.wrapper} sm:p-40 p-8`}>
            <div className="grid gap-4 w-full px-4 mt-12 h-full grid-cols-2 md:grid-cols-3 lg:px-96 ">
            <div className={`bg-white shadow-lg text-black w-full rounded-2xl ${styles.rowSpanInit}`}>1</div>
                <div className={`bg-white shadow-lg text-black w-full rounded-2xl`}>2</div>
                <div className={`bg-white shadow-lg text-black w-full rounded-2xl`}>3</div>
                <div className="bg-white shadow-lg text-black w-full rounded-2xl">4</div>
                <div className={`bg-white shadow-lg text-black w-full rounded-2xl hidden sm:flex ${styles.rowSpanInit}`}>5</div>
                <div className={`bg-white shadow-lg text-black w-full rounded-2xl ${styles.colSpanInit}`}>6</div>
                <div className={`bg-white shadow-lg text-black w-full rounded-2xl sm:hidden ${styles.rowSpanInit}`}>5</div>

            </div>
        </div>
    )
}

export default AboutMe