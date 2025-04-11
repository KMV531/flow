import Link from 'next/link'
import React from 'react'
import { BLOG_QUERYResult } from '../../../sanity.types'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import Author from '@/components/Author'

const BlogSection = ({ blogs }: { blogs: BLOG_QUERYResult }) => {
  return (
    <section className='container mx-auto mt-20 px-5 mb-[10rem] lg:px-0'>
      <div className='flex items-center justify-between mb-20'>
        <h1 className='text-4xl font-semibold'>Blog</h1>
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
            <h1 className='text-semibold text-2xl'>{blog?.title}</h1>
            <p className='text-gray-400 text-lg line-clamp-1 max-w-2xl'>
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
