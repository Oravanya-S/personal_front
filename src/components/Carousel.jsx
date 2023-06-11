import React, { useState } from 'react'

export default function Carousel(){
  const gallary = ['https://oandbprod.s3.ap-southeast-1.amazonaws.com/contents/f84afc8b-8ba3-4e55-8307-67c61eba064f.jpg','https://oandbprod.s3.ap-southeast-1.amazonaws.com/contents/01a30f0f-d1d1-45a5-89e8-6432ec620f35.jpg']
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
    <div className='block relative max-h-[600px] overflow-hidden'>
      <div className='flex w-screen'>
          <img className='block w-screen' src={gallary[picIdx]} alt="" />
      </div>
      <p onClick={prevPicture}><i class="fa-solid fa-chevron-left text-6xl absolute top-[45%] left-[2%] cursor-pointer" ></i></p>
      <p onClick={nextPicture}><i class="fa-solid fa-chevron-right text-6xl absolute top-[45%] right-[2%] cursor-pointer"></i></p>
    </div>  
)}