import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function HistoryPage() {
  const { id } = useParams();
  const dispatch = useDispatch()
  
  useEffect(() => {
    
  },[])
  return (
    <div className='max-w-[1440px] mx-auto'>HistoryPage</div>
  )
}
