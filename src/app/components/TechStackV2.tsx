import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Docker from '../../../public/images/icons/v2/docker.svg'
import ReactIcon from '../../../public/images/icons/v2/react.svg'
import NextJS from '../../../public/images/icons/v2/next.svg'
import Flutter from '../../../public/images/icons/v2/flutter.svg'
import Node from '../../../public/images/icons/v2/node.svg'
import Redux from '../../../public/images/icons/v2/redux.svg'
import TypeScript from '../../../public/images/icons/v2/typescript.svg'
import JavaScript from '../../../public/images/icons/v2/javascript.svg'
const techStack = [
  { name: 'Docker', Icon: Docker },
  { name: 'React', Icon: ReactIcon },
  { name: 'NextJS', Icon: NextJS },
  { name: 'Flutter', Icon: Flutter },
  { name: 'Node', Icon: Node },
  { name: 'Redux', Icon: Redux },
  { name: 'TypeScript', Icon: TypeScript },
  { name: 'JavaScript', Icon: JavaScript },
]

export default function TechStackV2() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let scrollAmount = 0
    const speed = 0.3 // adjust for faster/slower scroll

    const scroll = () => {
      scrollAmount += speed
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0
      }
      container.scrollLeft = scrollAmount
      requestAnimationFrame(scroll)
    }

    requestAnimationFrame(scroll)
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full max-w-3xl  relative overflow-hidden whitespace-nowrap"
    >
      <div className="flex w-max gap-10">
        {[...techStack, ...techStack].map((tech, idx) => (
          <div
            key={idx}
            className="flex h-16 w-16 items-center justify-center opacity-70 transition hover:opacity-100"
          >
            <tech.Icon
              className="h-12 w-12 text-white opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              aria-label={tech.name}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
