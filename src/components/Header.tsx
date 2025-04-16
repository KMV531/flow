import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import MobileNav from './MobileNav'

const NavLinks = [
  {
    title: 'About Us',
    href: '/about-us',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Careers',
    href: '/careers',
  },
  {
    title: 'Pricing',
    href: '/pricing',
  },
]

const Header = () => {
  return (
    <>
      <header className='container mx-auto'>
        <div className='flex items-center justify-between gap-5 py-7 px-7 lg:px-0'>
          <div className='flex items-center justify-center gap-10'>
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
            <div className='hidden md:flex items-center gap-5'>
              {NavLinks.map((NavLink, index) => {
                return (
                  <Link href={NavLink.href} key={index} className='gap-x-10'>
                    {NavLink.title}
                  </Link>
                )
              })}
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <div className='block md:hidden'>
              <MobileNav />
            </div>
            <Button className='border border-white p-5 bg-transparent rounded-full hover:bg-[#BFF265] hover:text-black cursor-pointer'>
              <Link href={'/contact-us'}>Get in touch</Link>
            </Button>
          </div>
        </div>
      </header>
      <div className='hidden md:block'>
        <hr className='border border-[#BFF265]' />
      </div>
    </>
  )
}

export default Header
