import React, { useState } from 'react'

export default function Carousel({gallaryList}){
  const gallary = gallaryList
  const [picIdx, setPicIdx] = useState(0)

  const nextPicture = () => {
    if(+picIdx === gallary.length-1) setPicIdx(0)
    else setPicIdx(picIdx+1)
  }

  const prevPicture = () => {
    if(picIdx === 0) setPicIdx(gallary.length-1)
    else setPicIdx(picIdx-1)
  }

  return (
    <div className='block relative max-h-[500px] z-0'>
      <div className='flex w-screen'>
          <img className='block' src={gallary[picIdx]} alt="" />
      </div>
      <p onClick={prevPicture}><i className="fa-solid fa-chevron-left text-6xl absolute top-[45%] left-[2%] cursor-pointer" ></i></p>
      <p onClick={nextPicture}><i className="fa-solid fa-chevron-right text-6xl absolute top-[45%] right-[2%] cursor-pointer"></i></p>
    </div>  
)}