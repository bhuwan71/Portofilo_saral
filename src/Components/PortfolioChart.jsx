/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import ReactECharts from "echarts-for-react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Allocation from "./Allocation";
const ChartComponent = () => {
  const lineChartOptions = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      textStyle: {
        color: "#000", // Customize legend text color if needed
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisLine: {
        show: false, // Remove xAxis line
      },
      axisTick: {
        show: false, // Remove xAxis ticks
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: false, // Remove yAxis line
      },
      splitLine: {
        show: false, // Remove grid lines
      },
      axisTick: {
        show: false, // Remove yAxis ticks
      },
    },
    series: [
      {
        type: "line",
        stack: "Total",
        data: [123210, 132132, 10321, 13214, 2129021, 22130, 23210],
        color: "#a885ff", // Line color
        symbol: "none", // Remove line chart dots
        areaStyle: {
          color: "rgba(168, 133, 255, 0.2)", // Shadow effect below the line
        },
        markPoint: {
          data: [
            {
              type: "max",
              name: "Highest Point",
              symbol: "pin", // Use a custom symbol (e.g., 'pin' for a more appealing look)
              symbolSize: [50, 50], // Customize the size of the symbol
              itemStyle: {
                color: "#a885ff",
                borderWidth: 3,
                borderColor: "#ffffff", // Add a border around the symbol
              },
              label: {
                show: true,
                color: "#000",
                fontWeight: "bold",
                backgroundColor: "#ffffff", // Background color for the tooltip
                borderColor: "#a885ff", // Border color for the tooltip
                borderWidth: 1,
                padding: [5, 10],
                formatter: "{b}: {c}", // Custom tooltip format
              },
              tooltip: {
                show: true,
                formatter: "Highest Point: {c}",
                backgroundColor: "#ffffff", // Tooltip background color
                borderColor: "#a885ff", // Tooltip border color
                borderWidth: 1,
                textStyle: {
                  color: "#000", // Tooltip text color
                },
                padding: [5, 10],
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <div className="flex flex-col b- py-5 gap-10 lg:flex-row">
      <div className="lg:w-[60%] w-full">
        <div className="flex flex-wrap justify-between gap-4 items-stretch pb-5">
          <div className="bg-white w-full lg:w-[30%] border-gray-200 border text-sm rounded-md shadow-md p-4 flex flex-col justify-between">
            <h3 className="text-gray-500 py-1">All Time Profit</h3>
            <span className="text-green-500 py-1 font-sans font-medium">
              + Rs 30,0000.1
            </span>
            <span className="text-green-500 py-1 items-center gap-[1px] flex font-sans text-xs font-medium">
              <FaCaretDown />
              5.8 %
            </span>
          </div>
          <div className="bg-white w-full lg:w-[30%] border-gray-200 border text-sm rounded-md shadow-md p-4 flex flex-col justify-between">
            <h3 className="text-gray-500 ">Best Performer</h3>
            <span className="text-gray-700 text-xs py-1 font-sans font-medium flex items-center">
              <img
                src="https://kisan.adbl.gov.np/Content/homepage/images/adbl%20.png"
                alt="ADBL Logo"
                className="w-6 h-auto mr-2"
              />
              ADBL
            </span>
            <span className="text-green-500 py-1 items-center gap-[2px] flex font-sans text-xs font-medium">
              <span className="text-green-500 px-1 py-1 font-sans font-medium">
                + Rs 30,0000.1
              </span>
              <FaCaretUp />
              5.8 %
            </span>
          </div>
          <div className="bg-white w-full lg:w-[30%] border-gray-200 border text-sm rounded-md shadow-md p-4 flex flex-col justify-between">
            <h3 className="text-gray-500 ">Best Performer</h3>
            <span className="text-gray-700 text-xs py-1 font-sans font-medium flex items-center">
              <img
                src="https://kisan.adbl.gov.np/Content/homepage/images/adbl%20.png"
                alt="ADBL Logo"
                className="w-6 h-auto mr-2"
              />
              GBBL
            </span>
            <span className="text-red-500 py-1 items-center gap-[2px] flex font-sans text-xs font-medium">
              <span className="text-red-500 px-1 py-1 font-sans font-medium">
                + Rs 30,0000.1
              </span>
              <FaCaretDown />
              5.8 %
            </span>
          </div>
        </div>
        <div className="bg-white p-4 border-gray-200 border shadow-md rounded-lg">
          <h2 className="font-xs pb-1">Portfolio Balance</h2>
          <div className="flex gap-2 items-center">
            <span className="font-lg lg:text-2xl">Rs 70,00000.4</span>
            <div>
              <span className="bg-[#c7ffa4]  text-xs font-lg mx-1 py-1 px-2 rounded-lg">
                +4.5%
              </span>
              <span className="bg-[#c7ffa4] text-xs font-lg mx-1 py-1 px-2 rounded-lg">
                Rs 3,000
              </span>
            </div>
          </div>
          <ReactECharts
            option={lineChartOptions}
          />
        </div>
      </div>
      <div className="lg:w-[40%] p-4 bg-white shadow-md rounded-lg">
        <Allocation />
      </div>
    </div>
  );
};

export default ChartComponent;
