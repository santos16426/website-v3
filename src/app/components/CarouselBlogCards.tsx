import React, { useRef } from 'react'
import { TBlog } from '../../types/blog'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import BlogCard from './BlogCard'

interface Props {
  cards: TBlog[]
}

const CarouselBlogCards: React.FC<Props> = ({ cards }) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    const { current } = scrollRef
    if (!current) return
    const scrollAmount = window.innerWidth > 720 ? 380 : 280
    current.scrollBy({
      left: dir === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <div className="relative w-full flex items-center">
      <button
        className="z-10 p-2 bg-slate-700/70 hover:bg-orange-500 rounded-full text-white absolute left-2 top-1/2 -translate-y-1/2 disabled:opacity-30 disabled:pointer-events-none"
        aria-label="Scroll Left"
        onClick={() => scroll('left')}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <div
        ref={scrollRef}
        className="no-scrollbar flex flex-row w-full gap-6 overflow-x-auto scroll-smooth py-3 px-14"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {cards.map((card) => (
          <div key={card.alias} style={{ scrollSnapAlign: 'center' }}>
            <BlogCard {...card} />
          </div>
        ))}
      </div>
      <button
        className="z-10 p-2 bg-slate-700/70 hover:bg-orange-500 rounded-full text-white absolute right-2 top-1/2 -translate-y-1/2 disabled:opacity-30 disabled:pointer-events-none"
        aria-label="Scroll Right"
        onClick={() => scroll('right')}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  )
}

export default CarouselBlogCards
