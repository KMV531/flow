import { getBlogSlug } from '@/sanity/helpers'
import Link from 'next/link'
import React from 'react'
import { BLOG_BY_SLUG_QUERYResult } from '../../../../../sanity.types'
import Author from '@/components/Author'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'

const SingleBlogPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
  const { slug } = await params
  const blog = (await getBlogSlug(slug)) as BLOG_BY_SLUG_QUERYResult

  return (
    <div className='container mx-auto pt-20 px-5 lg:px-0 pb-44'>
      <Link href={'/blog'}>Back to blog</Link>
      <div className='flex flex-col items-center justify-center space-y-4'>
        <div className='flex items-center justify-center space-x-2'>
          <p className='bg-white text-black p-2 text-xs rounded-xl'>
            Solar Power
          </p>
          <p className='bg-white text-black p-2 text-xs rounded-xl'>
            Community
          </p>
        </div>
        <h1 className='text-2xl md:text-4xl lg:text-6xl max-w-2xl font-semibold text-center'>
          {blog?.title}
        </h1>
        {blog?._createdAt && (
          <p>{new Date(blog?._createdAt).toISOString().split('T')[0]}</p>
        )}
      </div>
      <div className='pt-5 flex items-center justify-between'>
        <Author />
        <div className='flex items-center justify-center space-x-4'>
          <p>Share:</p>
          <div className='flex items-center justify-center space-x-2'>
            <FaFacebook size={40} />
            <FaLinkedin size={40} />
          </div>
        </div>
      </div>
      <div className='py-10'>
        {blog?.mainImage && (
          <Image
            src={urlFor(blog?.mainImage).url()}
            alt='Blog Image'
            width={500}
            height={500}
            className='w-full h-full object-cover rounded-xl'
          />
        )}
      </div>
      <div className='px-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 leading-8 w-[70%] pb-28'>
        {blog?.content && <PortableText value={blog?.content} />}
        <div className='mt-7 bg-white text-black p-5 rounded-xl flex items-start justify-start gap-x-5'>
          <div>
            <Image
              src={'/711835e76796382411062147d6b2b3ade92b3ec9-960x958.jpg'}
              alt='author image'
              width={50}
              height={50}
              className='rounded-full object-cover'
            />
          </div>
          <div className='flex flex-col space-y-2'>
            <h1 className='text-2xl font-semibold'>Leslie Alexander</h1>
            <p>Solar energy service</p>
            <h3 className='max-w-2xl'>
              Leslie Alexander is a distinguished Solar Energy Specialist at the
              forefront of the renewable energy revolution. With a passion for
              sustainable technology and a commitment to addressing the global
              energy crisis, Leslie has dedicated his career to advancing the
              field of solar energy.
            </h3>
            <div className='mt-5'>
              <FaLinkedin size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleBlogPage
