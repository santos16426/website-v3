import { blogPosts } from '../config/blogConfig'
import CarouselBlogCards from './CarouselBlogCards'

const FeaturedBlogs = () => {
  return (
    <div className="w-full h-full flex flex-col bg-[#EFEEEF] py-4 lg:py-12">
      <p className="text-7xl lg:text-[9rem] header font-bold p-4 lg:p-8">
        Blogs{' '}
      </p>
      <div className="relative w-full px-10">
        <CarouselBlogCards cards={blogPosts.filter((blog) => blog.featured)} />
      </div>
    </div>
  )
}

export default FeaturedBlogs
