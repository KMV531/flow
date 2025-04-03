import SectionTitle from '@/components/SectionTitle'
import React from 'react'
import { ABOUT_QUERYResult } from '../../../sanity.types'
import { ImageCarousel } from '@/components/ImageCarousel'

const AboutSection = ({ aboutUs }: { aboutUs: ABOUT_QUERYResult }) => {
  return (
    <section className='container mx-auto px-10 md:px-0 mb-32'>
      <div className='gap-y-5 flex flex-col justify-between'>
        <SectionTitle name='About Us' />
      </div>
      <div className='mt-5 flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-x-10'>
        <div>
          {aboutUs?.map((about) => (
            <div key={about?._id} className='flex flex-col gap-y-10'>
              <h1 className='text-5xl text-white font-semibold max-w-xl'>
                {about?.title}
              </h1>
              <p className='text-lg text-gray-400 max-w-2xl'>
                {about?.description}
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 space-y-5'>
                <p className='text-lg text-gray-400'>{about?.option1}</p>
                <p className='text-lg text-gray-400'>{about?.option2}</p>
                <p className='text-lg text-gray-400'>{about?.option3}</p>
                <p className='text-lg text-gray-400'>{about?.option4}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <ImageCarousel />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
