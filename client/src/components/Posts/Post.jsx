import React from 'react'
import { SlCalender } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa6";
import Subline from '../General/Subline';

function Post() {
  return (
    <div className='flex gap-6'>
      <div  className='w-2/3 md:w-[45%] lg:w-1/2'>
        <img src="/image.jpg" alt="" className='rounded-2xl aspect-[5/4] sm:aspect-[5/3] md:aspect-[7/3] lg:aspect-[10/9] xl:aspect-square' />
      </div>
      <div  className='w-full flex flex-col gap-3'>
        <h3 className='text-white font-semibold text-lg lg:text-xl'>Helpful Tips for Working from Home as a Freelancer</h3>
        <Subline className='text-xs lg:text-sm'>Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner flapped lynx far that and jeepers giggled far and far</Subline>
        <div className='text-custom-gray flex gap-4'>
            <span className='flex gap-2 items-center'><SlCalender />29 May 2022</span>
            <span className='flex gap-2 items-center'><FaRegClock />3 mins read</span>
        </div>
      </div>
    </div>
  )
}

export default Post
