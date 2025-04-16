import { ContactDetails } from '@/components/ContactDetails'
import { ContactForm } from '@/components/ContactForm'
import React from 'react'

const ContactPage = () => {
  return (
    <section className='py-8 md:py-32'>
      <div className='container lg:max-w-6xl px-4 mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16'>
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactPage
