import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';
import LoadingAdmin from '../../../components/LoadingAdmin';
import { dashboardAsync } from '../../auth/slice/admin-slice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
ChartJS.register(ArcElement, Tooltip, Legend);

export default function DashboardContainer() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(dashboardAsync()).unwrap()
  },[]) 
  const dashboard = useSelector(state=> state?.admin?.dashboard)
  const isLoading = useSelector((state) => state?.admin?.isLoading);

  const groupColor = dashboard.map(item => item?.name) 
  console.log(groupColor)

  const data = {
    labels: dashboard.map(item => item?.name),
    datasets: [
      {
        label: '# quantity',
        data: dashboard.map(item => item?.total_quantity),
        backgroundColor: dashboard.map(item => item?.hexcode),
      },
    ],
  };
  console.log(dashboard)
  

  if (isLoading) {
    return <LoadingAdmin /> }

  return (
    <div className='w-[60vh]'>
        <Pie data={data} />
    </div>
  )
}
