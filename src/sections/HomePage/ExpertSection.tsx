import SectionTitle from '@/components/SectionTitle'
import { FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'
import React from 'react'

const ExpertSection = () => {
  return (
    <section className='container mx-auto px-10 mb-32'>
      <div className='flex flex-col justify-between gap-y-5'>
        <SectionTitle name='Our experts' />
        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-semibold mb-7'>
          Meet our experts
        </h1>
        <div className='flex items-start justify-start md:items-center md:justify-between gap-x-10'>
          <div>
            <Image
              src={'/7100a99bac80c1a4d2b9697b84cd3a636349b5da-800x800.jpg'}
              alt='Jenny WIlson'
              width={80}
              height={80}
              className='object-cover rounded-lg'
            />
          </div>
          <div className='hidden md:flex md:items-center md:gap-x-28'>
            <h2>Jenny Wilson</h2>
            <p className='text-sm md:text-lg lg:text-xl xl:text-2xl text-gray-500'>
              {'Senior Sustainability Consultant'}
            </p>
          </div>
          <div className='flex flex-col gap-y-1 md:flex-row md:justify-evenly md:gap-x-5'>
            <div className='block md:hidden'>
              <h2>Jenny Wilson</h2>
              <p className='text-sm md:text-lg lg:text-xl xl:text-2xl text-gray-500'>
                {'Senior Sustainability Consultant'}
              </p>
            </div>
            <FaLinkedin size={25} />
          </div>
        </div>
      </div>
      <hr className='bg-gray-500 mt-5 mb-32' />
    </section>
  )
}

export default ExpertSection
