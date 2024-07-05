import React from 'react'
import '../../styles/HeroBg.css'
import HeroLeft from '../../components/Hero/HeroLeft'
import HeroRight from '../../components/Hero/HeroRight'
import Navbar from '../../components/Hero/Navbar'

function Hero() {
  return (
    <div className='background px-[7.5%]'>
      <Navbar />
    <div className='flex my-[25%] lg:my-[5%] justify-center gap-[5%]'>
      <HeroLeft />
      <HeroRight />
    </div>
    </div>
  )
}

export default Hero
