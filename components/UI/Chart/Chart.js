import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./apex.module.css";

function MyChart() {
  const [state, setState] = useState({
    series: [
      {
        name: "current",
        data: [44, 55, 41, 67, 22, 43, 23, 20, 36, 45, 35, 50],
        color: "#6366F1",
      },
      {
        name: "Previous",
        data: [11, 17, 15, 15, 21, 14, 18, 6, 20, 17, 13, 9],
        color: "#38BDF8",
      },
      {
        name: "Unpaid",
        data: [13, 23, 20, 8, 13, 27, 15, 9, 27, 5, 22, 10],
        color: "#FF5630",
      },
    ],
    options: {
      chart: {
        fontFamily: "Poppins",
        type: "pie",
        height: 350,
        stacked: true,
        background: "#fff",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },
      tooltip: {
        followCursor: true,
      },
      dataLabels: {
        style: {
          fontSize: 10,
        },
      },
      //   stroke: {
      //     colors: ["transparent"],
      //     width: 5,
      //   },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: 80,

          borderRadius: 10,
        },
      },
      xaxis: {
        tickPlacement: "on",
        type: "Month",
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ],
        labels: {
          style: {
            colors: "#505F79",
            fontSize: 13,
            fontWeight: 500,
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#A7AFBC",
            fontSize: 12,
            fontWeight: 500,
          },
        },
        title: {
          text: "Percentage Of Numbers",
          style: {
            fontFamily: "Inter",
            fontSize: 12,
            color: "#7A869A",
            fontWeight: 500,
            cssClass: "apexcharts-yaxis-title",
          },
        },
      },
      legend: {
        position: "top",
        offsetY: 10,
        offsetX: -100,
      },
      fill: {
        opacity: 5,
      },
      grid: {
        borderColor: "#fff",
      },
    },
  });
  return (
    <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type='line'
        width={720}
        height={488}
      />
      {/* <ReactApexChart
        options={state.options}
        series={state.series}
        type='line'
        width={686}
        height={488}
      /> */}
      {/* <ReactApexChart
        options={state.options}
        series={state.series}
        type='area'
        width={686}
        height={488}
      /> */}
    </div>
  );
}

export default MyChart;
