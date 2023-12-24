import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const variants = cva(
    "rounded-md bg-pink-300 shadow-md overflow-hidden flex flex-col",
    {
       variants: {
        size: {
            "1x1" : "col-span-1 row-span-1",
            "1x2" : "col-span-1 row-span-2",
            "2x1" : "col-span-2 row-span-1",
            "2x2" : "col-span-2 row-span-2",
            "2x3" : "col-span-2 row-span-3",
            "4x2" : "col-span-4 row-span-2",
            "2x4" : "col-span-2 row-span-4",
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