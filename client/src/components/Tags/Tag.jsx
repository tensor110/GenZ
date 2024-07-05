import { Avatar } from '@mui/material'
import '../../styles/Glassmorph.css'
import React from 'react'
import Subline from '../General/Subline'

function Tag() {
  return (
    <div className='flex items-center px-5 py-3 gap-2 glassmorph'>
      <Avatar alt="" src="/person.jpg" sx={{width: 30, height: 30}} />
      <Subline>Travel</Subline>
    </div>
  )
}

export default Tag
