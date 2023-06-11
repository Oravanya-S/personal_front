import React from 'react'
import Carousel from '../components/Carousel'
import Collection from '../components/Collection'
import Footer from '../components/Footer'

export default function HomePage() {
  const pic = [
    '../src/assets/ad2.jpg',
    '../src/assets/ad4.jpg',
    '../src/assets/green2.jpg',
    '../src/assets/p9.jpg',
    '../src/assets/handbag.jpg',
    '../src/assets/groupBag.jpg',
  ]
  return (
    <div className='w-full'>
      <Carousel />
      <div className='grid lg:grid-cols-1 xl:grid-cols-2 gap-3 py-3'>
        {pic.map( el => <Collection img={el} textBig='AUDREY' textSmall='COLLECTION' textColor='black'/>)}
      </div>
      <hr className='border-black'/>
      <Footer />
    </div>
    
  )
}
