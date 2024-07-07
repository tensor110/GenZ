import React from 'react'
import '../../styles/Glassmorph.css'
import Heading from '../General/Heading'
import Comment from './Comment'

function Cardmid() {
  const comments = [1, 2, 3];
  return (
    <div className='flex flex-col glassmorph w-[32%] p-[2%] gap-4'>
      <div className='relative'>
        <Heading className='font-bold text-xl leading-7'>Last Comment</Heading>
        <div className="absolute -bottom-2 left-1/6 w-1/3 h-[3px] bg-gradient-to-r from-[#0e98d6] via-[#0cd3db] to-[#0e98d6]"></div>
      </div>
      <div>
      {comments.map((comment, index) => (
          <Comment key={index} hasBorder={index !== comments.length - 1} />
        ))}
      </div>
    </div>
  )
}

export default Cardmid
