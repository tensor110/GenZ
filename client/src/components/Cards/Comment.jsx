import React from 'react'
import { Avatar } from '@mui/material'
import Subline from '../General/Subline'

function Comment({hasBorder}) {
  return (
    <div className={`flex flex-col gap-3 py-6 ${hasBorder ? 'border-b-[1px] border-custom-gray' : 'pb-0'}`}>
      <Subline className='text-sm text-white'>" Gosh jaguar ostrich quail one excited dear hello and bound and the and bland moral misheard roadrunner "</Subline>
      <div className='flex items-center gap-3'>
      <Avatar alt="" src="/person.jpg" sx={{width: 36, height: 36}} />
      <div className='flex flex-col'>
        <Subline className='text-sm'>Jane Cooper</Subline>
        <Subline className='text-sm'>15 April 2022</Subline>
      </div>
      </div>
    </div>
  )
}

export default Comment
