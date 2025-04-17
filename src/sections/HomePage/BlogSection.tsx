import Link from 'next/link'
import React from 'react'
import { BLOG_QUERYResult } from '../../../sanity.types'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import Author from '@/components/Author'

const BlogSection = ({ blogs }: { blogs: BLOG_QUERYResult }) => {
  return (
    <section className='container mx-auto mt-44 px-5 mb-[10rem] lg:px-0'>
      <div className='flex items-center justify-between mb-20'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold'>
          Blog
        </h1>
        <Link
          href={'/blog'}
          className='border border-white py-3 px-5 bg-transparent rounded-full '
        >
          See all
        </Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {blogs?.slice(0, 4).map((blog) => (
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
            <h1 className='text-semibold text-sm md:text-xl lg:text-2xl xl:text-3xl line-clamp-1'>
              {blog?.title}
            </h1>
            <p className='text-gray-400 text-sm md:text-base lg:text-lg xl:text-xl line-clamp-2 max-w-2xl'>
              {blog?.overview}
            </p>
            <Author />
          </div>
        ))}
      </div>
    </section>
  )
}

export default BlogSection
