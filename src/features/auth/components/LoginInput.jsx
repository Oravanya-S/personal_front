import React from 'react'

export default function LoginInput({
    placeholder,
    value,
    onChange,
    name,
    isInvalid
}) {
  return (
    <div className='w-full'>
        <p className='py-2 text-gray-400'>{placeholder}</p>
        <input type="text" 
        className='block w-full border-b border-b-gray-300 py-2 outline-none focus:border-blue-500 focus:ring-blue-200' 
        placeholder={placeholder}/>
    </div>
        
  )
}