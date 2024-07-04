import React from 'react'
import HeroLeft from '../../components/Hero/HeroLeft'
import HeroRight from '../../components/Hero/HeroRight'

function Hero() {
  return (
    <div className='flex my-[25%] lg:my-[5%] justify-center gap-[5%]'>
      <HeroLeft />
      <HeroRight />
    </div>
  )
}

export default Hero
