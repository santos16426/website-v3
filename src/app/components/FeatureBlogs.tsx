import { blogPosts } from '../config/blogConfig'
import CarouselBlogCards from './CarouselBlogCards'

const FeaturedBlogs = () => {
  return (
    <div className="relative w-full bg-slate-500 flex flex-col p-20 sm:px-40 lg:px-40">
      <div className="flex items-center gap-2 text-3xl font-semibold mb-5">
        <span className="inline font-semibold bg-gradient-to-b from-transparent from-50% to-50% to-orange-300">
          <div className="flex items-center gap-2">
            Blogs
            <div className="w-6 bg-black h-[3px]" />
          </div>
        </span>
      </div>
      <div className="relative w-full">
        <CarouselBlogCards cards={blogPosts.filter((blog) => blog.featured)} />
      </div>
    </div>
  )
}

export default FeaturedBlogs
