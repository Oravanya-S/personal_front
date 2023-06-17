import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ProfileForm from '../features/auth/components/profile/ProfileForm'

export default function ProfilePage() {
    const user = useSelector(state => state.auth.user)
  return (
    <div className="max-w-[1440px] mx-auto min-h-screen border">
        <div className="p-12">
          <div className="flex">
            <div className="w-1/6 text-xl font-medium">
              Hello,
            </div>
            <div className="w-5/6 text-xl font-medium">
              Personal detail
            </div>
          </div>
          <hr className="border-black my-6"/>
          <div className="flex text-lg">
            <div className="w-1/6 cursor-pointer">
                <div className='flex flex-col gap-4'>
                    <Link to={`/orders/${user.id}`}>Order History</Link>
                    <Link to={`/profile/${user.id}`} className='font-medium'>Profile</Link>
                </div>
            </div>
            <div className="flex flex-col gap-4 w-5/6"> 
                <ProfileForm />
            </div>
          </div>
        </div>
    </div>
  )
}