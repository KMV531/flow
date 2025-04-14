import React from 'react'
import { TEAM_QUERYResult } from '../../../sanity.types'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
import { FaLinkedin } from 'react-icons/fa'

const Team = ({ team }: { team: TEAM_QUERYResult }) => {
  return (
    <>
      <div className='container mx-auto px-5 lg:px-0 py-32'>
        <h1 className='text-xl md:text-3xl lg:text-5xl pb-14'>
          A Team Of Energy Experts
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          {team?.map((worker) => (
            <div key={worker?._id} className='relative'>
              {worker?.mainImage && (
                <Image
                  src={urlFor(worker?.mainImage).url()}
                  alt="worker's profile image"
                  width={700}
                  height={700}
                  className='object-cover rounded-xl'
                />
              )}
              <div className='px-4'>
                <div className='bg-[#BFF265] p-3 flex items-center justify-between absolute bottom-4 w-3/4 rounded-xl'>
                  <h1 className='text-xl font-bold'>{worker?.name}</h1>
                  <p>{worker?.position}</p>
                  <Link href={'/'}>
                    <FaLinkedin size={30} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Team
