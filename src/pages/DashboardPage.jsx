import React from 'react'
import HeaderAdmin from '../features/admin/components/HeaderAdmin'
import SideBar from '../features/admin/layouts/SideBar'
import { Country, State, City }  from 'country-state-city';
const stateInThailand = State.getStatesOfCountry('TH')
console.log(stateInThailand)

const cityOfState = City.getCitiesOfState('TH', '10')
console.log(cityOfState)
export default function DashboardPage() {
  return (
    <div className='flex w-[1440px] border-2 border-y-0 mx-auto min-h-screen bg-gray-50'>
      <div className='w-[350px]'>
        <SideBar />
      </div>
      <div className='flex flex-col w-full gap-6 flex-1 max-h-screen overflow-hidden'>
        <HeaderAdmin topic="Dashboard"/>
      </div>
    </div>
  ) 
}
