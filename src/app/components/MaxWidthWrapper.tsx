import { cn } from "@/app/lib/utils"
import { ReactNode, RefObject } from "react"

const MaxWidthWrapper = ({
    className,
    children,
    ref,
} : {
    className? : string,
    children: ReactNode,
    ref?: RefObject<HTMLDivElement>
}) => (
        <div className={cn('mx-auto w-full max-w-screen-xl px-2.5 md:px-20',className) }>
            {children}
        </div>
    )
export default MaxWidthWrapper