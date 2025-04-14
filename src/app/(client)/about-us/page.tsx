import { getAboutPage, getPhilosophy, getTeam } from '@/sanity/helpers'
import About from '@/sections/AboutPage/About'
import Philosophy from '@/sections/AboutPage/Philosophy'
import Team from '@/sections/AboutPage/Team'
import React from 'react'

const AboutPage = async () => {
  const aboutPage = await getAboutPage()
  const workPhilosophy = await getPhilosophy()
  const team = await getTeam()
  return (
    <main className='bg-white text-black'>
      <About aboutPage={aboutPage} />
      <Philosophy workPhilosophy={workPhilosophy} />
      <Team team={team} />
    </main>
  )
}

export default AboutPage
