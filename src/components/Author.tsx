import Image from 'next/image'
import React from 'react'

const Author = () => {
  return (
    <div className='flex items-center justify-start space-x-4'>
      <Image
        src={'/711835e76796382411062147d6b2b3ade92b3ec9-960x958.jpg'}
        alt='author image'
        width={30}
        height={30}
        className='rounded-full object-cover'
      />
      <p>Leslie Alexander</p>
      <p>9 min read</p>
    </div>
  )
}

export default Author
