import React from 'react'
import '../../styles/Glassmorph.css'
import Heading from '../General/Heading'
import Post from './Post'

function Cardleft() {
    const posts = [1, 2, 3, 4];
  return (
    <div className='flex flex-col glassmorph w-[32%] p-[2%] gap-4'>
      <div className='relative'>
        <Heading className='font-bold text-xl leading-7'>Popular Posts</Heading>
        <div className="absolute -bottom-2 left-1/6 w-1/3 h-[3px] bg-gradient-to-r from-[#0e98d6] via-[#0cd3db] to-[#0e98d6]"></div>
      </div>
      <div>
      {posts.map((post, index) => (
          <Post key={index} hasBorder={index !== posts.length - 1} />
        ))}
      </div>
    </div>
  )
}

export default Cardleft
