import React, { useState } from 'react'
import Layout from '@/app/components/_layout'

type Props = {}

const Blog = (props: Props) => {
  const [isScrolledTop, setIsScrolledTop] = useState<boolean>(true)
  const handleScroll = (event: { currentTarget: { scrollTop: number } }) => {
    setIsScrolledTop(event.currentTarget.scrollTop < 400)
  }
  return (
    <Layout isScrolledTop={isScrolledTop}>
      <div
        className="relative overflow-x-hidden overflow-y-auto overscroll-y-contain h-screen w-full"
        onScroll={handleScroll}
      >
        blogpost
      </div>
    </Layout>
  )
}

export default Blog
