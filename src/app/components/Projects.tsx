import { useState } from 'react'
import { projects } from '../config/projects'
import { cn } from '../lib/utils'
import { ToggleGroup, ToggleGroupItem } from '@/app/components/ui/toggle-group'
import { GalleryHorizontalEnd, List } from 'lucide-react'
import ProjectListItem from './ProjectListItem'
import ProjectCardItem from './ProjectCardItem'

const Projects = () => {
  const [viewType, setViewType] = useState<string>('list')

  return (
    <div className="w-full h-fit flex flex-col bg-[#EFEEEF] py-4 lg:py-12">
      <p className="text-7xl lg:text-[9rem] header font-bold p-2 lg:p-8 select-none">
        Projects{' '}
      </p>
      <div className="p-2 lg:p-8  items-start w-fit">
        <ToggleGroup type="single" value={viewType}>
          <ToggleGroupItem
            value="list"
            aria-label="Toggle list"
            onClick={() => setViewType('list')}
          >
            <List className="h-4 w-4 text-gray-700" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="card"
            aria-label="Toggle card"
            onClick={() => setViewType('card')}
          >
            <GalleryHorizontalEnd className="h-4 w-4 text-gray-700" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="w-full">
        <div
          className={cn('mt-5 w-full', {
            'flex flex-row flex-wrap px-8 justify-start gap-5':
              viewType === 'card',
          })}
        >
          {viewType === 'list' && (
            <>
              <div className="w-full hidden lg:flex flex-row border-b-[1px] border-gray-300 px-8">
                <div className="w-full">Projects</div>
                <div className="w-full">Details</div>
              </div>
              <div className="w-full flex lg:hidden flex-row border-b-[1px] border-gray-300 p-4 lg:px-8">
                <div className="w-full">Projects/Details</div>
              </div>
            </>
          )}
          {projects.map((project) =>
            viewType === 'list' ? (
              <ProjectListItem key={project.alias} {...project} />
            ) : (
              <ProjectCardItem key={project.alias} {...project} />
            ),
          )}
        </div>
      </div>
    </div>
  )
}

export default Projects
