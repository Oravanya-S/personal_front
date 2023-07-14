import React from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import moment from "moment";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";
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
ChartJS.register(ArcElement, Tooltip, Legend);

export default function DashboardContainer() {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dashboardAsync()).unwrap();
  }, []);
  const dashboard = useSelector((state) => state?.admin?.dashboard);
  const isLoading = useSelector((state) => state?.admin?.isLoading);

  console.log(dashboard)

  const groupColor = dashboard?.dashboardGroupColor?.map((item) => item?.name);
  const datagroupColor = dashboard?.dashboardGroupColor?.map(
    (item) => item?.total_quantity
  );
  const hexcodegroupColor = dashboard?.dashboardGroupColor?.map(
    (item) => item?.hexcode + "90"
  );

  console.log(moment(startDate).format('YYYY-MM-DD'))

  const data = {
    type: "pie",
    labels: groupColor,
    datasets: [
      {
        label: " #quantity",
        data: datagroupColor,
        backgroundColor: hexcodegroupColor,
        options: {
          plugins: {
            legend: {
              display: true,
              position: "chartArea",
            },
          },
        },
      },
    ],
  };
  console.log(startDate);

  const handleOnchange = async (date) => {
    setStartDate(date)
    await dispatch(dashboardAsync()).unwrap();
  }

  if (isLoading) {
    return <LoadingAdmin />;
  }

  return (
    <div className="px-9 flex flex-col gap-3">
      <div className="h-[50px]">
        <div className="flex justify-end items-center">
          <div className="px-2">
            <BsCalendarFill size={22}/>
          </div>
          <DatePicker
            style={{ fontFamily: 'Arial, sans-serif' }}
            className="px-3 py-2 w-[242px] shadow-sm"
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
      <div className="w-[400px] my-4 mx-auto">
        <div>Sale by color</div>
        <Pie data={data} />
      </div>
    </div>
  );
}
