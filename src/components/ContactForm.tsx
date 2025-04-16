import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

export const ContactForm = () => {
  return (
    <form
      action={'/'}
      className='space-y-6 bg-[#BFF265] p-8 text-black rounded-lg'
    >
      <div className='space-y-2'>
        <p className='text-base font-extrabold'>Name:</p>
        <Input name='name' type='text' required className='ring-2 ring-white' />
      </div>
      <div className='space-y-2'>
        <p className='text-base font-extrabold'>Email:</p>
        <Input
          name='email'
          type='email'
          required
          className='ring-2 ring-white'
        />
      </div>
      <div className='space-y-2'>
        <p className='text-base font-extrabold'>Phone:</p>
        <Input
          name='phone'
          type='text'
          required
          className='ring-2 ring-white'
        />
      </div>

      <div className='space-y-2'>
        <p className='text-base font-extrabold'>Message:</p>
        <textarea
          name='message'
          required
          className='w-full p-3 rounded-lg ring-2 ring-white focus:ring-2 
          focus:ring-yellow-500'
        />
      </div>

      <div className='p-2'>
        <Button className='cursor-pointer'>Submit</Button>
      </div>
    </form>
  )
}
