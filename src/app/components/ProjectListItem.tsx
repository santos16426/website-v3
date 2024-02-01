import { useState } from 'react'
import { cn } from '../lib/utils'

const ProjectListItem = ({
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
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div
      className="relative w-full group flex flex-col lg:flex-row border-b-[1px] border-gray-300 px-4 lg:px-8 py-12 text-2xl lg:hover:text-white cursor-pointer select-none"
      key={alias}
      onClick={(e) => setIsOpen((prev) => !prev)}
    >
      {/* image */}
      <div
        className={cn(
          'scale-0 transition-all lg:group-hover:scale-100 fixed bottom-10 right-10 shadow-2xl h-[400px] z-[100] aspect-video bg-red-500',
          { grayscale: disabled },
        )}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
        }}
      >
        {disabled && (
          <div className="w-full h-full header bg-black bg-opacity-80 font-bold text-8xl whitespace-nowrap grid place-items-center">
            <p className="">Coming Soon</p>
          </div>
        )}
      </div>
      {/* project list */}
      <div className="w-full z-10">
        {name}
        {disabled && (
          <span className="text-orange-400 group-hover:text-orange-600">
            {' '}
            (Coming Soon)
          </span>
        )}
      </div>
      <div className="w-full flex flex-col lg:flex-row z-10 lg:text-black text-gray-700 lg:group-hover:text-white">
        <div className="w-full">{details.type}</div>
        <div className="w-full flex flex-col flex-wrap gap-2 leading-1">
          <p className="text-lg text-gray-700 lg:group-hover:text-white lg:text-black">
            Tech Stack
          </p>
          <ul className="list-disc gap-2 flex-wrap">
            {details.techStack.map((tech) => (
              <li
                key={tech.name}
                className="ml-4 font-semibold text-sm  text-black/60 m-0 h-fit lg:over:bg-orange-200 lg:group-hover:text-white"
              >
                {tech.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={cn(
          'aspect-video lg:hidden z-10 transition-all scale-y-0 h-0 shadow-lg',
          {
            'scale-y-100 mt-5 h-[250px] ': isOpen,
          },
        )}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="h-full">
          {disabled && (
            <div className="h-full header bg-black bg-opacity-80 font-bold text-6xl whitespace-nowrap flex flex-col justify-center items-center">
              <p className="items-center">Coming Soon</p>
            </div>
          )}
        </div>
      </div>

      {/*  bgHover */}
      <div
        className={cn(
          'absolute top-1/2 -translate-y-1/2 left-0 lg:bg-orange-500 w-full h-0 transition-all group-hover:h-full duration-500',
          { 'lg:bg-gray-400': disabled },
        )}
      />
    </div>
  )
}
export default ProjectListItem
