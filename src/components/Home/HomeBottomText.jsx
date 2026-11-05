import React from 'react'
import { Link } from 'react-router-dom'
const HomeBottomText = () => {
  return (

      <div className='font-[font2] flex items-center justify-center gap-2 mb-[3vh]'>
        <Link to='/Work' className='text-[5.5vw] leading-[5.5vw] hover:text-[#d3fd50] border-3 rounded-full pt-3 px-10 uppercase'>Work</Link>
        <Link to='/Agency' className='text-[5.5vw] leading-[5.5vw] hover:text-[#d3fd50] border-3 rounded-full pt-3 px-10 uppercase'>Agency</Link>
      </div>

  )
}

export default HomeBottomText
