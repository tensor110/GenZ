import React from 'react'
import { Avatar } from '@mui/material'
import Subline from '../General/Subline'

function Post({hasBorder}) {
  return (
    <div className={`flex items-center gap-4`}>
      <div className=''>
      <Avatar alt="" src="/person.jpg" sx={{width: 70, height: 70}} />
      </div>
      <div className={`flex flex-col gap-2 py-6 ${hasBorder ? 'border-b-[1px] border-custom-gray' : ''}`}>
        <h2 className='text-white font-semibold hover:text-custom-blue'>Creating is a privilege but it's also a gift</h2>
        <div className='flex gap-2'>
          <Subline className='text-xs'>15 mins read</Subline>
          <Subline className='text-xs'>•</Subline>
          <Subline className='text-xs'>15 April 2022</Subline>
        </div>
      </div>
    </div>
  )
}

export default Post
