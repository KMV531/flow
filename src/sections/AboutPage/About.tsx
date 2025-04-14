import React from 'react'
import { ABOUT_PAGE_QUERYResult } from '../../../sanity.types'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

const About = ({ aboutPage }: { aboutPage: ABOUT_PAGE_QUERYResult }) => {
  return (
    <section className='container mx-auto py-20'>
      {aboutPage?.map((about) => (
        <div
          key={about?._id}
          className='flex flex-col items-center justify-center space-y-5'
        >
          <div className='flex flex-col px-5 lg:px-0 gap-5 lg:flex-row lg:items-center lg:justify-center lg:gap-x-20'>
            <div>
              <h1 className='lg:text-7xl text-5xl font-semibold max-w-xl'>
                {about?.title}
              </h1>
            </div>
            <div className='flex flex-col gap-y-10'>
              <p className='text-lg max-w-2xl text-black'>
                {about?.aboutDescription}
              </p>
              <Link
                href={'/blog'}
                className='p-3 rounded-full hover:bg-[#90c038] bg-[#BFF265] text-black cursor-pointer w-max'
              >
                Read More
              </Link>
            </div>
          </div>
          <div className='w-full h-full pb-44'>
            {about?.mainImage && (
              <Image
                src={urlFor(about?.mainImage).url()}
                alt='Image of a computer on a sofa in which the computer shows a green energy company'
                width={500}
                height={500}
                className='object-cover w-full h-full rounded-xl'
              />
            )}
          </div>
        </div>
      ))}
    </section>
  )
}

export default About
