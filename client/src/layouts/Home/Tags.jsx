import React from 'react'
import Heading from "../../components/General/Heading";
import Subline from "../../components/General/Subline";
import Tag from '../../components/Tags/Tag';

function Tags() {
  return (
    <div className="px-[7.5%] py-[3%]  flex flex-col gap-14">
      <div className="flex flex-col gap-2">
        <Heading className='text-5xl font-bold leading-[70px]'>Popular Tags</Heading>
        <Subline>Most searched keywords</Subline>
      </div>
      <div className='flex flex-wrap gap-8'>
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
      </div>
    </div>
  )
}

export default Tags
