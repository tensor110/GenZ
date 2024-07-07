import React from 'react'
import Hero from '../layouts/Home/Hero'
import Articles from '../layouts/Home/Articles'
import Tags from '../layouts/Home/Tags'
import Posts from '../layouts/Home/Posts'
import Cards from '../layouts/Home/Cards'
import Partners from '../layouts/Home/Partners'
import Footer from '../layouts/Home/Footer'

function Home() {
  return (
    <div className='bg-[#0f172a]'>
      <Hero />
      <Articles />
      <Tags />
      <Posts />
      <Cards />
      <Partners />
      <Footer />
    </div>
  )
}

export default Home
