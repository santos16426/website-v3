import { useState } from 'react'
import { cn } from '../lib/utils'

const ProjectCardItem = ({
  name,
  disabled,
  details,
  image,
  alias,
}: {
  name: string
  disabled?: boolean
  details: {
    type: string
    techStack: {
      name: string
      icon: string
    }[]
  }
  image: string
  alias: string
}) => {
  return (
    <div
      className="relative group cursor-pointer shadow-lg overflow-hidden select-none bg-white h-80 aspect-video rounded-xl box-border"
      key={alias}
    >
      <div
        className="absolute top-0 left-0 w-full h-full transition-all group-hover:scale-110"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        className={cn(
          'absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent from-20% to-100% to-black',
          {
            'bg-black/90': disabled,
          },
        )}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full text-white/90 p-8 flex flex-col justify-end">
        <p className="text-xl font-bold">
          {name}{' '}
          <span
            className={cn('text-orange-400', {
              hidden: !disabled,
            })}
          >
            (Coming Soon)
          </span>
        </p>
        <p className="text-md text-white/70">{details.type}</p>
        <div className="flex gap-2 text-sm text-white/70">
          Tech Stack:
          {details.techStack.map((tech, index) => (
            <div
              key={tech.name}
              className="bg-white/30 px-2 rounded-full text-white"
            >
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default ProjectCardItem
