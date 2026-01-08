import { TBlog } from '../../types/blog'

const BlogCard = ({
  featured,
  type,
  alias,
  title,
  shortDescription,
  date,
  thumbnail,
}: TBlog) => {
  return (
    <div className="group rounded-2xl shadow-lg overflow-hidden relative aspect-[1/1.27] w-80 p-0 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="absolute h-40 w-full overflow-hidden">
        <span className="absolute z-10 top-3 right-3 bg-black/70 text-white text-xs font-semibold px-3 py-1 rounded-full shadow shadow-orange-500">
          {type.toUpperCase()}
        </span>
      </div>
      <div
        className="relative h-full w-full overflow-hidden object-cover object-center "
        style={{
          backgroundImage: `url(${thumbnail})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="flex-1 flex flex-col justify-between bg-white bg-opacity-95 px-6 py-5">
        <h3 className="text-lg font-bold mb-2 line-clamp-2 text-gray-500 group-hover:text-orange-500 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3 font-medium">
          {shortDescription}
        </p>
        <div className="flex justify-between items-center mt-auto">
          <span className="bg-gray-200 text-gray-400 px-2 py-1 rounded text-xs font-semibold">
            {new Date(date).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </span>
          <a
            // href={`/blog/${alias}`}
            className="group/button text-xs flex items-center gap-1 px-3 py-1 rounded-lg  text-gray-400 transition-all duration-300 hover:scale-110"
          >
            Read More
            <svg
              className="w-4 h-4 ml-1 group-hover/button:translate-x-1 transition"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
