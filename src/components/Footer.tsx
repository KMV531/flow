import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-white py-5 px-4'>
      <div className='bg-[#012b22] p-10 lg:p-40 rounded-xl'>
        <div className='container mx-auto'>
          <div className='flex flex-col space-y-10 md:flex-row md:space-x-4 md:items-center md:justify-between'>
            <div>
              <Link href={'/'} className='flex items-center gap-2'>
                <Image
                  src={'/logo.png'}
                  alt='logo'
                  width={25}
                  height={25}
                  className='object-cover'
                />
                <h1 className='font-semibold text-2xl'>FLOW</h1>
              </Link>
            </div>
            <div className='flex flex-col space-y-8'>
              <h1 className='font-semibold'>Platform</h1>
              <Link href={'/'} className='mt-2'>
                Solutions
              </Link>
              <Link href={'/about'}>How it works</Link>
              <Link href={'/pricing'}>Pricing</Link>
            </div>
            <div className='flex flex-col space-y-8'>
              <h1 className='font-semibold'>Company</h1>
              <Link href={'/'} className='mt-2'>
                Solutions
              </Link>
              <Link href={'/careers'}>Careers</Link>
              <Link href={'/pricing'}>Pricing</Link>
            </div>
            <div className='flex flex-col space-y-8'>
              <h1 className='font-semibold'>Resources</h1>
              <Link href={'/'} className='mt-2'>
                Solutions
              </Link>
              <Link href={'/about'}>How it works</Link>
              <Link href={'/pricing'}>Pricing</Link>
            </div>
            <div className='flex flex-col space-y-4'>
              <div className='flex items-center relative'>
                <button>
                  <FaFacebook
                    className='rounded-full text-[#BEF264] bg-black absolute  top-2 left-1'
                    size={40}
                  />
                </button>
                <input
                  className='border-none outline-none rounded-full pl-14 p-4 bg-[#416159] text-white font-semibold'
                  placeholder='Follow us on Facebook'
                />
              </div>
              <div className='flex items-center relative'>
                <button>
                  <FaInstagram
                    className='rounded-full text-[#BEF264] bg-black absolute  top-2 left-1'
                    size={40}
                  />
                </button>
                <input
                  className='border-none outline-none rounded-full pl-14 p-4 bg-[#416159] text-white font-semibold'
                  placeholder='Follow us on Instagram'
                />
              </div>
              <div className='flex items-center relative'>
                <button>
                  <FaLinkedin
                    className='rounded-full text-[#BEF264] bg-black absolute  top-2 left-1'
                    size={40}
                  />
                </button>
                <input
                  className='border-none outline-none rounded-full pl-14 p-4 bg-[#416159] text-white font-semibold'
                  placeholder='Follow us on LinkedIn'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
