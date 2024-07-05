import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import Heading from "../../components/General/Heading";
import Subline from "../../components/General/Subline";
import Post from '../../components/Posts/Post';

function Posts() {
  return (
    <div className="px-[7.5%] py-[3%] flex flex-col gap-14">
      <div className="flex flex-col gap-2">
        <Heading className='text-5xl font-bold'>Recent Posts</Heading>
        <Subline>Don't miss the latest trends</Subline>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 3xl:grid-cols-3 gap-12'>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <div>
      <button className="bg-gradient-to-r from-custom-blue to-custom-cyan px-8 py-4 rounded-full text-white font-medium flex items-center gap-2 -mt-6">
          Show More Posts <FaArrowRight />
        </button>
      </div>
    </div>
  )
}

export default Posts
