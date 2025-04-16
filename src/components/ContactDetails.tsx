import Image from 'next/image'
import React from 'react'

export const ContactDetails = () => {
  return (
    <div>
      <div className='relative w-24 h-24'>
        <Image
          src={'/award.png'}
          alt='award'
          fill
          className='object-cover rounded-full'
        />
      </div>
      <h2 className='my-4'>Contact Us</h2>
      <p className='text-lg mb-4'>
        We are here to help you with your project. Contact us for a personalized
        offer.
        <br />
        <br />
        Whether you have a question or need a quote, we&apos;re ready to assist.
        Our goal is to ensure your project moves forward smoothly and
        efficiently.
        <br />
        <br />
        Reach out today, and let&apos;s start a conversation about how we can
        work together to create something extraordinary. This version emphasizes
        approachability, support, and collaboration in line with the theme of
        contacting for help. Let me know if you&apos;d like any further
        adjustments!
      </p>
      <div className='flex gap-2'>
        <div className='flex items-center gap-1'>
          {/* This is to map the images five times */}
          {[...Array(5)].map((_, i) => (
            <Image
              src={'/star.png'}
              key={`start${i}`}
              alt='Star'
              width={16}
              height={16}
            />
          ))}
        </div>
        <p className='text-sm text-white font-bold'>25+ Successful Projects</p>
      </div>
    </div>
  )
}
