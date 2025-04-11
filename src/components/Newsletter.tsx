import React from 'react'

const Newsletter = () => {
  return (
    <section className='bg-[#BEF264] rounded-lg mb-32'>
      <div className='container mx-auto flex flex-col md:flex-row md:justify-between items-center p-10 gap-y-3'>
        <div>
          <h1 className='text-3xl md:text-4xl text-black'>
            Your Source for Green Energy Updates
          </h1>
        </div>
        <div className='flex flex-col md:flex-row gap-y-3 items-center justify-end md:gap-x-4 w-full'>
          <input
            type='email'
            name='email'
            placeholder='Your e-mail'
            className='bg-white text-gray-500 w-full md:w-xs  p-2 rounded-full outline-none'
          />
          <button className='flex justify-center text-white bg-[#1F2E05] p-2 rounded-full w-full md:w-auto px-5 cursor-pointer'>
            Get in touch
          </button>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
