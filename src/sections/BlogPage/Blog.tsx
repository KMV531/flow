import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import Author from '@/components/Author'
import { BLOG_QUERYResult } from '../../../sanity.types'

const Blog = ({ blogs }: { blogs: BLOG_QUERYResult }) => {
  return (
    <section className='container mx-auto mt-14 px-5 mb-[10rem] lg:px-0'>
      <div className='mb-20'>
        <h1 className='text-4xl font-semibold'>Our Latest Posts</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {blogs?.map((blog) => (
          <div key={blog?._id} className='flex flex-col space-y-4'>
            <Link
              href={`/blog/${blog?.slug?.current}`}
              className='relative overflow-hidden'
            >
              {blog?.mainImage && (
                <Image
                  src={urlFor(blog?.mainImage).url()}
                  alt='blog image'
                  width={700}
                  height={700}
                  className='transition-transform overflow-hidden hover:scale-105 ease-in-out duration-500 rounded-xl'
                />
              )}
            </Link>
            <h1 className='text-semibold text-2xl'>{blog?.title}</h1>
            <p className='text-gray-400 text-lg line-clamp-2 max-w-2xl'>
              {blog?.overview}
            </p>
            <Author />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Blog
