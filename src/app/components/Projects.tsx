import { useState, useRef, useEffect } from "react";
import { projects } from "../config/projects";
import { cn } from "../lib/utils";
import { ToggleGroup, ToggleGroupItem } from "@/app/components/ui/toggle-group";
import { GalleryHorizontalEnd, List, ArrowUpRight } from "lucide-react";
import ProjectListItem from "./ProjectListItem";
import ProjectCardItem from "./ProjectCardItem";

const Projects = () => {
  const [viewType, setViewType] = useState<string>("list");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isCircleVisible, setIsCircleVisible] = useState(false);
  const projectsListRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    // Only track mouse when viewType is 'list'
    if (viewType !== "list") return;

    const handleMouseMove = (e: MouseEvent) => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      });
    };

    const projectsList = projectsListRef.current;
    if (projectsList) {
      projectsList.addEventListener("mousemove", handleMouseMove);
      return () => {
        projectsList.removeEventListener("mousemove", handleMouseMove);
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }
  }, [viewType]);

  useEffect(() => {
    if (isHovered && viewType === "list") {
      // Small delay to trigger the scale animation
      const timer = setTimeout(() => {
        setIsCircleVisible(true);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      setIsCircleVisible(false);
    }
  }, [isHovered, viewType]);

  // Reset hover state when view type changes
  useEffect(() => {
    if (viewType !== "list") {
      setIsHovered(false);
      setIsCircleVisible(false);
    }
  }, [viewType]);

  return (
    <div className='w-full h-fit flex flex-col bg-[#EFEEEF] py-4 lg:py-12'>
      <p className='text-7xl lg:text-[9rem] header font-bold p-2 lg:p-8 select-none'>
        Projects{" "}
      </p>
      <div className='p-2 lg:p-8  items-start w-fit'>
        <ToggleGroup type='single' value={viewType}>
          <ToggleGroupItem
            value='list'
            aria-label='Toggle list'
            onClick={() => setViewType("list")}
          >
            <List className='h-4 w-4 text-gray-700' />
          </ToggleGroupItem>
          <ToggleGroupItem
            value='card'
            aria-label='Toggle card'
            onClick={() => setViewType("card")}
          >
            <GalleryHorizontalEnd className='h-4 w-4 text-gray-700' />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className='w-full relative'>
        <div
          ref={projectsListRef}
          className={cn("mt-5 w-full", {
            "flex flex-row flex-wrap px-8 justify-start gap-5":
              viewType === "card",
          })}
          style={{
            cursor: isHovered && viewType === "list" ? "none" : "default",
          }}
          onMouseEnter={() => viewType === "list" && setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setIsCircleVisible(false);
          }}
        >
          {viewType === "list" && (
            <>
              <div className='w-full hidden lg:flex flex-row border-b-[1px] border-gray-300 px-8'>
                <div className='w-full'>Projects</div>
                <div className='w-full'>Details</div>
              </div>
              <div className='w-full flex lg:hidden flex-row border-b-[1px] border-gray-300 p-4 lg:px-8'>
                <div className='w-full'>Projects/Details</div>
              </div>
            </>
          )}
          {projects.map((project) =>
            viewType === "list" ? (
              <ProjectListItem key={project.alias} {...project} />
            ) : (
              <ProjectCardItem key={project.alias} {...project} />
            ),
          )}
        </div>

        {/* Cursor following circle - only show when list view and hovered */}
        {isHovered && viewType === "list" && (
          <div
            className='pointer-events-none fixed z-[200] flex items-center justify-center rounded-full sm:hidden lg:flex '
            style={{
              width: "80px",
              height: "80px",
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              transform: `translate(-50%, -50%) scale(${
                isCircleVisible ? 1 : 0
              })`,
              transition:
                "transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              background: "transparent",
              border: "4px solid white",
              mixBlendMode: "exclusion",
            }}
          >
            <ArrowUpRight className='w-12 h-12 text-white font-bold' />
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
