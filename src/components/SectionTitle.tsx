import React from 'react'

interface SectionTitleProps {
  name: string
}

const SectionTitle = ({ name }: SectionTitleProps) => {
  return (
    <>
      <div className='flex items-center gap-2 mt-44'>
        <div className='w-3 h-3 bg-[#BFF265] rounded-full'></div>
        <p>{name}</p>
      </div>
      <div className='container mx-auto mb-7'>
        <hr className='bg-black' />
      </div>
    </>
  )
}

export default SectionTitle
