import React from 'react'
import Cardleft from '../../components/Cards/Cardleft'
import Cardmid from '../../components/Cards/Cardmid'
import Cardright from '../../components/Cards/Cardright'

function Cards() {
  return (
    <div className='px-[7.5%] py-4 md:py-6 flex flex-wrap gap-4 justify-between lg:justify-between'>
      <Cardleft />
      <Cardmid />
      <Cardright />
    </div>
  )
}

export default Cards
