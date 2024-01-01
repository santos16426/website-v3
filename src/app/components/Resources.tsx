import Link from "next/link"
import Image from "next/image"
import { learningPath } from "../config/siteConfig"
import { Progress } from "./ui/progress"


const Resources = () =>(
    <div className="w-full h-full p-0 sm:p-5 relative flex flex-row flex-grow gap-2 sm:gap-5">
        {learningPath.map((learn,index)=>(
            <Link target="_blank" key={index} href={learn.url} rel='noopener noreferrer' className="w-full  h-full hover:scale-105">
                <div  className="rounded-2xl bg-slate-600 w-full h-full flex flex-col justify-between items-center p-1 shadow-xl py-4 sm:p-5">
                        <div className="flex flex-row sm:gap-2 justify-center items-center">
                        {learn.thumbnail.map((img, index)=>(
                            <Image key={index} src={img} width={35} height={35} alt={img} className="w-[35px] h-[35px]"/>
                        ))}
                        </div>
                        <p className="text-xs text-center text-white font-semibold text-ellipsis line-clamp-2">{learn.title}</p>
                        <Progress value={learn.status} />
                </div>
            </Link>
        ))}
    </div>
)
export default Resources