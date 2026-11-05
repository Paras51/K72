import React from 'react'
import Video from '../components/Home/Video'
import HomeHeroText from '../components/Home/HOmeHeroText'
import HomeBottomText from '../components/Home/HomeBottomText'
import Navbar from '../components/Navigation/Navbar'
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="h-screen w-screen relative flex flex-col justify-between">
        <HomeHeroText/>
        <HomeBottomText/>
      </div>
    </div>
  )
}

export default Home