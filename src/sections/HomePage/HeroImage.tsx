import Image from 'next/image'
import React, { Fragment } from 'react'

const heroImages = [
  {
    image: '/heroImage_slider_1.jpg',
  },
  {
    image: '/heroImage_slider_3.png',
  },
  {
    image: '/heroImage_slider_2.png',
  },
]

const HeroImage = () => {
  return (
    <div className='mt-12 flex overflow-x-clip py-4 -my-0 lg:mt-20'>
      <div className='flex flex-none gap-8 pr-8 move-left'>
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {heroImages.map((heroImage) => (
              <div
                className='inline-flex items-center justify-center flex-shrink-0'
                key={heroImage.image}
              >
                <Image
                  src={heroImage.image}
                  width={400}
                  height={400}
                  alt='hero image slider'
                  className='object-cover h-full'
                />
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default HeroImage
