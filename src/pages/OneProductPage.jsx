import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'
import Loading from '../components/Loading';
import { useEffect } from 'react';

export default function OneProductPage() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        // dispatch(productAsync(id))
    },[]) 

    const product = useSelector(state=> state.model.product)
    const isLoading = useSelector((state) => state?.model?.isLoading);

    if (isLoading) {
        return <Loading /> }

  return (
    <>
        <div className='max-w-[1440px] mx-auto min-h-[calc(100vh-94px)] border border-b-0'>
            <div>OneProductPage</div>
            <div>{id}</div>
        </div>
    </>
  )
}
  // const [detail, setDetail] = useState(false);
    // const [love, setLove] = useState(false)

    // const handleLove = (e) => {
    //   setLove(!love)
    // }
    // let fulfilLove = (love)? 'solid':'regular'
    
  // const handleDetail = () => {
  //   setDetail(!detail);
  // };

  // const handleCloseDetail = () => {
  //   setDetail(false);
  // };

{/* <div
        className="absolute top-5 left-4 underline underline-offset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer"
        onClick={handleDetail}
      >
      <div className="relative">
        See detail
      </div>
      </div>
      {detail ? (
        <div className="absolute bg-white opacity-75 h-[70%] w-[75%]">
            <>
                <ProductDetail item={item?.Model} onClose={handleCloseDetail}/>
            </>
        </div>
      ) : (
        ""
      )} */}