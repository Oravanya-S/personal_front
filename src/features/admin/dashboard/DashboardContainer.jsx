import React from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import moment from "moment";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Doughnut, Pie, Bar } from "react-chartjs-2";
import { FaHeart, FaRegMoneyBillAlt, FaShoppingCart } from "react-icons/fa";
import {
  BsCalendarFill,
  BsFillBagCheckFill,
  BsPeopleFill,
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dashboardAsync(moment(startDate).format('YYYY-MM-DD'))).unwrap();
  }, []);
  const dashboard = useSelector((state) => state?.admin?.dashboard);
  const isLoading = useSelector((state) => state?.admin?.isLoading);

  console.log(dashboard)
  const groupColor = dashboard?.dashboardGroupColor?.map((item) => item?.name);
  const datagroupColor = dashboard?.dashboardGroupColor?.map((item) => item?.total_quantity);
  const hexcodegroupColor = dashboard?.dashboardGroupColor?.map((item) => item?.hexcode + "90");

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
    await dispatch(dashboardAsync(moment(date).format('YYYY-MM-DD'))).unwrap();
  }

const data = {
  labels: modelName,
  datasets: [{
    label: 'My First Dataset',
    data: dataModel,
    backgroundColor: '#7D6352',
    borderColor: 'black',
    borderWidth: 1
  }]
};

  const options = {
    plugins: {
      legend: {
        display: false,
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
          stepSize: 1,
        },
      },
      x: {
        grid: {
          display: false,
        },
        // border: {
        //   color: "gray",
        // },
      },
    },
  };


  if (isLoading) {
    return <LoadingAdmin />;
  }

  return (
    <div className="px-9 flex flex-col gap-6">
      <div className="h-[50px]">
        <div className="flex justify-end items-center">
          <div className="px-2">
            <BsCalendarFill size={22}/>
          </div>
          <DatePicker
            style={{ fontFamily: 'Arial, sans-serif' }}
            className="px-3 py-2 w-[242px] shadow-sm text-lg"
            selected={startDate}
            onChange={handleOnchange}
            dateFormat="yyyy-MM-dd"
          />
        </div>
      </div>
      {/* <div>
        <div className="text-lg pb-2 font-medium">This Month</div>
      </div> */}
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
      {modelName.length > 0 ? <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-4 w-[410px]">
          <div className="font-medium py-1 px-4 bg-[#7D6352] text-white rounded-lg w-fit">Sale by Color</div>
          <Pie data={dataPie} />
        </div>
        <div className="flex flex-col gap-6">
          <div className="font-medium py-1 px-4 bg-[#7D6352] text-white rounded-lg w-fit">Sale by Model</div>
          <div className="h-[400px]">
            <Bar data={data} options={options}></Bar>
          </div>
        </div>
      </div> : <div className="mt-12 flex justify-center text-xl text-gray-600">No order this day</div>}
    </div>
  );
}
