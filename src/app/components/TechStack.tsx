import Image from "next/image"
import { cn } from "../lib/utils"
import styles from '@/app/styles/TechStack.module.scss'

const iconPath = '/images/icons/'
const techStackList: {
    name: string,
    iconPath: string,
    className?:string,
}[] = [
    {
        name: "NextJS",
        iconPath: iconPath + 'nextjs.svg',
    },
    {
        name: "TypeScript",
        iconPath: iconPath + 'typescript.svg',
    },
    {
        name: "React",
        iconPath: iconPath + 'react.svg',
    },
    {
        name: "NodeJS",
        iconPath: iconPath + 'nodejs.svg',
    },
    {
        name: "Tailwind",
        iconPath: iconPath + 'tailwind.svg',
    },
    {
        name: "SASS",
        iconPath: iconPath + 'sass.svg',
    },
    {
        name: "CSS",
        iconPath: iconPath + 'css.svg',
    },
    {
        name: "HTML",
        iconPath: iconPath + 'html.svg',
    },
    {
        name: "Javascript",
        iconPath: iconPath + 'javascript.svg',
    },
    {
        name: "Flutter",
        iconPath: iconPath + 'flutter.svg',
    },
    {
        name: "Java",
        iconPath: iconPath + 'java.svg',
    },
    {
        name: "Spring Boot",
        iconPath: iconPath + 'spring.svg',
    },
    {
        name: "NetSuite",
        iconPath: iconPath + 'netsuite.svg',
    },
]
const TechStack = ()=>{
    return(
        <div className={`rounded-full inline-flex flex-nowrap h-full w-screen animate-infinite-scroll ${styles.techStackWrapper}`}>
            {techStackList.map((tech,index)=>{
                return(
                <div className={cn('flex flex-col h-full items-center mx-5 justify-center hover:scale-150', tech.className, styles.techStackItem)} key={index}>
                    <Image src={tech.iconPath} width={25} height={25} alt={tech.name} />
                    <p>{tech.name}</p>
                </div>
                )
            })}
        </div>
    )
}
export default TechStack