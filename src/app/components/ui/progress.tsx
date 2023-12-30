"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/app/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-white border-[1px]",
      className
    )}
    {...props}
  >
    <p className="absolute top-0 z-10 left-1/2 text-[.6rem] -translate-x-1/2">{value && value >= 100? 'Completed' : value + '%'}</p>
    <ProgressPrimitive.Indicator
      className={cn("h-full w-full flex-1 bg-green-400 transition-all", !(value && value >= 100) && 'bg-red-400')}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
