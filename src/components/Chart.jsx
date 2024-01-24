/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import {Line} from "react-chartjs-2";
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from "chart.js";

ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = ({arr=[], currency, days}) => {
  const prices = [];
  const date = [];

  for(let i=0; i<arr.length; i++) {
    if(days==="24h") date.push(new Date(arr[i][0]).toLocaleTimeString());
   else date.push(new Date(arr[i][0]).toLocaleDateString());
    prices.push(arr[i][1]);
    // console.log(date, prices);
  }

  const data = {
    labels:date,
    datasets: [{
      label:`Price in ${currency}`,
      data: prices,
      backgroundColor: "rgba(255,99,132,0.5)",
      borderColor: "rgba(255,99, 132)",
    },
  ],
  };
  
  return (
   <Line 
   options={{
    responsive: true,
   }}
   data={data}
   />
  );
};

export default Chart
