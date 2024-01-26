import { blogPosts } from '../config/blogConfig'

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
    <div className="aspect-[1/1.1] w-[300px] bg-white rounded-lg shadow-sm"></div>
  )
}
const FeaturedBlogs = () => {
  return (
    <div className="relative w-full bg-slate-500 flex flex-col p-20 sm:px-40 lg:px-40">
      <div className="flex items-center gap-2 text-3xl font-semibold mb-5">
        Blogs <div className="w-6 bg-black h-[3px]"></div>
      </div>
      <div className="w-full min-h-1/2 flex flex-row flex-wrap gap-5 justify-center">
        {blogPosts
          .filter((blog) => blog.featured)
          .map((blog) => (
            <BlogCard key={blog.alias} {...blog} />
          ))}
      </div>
    </div>
  )
}

export default FeaturedBlogs
