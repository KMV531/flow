import React from 'react'
import SectionTitle from '@/components/SectionTitle'
import Image from 'next/image'

const ResultSection = () => {
  return (
    <section className='bg-white py-10'>
      <div className='container mx-auto px-10 lg:px-0'>
        <div className='text-black'>
          <SectionTitle name='Results' />
        </div>

        <h1 className='text-5xl text-black font-semibold my-8 pb-10'>
          We are committed to a sustainable future
        </h1>
        <div className='flex flex-col items-start justify-start md:flex-row gap-x-10 gap-7 mt-10'>
          <div className='flex flex-col gap-y-7 p-7 bg-[#BFF265] rounded-lg'>
            <Image
              src={'/results_image_1.PNG'}
              alt='sun rays icon'
              width={40}
              height={40}
              className='object-cover'
            />
            <h1 className='text-3xl font-semibold text-black'>5,000 Mwh</h1>
            <h3 className='text-gray-800 text-xl'>
              Renewable Energy Generated
            </h3>
            <p className='text-sm text-gray-500 md:max-w-2xs lg:max-w-xl'>
              Our commitment to sustainability shines through as we proudly
              announce the generation of 5,000 megawatt-hours of renewable
              energy, contributing to a greener and more environmentally
              friendly future.
            </p>
          </div>
          <div className='flex flex-col gap-y-10 justify-center items-center'>
            <div className='flex items-start gap-x-7 bg-[#BFF265] rounded-lg p-6'>
              <div>
                <Image
                  src={'/results_image_1.PNG'}
                  alt='customer icon'
                  width={40}
                  height={40}
                  className='object-cover'
                />
              </div>
              <div className='flex flex-col gap-y-2'>
                <h1 className='text-3xl font-semibold text-black'>10,000+</h1>
                <h3 className='text-gray-800 text-xl'>Customers Served</h3>
              </div>
            </div>
            <div className='flex items-start gap-x-7 bg-[#BFF265] rounded-lg p-6'>
              <div>
                <Image
                  src={'/results_image_1.PNG'}
                  alt='customer icon'
                  width={40}
                  height={40}
                  className='object-cover'
                />
              </div>
              <div className='flex flex-col gap-y-2'>
                <h1 className='text-3xl font-semibold text-black'>15%</h1>
                <h3 className='text-gray-800 text-xl'>Avg. Energy Saved</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResultSection
