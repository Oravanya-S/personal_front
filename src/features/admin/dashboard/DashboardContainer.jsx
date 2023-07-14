import React from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import moment from "moment";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
// import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Doughnut, Pie, Bar } from "react-chartjs-2";
import { FaHeart, FaRegMoneyBillAlt, FaShoppingCart } from "react-icons/fa";
import {
  BsCalendarFill,
  BsFillBagCheckFill,
} from "react-icons/bs";
import LoadingAdmin from "../../../components/LoadingAdmin";
import { dashboardAsync } from "../../auth/slice/admin-slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import DashboardItem from "./DashBoardItem";
import { useState } from "react";
ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default function DashboardContainer() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dashboardAsync({startDate : moment(startDate).format('YYYY-MM-DD'), endDate: moment(endDate).format('YYYY-MM-DD')})).unwrap();
  }, []);
  const dashboard = useSelector((state) => state?.admin?.dashboard);
  const isLoading = useSelector((state) => state?.admin?.isLoading);

  console.log(dashboard)
  const groupColor = dashboard?.dashboardGroupColor?.map((item) => item?.name);
  const datagroupColor = dashboard?.dashboardGroupColor?.map((item) => item?.total_quantity);
  const hexcodegroupColor = dashboard?.dashboardGroupColor?.map((item) => item?.hexcode);

  ChartJS.defaults.font.size = 14
  const dataPie = {
    type: "pie",
    labels: groupColor,
    datasets: [
      {
        label: " #quantity",
        data: datagroupColor,
        backgroundColor: hexcodegroupColor,
      },
    ],
  };
  
  const modelName = dashboard?.dashboardModel?.map((item) => item?.name)
  const dataModel = dashboard?.dashboardModel?.map((item) => item?.total_quantity);
  const handleOnchange = async (date) => {
    setStartDate(date)
    await dispatch(dashboardAsync({startDate : moment(date).format('YYYY-MM-DD'), endDate: moment(endDate).format('YYYY-MM-DD')})).unwrap();
  }
  const handleOnchangeEndDate = async (date) => {
    setEndDate(date)
    await dispatch(dashboardAsync({startDate: moment(startDate).format('YYYY-MM-DD'),endDate : moment(date).format('YYYY-MM-DD') })).unwrap();
  }

const data = {
  labels: modelName,
  datasets: [{
    label: ' #quantity',
    data: dataModel,
    backgroundColor: '#7D6352',
    borderColor: 'black',
    barPercentage: 0.8,
    borderWidth: 1
  }]
};

  const options = {
    plugins: {
      legend: {
        display: false,
        font: {
          size: "4px"
        }
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    borderRadius: "5",
    minRotation: "10",
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        ticks: {
          stepSize: 2,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };


  if (isLoading) {
    return <div className="mt-[100px]">
            <LoadingAdmin />;
          </div>
  }

  return (
    <div className="px-9 flex flex-col gap-6">
      <div className="h-[50px]">
        <div className="flex justify-end items-center gap-8">
          <div className="flex items-center">
            <div>
              <BsCalendarFill size={22}/>
            </div>
            <div className="mx-2">Start Date:</div>  
            <div className="cursor-pointer">
              <DatePicker
                style={{ fontFamily: 'Arial, sans-serif' }}
                className="px-3 py-2 w-[242px] shadow-sm text-lg"
                selected={startDate}
                onChange={handleOnchange}
                dateFormat="yyyy-MM-dd"
              />
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <BsCalendarFill size={22}/>
            </div>
            <div className="mx-2">End Date:</div> 
            <DatePicker
              className="px-3 py-2 w-[242px] shadow-sm text-lg"
              selected={endDate}
              onChange={handleOnchangeEndDate}
              dateFormat="yyyy-MM-dd"
              fontFamily='pop'
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <DashboardItem
          title="Sales"
          result={dashboard?.dashboardNumBag?.total_bag}
        >
          <BsFillBagCheckFill fill="#000" size={32} />
        </DashboardItem>
        <DashboardItem
          title="Earning"
          result={dashboard?.dashboardEarning?.total_earning}
        >
          <FaRegMoneyBillAlt fill="#000" size={36} />
        </DashboardItem>
        <DashboardItem
          title="Carts"
          result={dashboard?.dashboardCart?.total_cart}
        >
          <FaShoppingCart fill="#000" size={34} />
        </DashboardItem>
        <DashboardItem
          title="Favorites"
          result={dashboard?.dashboardFav?.total_fav}
        >
          <FaHeart fill="#000" size={32} />
        </DashboardItem>
      </div>
      {groupColor?.length > 0 ? <div className="grid grid-cols-2 gap-6 mt-2 mb-2">
        <div className="flex flex-col gap-4 w-[410px]">
          <div className="font-medium py-[5px] px-4 mb-1 bg-[#7D6352] text-white rounded-lg w-fit">Sale by Color</div>
          <div className="opacity-90"><Pie data={dataPie} /></div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="font-medium py-[5px] px-4 bg-[#7D6352] text-white rounded-lg w-fit">Sale by Model</div>
          <div className="h-[400px] ">
            <Bar data={data} options={options}></Bar>
          </div>
        </div>
      </div> : <div className="mt-12 flex justify-center text-xl text-gray-600">No orders in selected date period</div>}
    </div>
  );
}
