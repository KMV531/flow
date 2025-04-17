import { getBlogs } from '@/sanity/helpers'
import Blog from '@/sections/BlogPage/Blog'
import React from 'react'

const BlogPage = async () => {
  const blogs = await getBlogs()
  return (
    <>
      <Blog blogs={blogs} />
    </>
  )
}

export default BlogPage
