import React from 'react'
import Subline from '../General/Subline'
import { NavLink } from 'react-router-dom'

function FooterLeft() {
  return (
    <div className='flex flex-col gap-4 w-1/3'>
      {/* Logo  */}
      <NavLink to="/" className="flex items-center gap-3">
        <img src="/logo.png" alt="" className="size-10 rotate-[30deg]" />
        <span className="font-bold text-2xl text-custom-gray">GenZ</span>
      </NavLink>
      <Subline className='text-sm'>When an unknown prnoto sans took a galley and scrambled it to make specimen book not only five When an unknown prnoto sans took a galley and scrambled it to five centurie.</Subline>
      <div className='flex flex-col'>
        <span className='text-white font-semibold'>Address</span>
        <span className='text-custom-gray'>123 Main Street</span>
        <span className='text-custom-gray'>New York, NY 10001</span>
      </div>
    </div>
  )
}

export default FooterLeft
