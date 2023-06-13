import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom"
import { modelListWithBagTypeAsync } from '../features/auth/slice/model-slice';

export default function Models() {
  const { modelId } = useParams();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(modelListWithBagTypeAsync(modelId));
  },[]) 

  const model = useSelector(state => state.model.modelListWithBagType)
  console.log(model)
  
  // const model = useSelector(state=> state.model.modelListWithBagType)
  
  return (
    <>
    
    </>
    
  )
}
