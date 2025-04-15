import React from 'react'
import { PRODUCTDESIGN_QUERYResult } from '../../../sanity.types'
import { ArrowUpRight, MapPinCheck, Timer } from 'lucide-react'
import Link from 'next/link'

const ProductDesign = ({
  productDesign,
}: {
  productDesign: PRODUCTDESIGN_QUERYResult
}) => {
  return (
    <>
      <div className='container mx-auto px-5 lg:px-0 pt-5 pb-36'>
        <h3 className='pt-10 pb-5'>Product Design</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {productDesign?.map((job) => (
            <div
              key={job?._id}
              className='p-6 bg-[#BFF265] hover:bg-white text-black flex flex-col space-y-4 rounded-xl border-t-2 border-t-white hover:border-t-[#BFF265]'
            >
              <h1 className='font-medium text-2xl'>{job?.title}</h1>
              <div className='flex items-center justify-start space-x-4'>
                <div className='flex items-center justify-center space-x-2 bg-white hover:bg-[#BFF265] rounded-xl text-black p-1'>
                  <MapPinCheck size={25} />
                  <p>{job?.location}</p>
                </div>
                <div className='flex items-center justify-center space-x-2 bg-white hover:bg-[#BFF265] rounded-xl text-black p-1'>
                  <Timer size={25} />
                  <p>{job?.hour}</p>
                </div>
              </div>
              <Link
                href={'/'}
                className='flex items-center justify-start space-x-2 w-max'
              >
                <p>Apply</p>
                <ArrowUpRight size={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ProductDesign
