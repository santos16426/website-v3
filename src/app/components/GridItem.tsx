import { cn } from '@/app/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const variants = cva(
  'relative overflow-hidden flex flex-col h-full neumorphism-shadow',
  {
    variants: {
      size: {
        '1x1': 'col-span-1 row-span-1',
        '1x2': 'col-span-1 row-span-2 ',
        '2x1': 'col-span-2 row-span-1',
        '3x1': 'col-span-3 row-span-1',
        '3x2': 'col-span-3 row-span-2',
        '2x2': 'col-span-2 row-span-2',
        '2x3': 'col-span-2 row-span-3',
        '2x5': 'col-span-2 row-span-5',
        '4x2': 'col-span-4 row-span-2',
        '2x4': 'col-span-2 row-span-4',
        '4x4': 'col-span-4 row-span-4',
        '4x5': 'col-span-4 row-span-5',
        '4x1': 'col-span-4 row-span-1',
      },
    },
    defaultVariants: {
      size: '1x2',
    },
  },
)

type GridItemsProps = {
  children: React.ReactNode
  className?: string
} & VariantProps<typeof variants>
const GridItem = ({ size, children, className }: GridItemsProps) => (
  <div className={cn(variants({ size, className }))}>{children}</div>
)
export default GridItem
