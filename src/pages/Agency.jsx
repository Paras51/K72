import React, { useRef } from "react"
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
const Agency = () => {

    const imageDivRef= useRef(null)
    const imageRef = useRef(null)

    const imageArray = [
        'https://k72.ca/images/teamMembers/Olivier_640X960.jpg?w=640&h=960&s=9b715851e76624b3d00c6715af5c47cd',
        'https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
        'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
        'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
        'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6',
        'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
        'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
        'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6'
    ]
  console.log(imageArray);
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(function() {
        gsap.to(imageDivRef.current, {
            scrollTrigger: {
                trigger: imageDivRef.current,
                start: "top 20%",
                end: "top -120%",
                scrub: true,
                pin: true,
                onUpdate:function(element){
                    let imageIndex;
                    if(element.progress < 1){
                        imageIndex = Math.floor(element.progress * imageArray.length);}
                    else{
                        imageIndex = imageArray.length-1
                    }

                    imageRef.current.src = imageArray[imageIndex]
                }
            }
        })
    })

  return (
    <div className="text-black">
        <div className="section1">
            <div ref={imageDivRef} className="absolute overflow-hidden h-[20vw] w-[15vw] rounded-3xl left-[30vw] top-[5vw]  bg-grey-200">
            <img
            ref={imageRef}
            className="w-full h-full object-cover"
            src={imageArray[imageArray.length - 1]}
            alt="Agency Image"
            />
            </div>
            <div className="relative font-[font2]">
            <div className="pt-[50vh]">
                <h1 className="text-[19vw] text-center leading-[17vw]">
                SEVEN7Y <br /> TWO
                </h1>
            </div>
            <div className="pl-[40%] mt-20">
                <p className="text-6xl">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re
                inquisitive and open-minded, and we make sure creativity crowds
                out ego from every corner. A brand is a living thing, with values,
                a personality and a story. If we ignore that, we can achieve
                short-term success, but not influence that goes the distance. We
                bring that perspective to every brand story we help tell.
                </p>
            </div>
            </div>
            </div>
        <div className="section2 h-screen">
        </div>
    </div>
  );
};

export default Agency;
