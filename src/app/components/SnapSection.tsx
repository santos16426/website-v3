import { ReactNode, RefObject, useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '@/app/styles/SnapSection.module.scss'
import { cn } from '@/app/lib/utils'

interface SnapSectionProps {
  sectionId: string
  scrollTo?: Function | null
  showScrollTo?: boolean
  goTo?: RefObject<HTMLDivElement> | null
  content: ReactNode
}
const SnapSection: React.FC<SnapSectionProps> = ({
  sectionId,
  scrollTo,
  goTo,
  content,
  showScrollTo,
}) => {
  return (
    <div className="w-full relative snap-center" id={sectionId}>
      <div>{content}</div>
      {goTo && scrollTo && (
        <div
          className={cn(
            'absolute left-2/4 transform translate-x-[-50%] text-center bottom-[10px] cursor-pointer',
            !showScrollTo
              ? 'transition-opacity duration-500 opacity-0'
              : 'transition-opacity duration-500 opacity-100',
          )}
          onClick={() => scrollTo(goTo)}
        >
          <span
            className={cn(
              'inline-block align-middle py-0 px-[10px] text-[13px] font-bold uppercase',
              styles.textScroll,
            )}
          >
            Scroll
          </span>
          <span
            className={cn(
              'inline-block align-middle w-[14px] h-[22px] relative border-2 border-solid border-gray-100 rounded-xl',
              styles.mouse,
            )}
          ></span>
          <span
            className={cn(
              'inline-block align-middle py-0 px-[10px] text-[13px] font-bold uppercase',
              styles.textScroll,
            )}
          >
            Down
          </span>
        </div>
      )}
    </div>
  )
}

export default SnapSection
