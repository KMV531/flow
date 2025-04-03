'use client'

import { Button } from '@/components/ui/button'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

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

const SHEET_SIDES = ['top'] as const

type MobileNav = (typeof SHEET_SIDES)[number]

function MobileNav() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    setIsOpen(false)
    router.push(href)
  }

  return (
    <div>
      {SHEET_SIDES.map((side) => (
        <Sheet key={side} open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu className='cursor-pointer' />
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>
                <div className='flex justify-between px-3 py-3'>
                  <Link href={'/'} className='flex items-center gap-2'>
                    <Image
                      src={'/logo.png'}
                      alt='logo'
                      width={25}
                      height={25}
                      className='object-cover'
                    />
                    <h1 className='font-semibold text-2xl text-white'>FLOW</h1>
                  </Link>
                  <Button className='border border-white p-5 bg-transparent rounded-full hover:bg-[#BFF265] hover:text-black cursor-pointer'>
                    Get in touch
                  </Button>
                </div>
              </SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <div className='flex flex-col justify-center items-center gap-10 pt-20 '>
              {NavLinks.map((NavLink, index) => {
                return (
                  <Link
                    href={NavLink.href}
                    key={index}
                    className='gap-x-10'
                    onClick={(e) => handleNavigation(e, NavLink.href)}
                  >
                    {NavLink.title}
                  </Link>
                )
              })}
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button className='absolute top-9 right-[10rem] cursor-pointer bg-transparent hover:bg-transparent'>
                  <X className='size-7' />
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}

export default MobileNav
