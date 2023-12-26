import { cn } from "@/app/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const variants = cva(
    "relative rounded-md bg-white shadow-md overflow-hidden flex flex-col h-full",
    {
       variants: {
        size: {
            "1x1" : "col-span-1 row-span-1 max-w-[388px]",
            "1x2" : "col-span-1 row-span-2 max-w-[388px]",
            "2x1" : "col-span-2 row-span-1 max-w-[792px]",
            "2x2" : "col-span-2 row-span-2 max-w-[792px]",
            "2x3" : "col-span-2 row-span-3 max-w-[792px]",
            "4x2" : "col-span-4 row-span-2",
            "2x4" : "col-span-2 row-span-4 max-w-[792px]",
            "4x4" : "col-span-4 row-span-4",
        }
        },
        defaultVariants:{
            size: "1x2",
        }
    })

type GridItemsProps = {
    children: React.ReactNode
} & VariantProps<typeof variants>;
const GridItem = ({size, children} : GridItemsProps)=>(
    <div className={
        cn(variants({size, className: ""}))
    }>
        {children}
    </div>
)
export default GridItem