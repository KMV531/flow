import React from 'react'
import { PHILOSOPHY_QUERYResult } from '../../../sanity.types'
import Newsletter from '@/components/Newsletter'

const Philosophy = ({
  workPhilosophy,
}: {
  workPhilosophy: PHILOSOPHY_QUERYResult
}) => {
  return (
    <>
      <div className='container mx-auto px-5 lg:px-0 pb-32'>
        <h1 className='text-2xl md:text-3xl lg:text-5xl pb-14'>
          Our Work Philosophy
        </h1>
        <div className='flex flex-col space-y-4 items-center justify-center'>
          {workPhilosophy?.map((philosophy) => (
            <div
              key={philosophy?._id}
              className='flex flex-col space-y-3 md:flex-row md:items-center md:justify-between md:gap-x-14 bg-[#BEF264] rounded-xl p-14'
            >
              <div>
                <p>{philosophy?.badge}</p>
                <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
                  {philosophy?.title}
                </h1>
              </div>
              <div>
                <p className='max-w-2xl'>{philosophy?.philosophyDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='bg-[#012b22] px-4 p-3'>
        <Newsletter />
      </div>
    </>
  )
}

export default Philosophy
