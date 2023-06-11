import React from 'react'

export default function Collection({img, textBig, textSmall, textColor = 'black'}) {
  return (
    <div className='relative w-full flex justify-center cursor-pointer'>
        <div>
            <img className='block w-full overflow-hidden object-cover h-full' src={img} alt=""/>
        </div>
        <div className={`absolute bottom-[5%] text-6xl flex flex-col gap-2 text items-center` }>
            <div style={{color: `${textColor}`}} >{textBig}</div>
            <div style={{color: `${textColor}`}}>{textSmall}</div>
        </div>
        
    </div>
    
  )
}