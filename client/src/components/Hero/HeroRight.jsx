import React from 'react'
import '../../styles/ImageLayout.css'
import Hero1 from '../../assets/Home/hero1.jpeg'
import Hero2 from '../../assets/Home/hero2.jpeg'

function HeroRight() {
  return (
    <div className='relative w-1/2 hidden lg:flex justify-end px-[3%]'>
      <img src={Hero1} alt="" className='relative z-20 rounded-2xl lg:w-4/5 xl:w-[70%]' />
      <img src={Hero2} alt="" className='absolute z-10 custom-position w-3/5 xl:w-[56%] rounded-2xl'/>
    </div>
  )
}

export default HeroRight
