import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';
import { FaHeart, FaRegMoneyBillAlt, FaShoppingCart } from "react-icons/fa";
import {  BsFillBagCheckFill, BsPeopleFill } from "react-icons/bs";
import LoadingAdmin from '../../../components/LoadingAdmin';
import { dashboardAsync } from '../../auth/slice/admin-slice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import DashboardItem from './DashBoardItem';
ChartJS.register(ArcElement, Tooltip, Legend);

export default function DashboardContainer() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(dashboardAsync()).unwrap()
  },[]) 
  const dashboard = useSelector(state=> state?.admin?.dashboard)
  const isLoading = useSelector((state) => state?.admin?.isLoading);

  const groupColor = dashboard?.dashboardGroupColor?.map(item => item?.name) 
  const datagroupColor = dashboard?.dashboardGroupColor?.map(item => item?.total_quantity)
  const hexcodegroupColor = dashboard?.dashboardGroupColor?.map(item => item?.hexcode+'90')
  

  const data = {
    type: 'pie',
    labels: groupColor,
    datasets: [
      {
        label: ' #quantity',
        data: datagroupColor,
        backgroundColor: hexcodegroupColor,
        options: {
          plugins: {
              legend: {
                  display: true,
                  position: 'chartArea',
                }
        }}
      },
    ],
  };
  console.log(dashboard)
  
  if (isLoading) {
    return <LoadingAdmin /> }

  return (
    <div className='px-8'>
      <div>
        <div className='text-lg pb-2 font-medium'>This Month</div>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        <DashboardItem title="Sales" result={dashboard?.dashboardNumBag?.total_bag}><BsFillBagCheckFill fill="#000" size={32}/></DashboardItem>
        <DashboardItem title="Earning" result={dashboard?.dashboardEarning?.total_earning}><FaRegMoneyBillAlt fill="#000" size={36}/></DashboardItem>
        <DashboardItem title="Carts" result={dashboard?.dashboardCart?.total_cart}><FaShoppingCart fill="#000" size={34}/></DashboardItem>
        <DashboardItem title="Favorites" result={dashboard?.dashboardFav?.total_fav}><FaHeart fill="#000" size={32}/></DashboardItem>
      </div>
      <div className='w-[25vw] my-4'>
          <Pie data={data} />
      </div>
    </div>
    
  )
}
