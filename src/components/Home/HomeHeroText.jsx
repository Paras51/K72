import React from 'react'
import Video from './Video'
const HomeHeroText = () => {
  return (
    <div className= 'font-font2 pt-5 text-center'>
        <div className = 'text-[8.5vw] flex items-center justify-center uppercase leading-[8vw]'>
            The spark for
        </div>
        <div className = 'text-[8.5vw] flex items-center justify-center uppercase leading-[8vw]'>
            <span>all</span>
            <div className="mx-[1vw] aspect-video w-[clamp(5rem,16vw,14rem)] shrink-0 overflow-hidden rounded-full ">
                <Video />
            </div>
            <span>things</span>
        </div>
        <div className = 'text-[8.5vw] flex items-center justify-center uppercase leading-[8vw]'>
            creative
        </div>
    </div>
)
}

export default HomeHeroText
