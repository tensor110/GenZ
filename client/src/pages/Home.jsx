import React from 'react'
import Navbar from '../components/Hero/Navbar'
import Hero from '../layouts/Home/Hero'
import Articles from '../layouts/Home/Articles'
import Tags from '../layouts/Home/Tags'
import Posts from '../layouts/Home/Posts'
import Cards from '../layouts/Home/Cards'

function Home() {
  return (
    <div className='bg-[#0f172a]'>
      <Hero />
      <Articles />
      <Tags />
      <Posts />
      <Cards />
    </div>
  )
}

export default Home
