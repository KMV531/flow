import SectionTitle from '@/components/SectionTitle'
import React from 'react'
import { SOLUTIONS_QUERYResult } from '../../../sanity.types'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'

const SolutionsSection = ({
  solutions,
}: {
  solutions: SOLUTIONS_QUERYResult
}) => {
  return (
    <section className=' bg-white border rounded-lg my-36 text-black'>
      <div className='container mx-auto pb-36 px-10 md:px-0'>
        <div className='flex flex-col justify-between gap-y-5'>
          <SectionTitle name='Solutions' />
          <h1 className='text-4xl text-black font-semibold mb-7'>
            Key to clean future
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            {solutions?.map((solution) => (
              <div key={solution?._id} className='flex flex-col gap-y-7'>
                {solution?.image && (
                  <Image
                    src={urlFor(solution?.image).url()}
                    alt='energy icons'
                    width={50}
                    height={50}
                  />
                )}
                <h1 className='text-3xl font-semibold text-black'>
                  {solution?.title}
                </h1>
                <p className='text-lg text-gray-500'>{solution?.description}</p>
                <Link
                  href={'/about-us'}
                  className='text-xl text-gray-700 w-max'
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolutionsSection
