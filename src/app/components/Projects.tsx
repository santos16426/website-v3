import { projects } from '../config/projects'
import { cn } from '../lib/utils'

const Projects = () => {
  return (
    <div className="w-full h-fit flex flex-col bg-[#EFEEEF] py-4 lg:py-12">
      <p className="text-7xl lg:text-[9rem] header font-bold p-2 lg:p-8 select-none">
        Projects{' '}
      </p>
      <div className="w-full">
        <div className="mt-5 table w-full">
          <div className="w-full hidden lg:flex flex-row border-b-[1px] border-gray-300 px-8">
            <div className="w-full">Projects</div>
            <div className="w-full">Details</div>
          </div>
          <div className="w-full flex lg:hidden flex-row border-b-[1px] border-gray-300 p-4 lg:px-8">
            <div className="w-full">Projects/Details</div>
          </div>
          {projects.map((project) => (
            <div
              className="relative w-full group flex flex-col lg:flex-row border-b-[1px] border-gray-300 px-4 lg:px-8 py-12 text-2xl hover:text-white cursor-pointer select-none"
              key={project.key}
            >
              {/* image */}
              <div
                className={cn(
                  'scale-0 transition-all lg:group-hover:scale-100 fixed bottom-10 right-10 shadow-2xl h-[400px] z-[100] aspect-video bg-red-500',
                  { grayscale: project.disabled },
                )}
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                }}
              >
                {project.disabled && (
                  <div className="w-full h-full header bg-black bg-opacity-80 font-bold text-8xl whitespace-nowrap grid place-items-center">
                    <p className="">Coming Soon</p>
                  </div>
                )}
              </div>
              {/* project list */}
              <div className="w-full z-10">
                {project.name}
                {project.disabled && (
                  <span className="text-orange-400 group-hover:text-orange-600">
                    {' '}
                    (Coming Soon)
                  </span>
                )}
              </div>
              <div className="w-full flex flex-row z-10 lg:text-black text-gray-400 group-hover:text-white group-hover:opacity-70">
                {project.details.type}
              </div>
              {/*  bgHover */}
              <div
                className={cn(
                  'absolute top-1/2 -translate-y-1/2 left-0 bg-orange-500 w-full h-0 transition-all group-hover:h-full duration-500',
                  { 'bg-gray-400': project.disabled },
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
