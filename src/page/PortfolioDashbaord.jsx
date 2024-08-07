/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ChartComponent from "../Components/PortfolioChart";
import PortfolioTable from "../Components/PortfolioTable";
const PortfolioDashboard = () => {
  const [showChart, setShowChart] = useState(true);

  return (
    <div className="lg:mx-auto bg-[#f7f6f9] px-10 py-10 lg:px-20">
      <div className="flex items-center justify-between mb-4">
        <div
          onClick={() => setShowChart(!showChart)}
          className={`flex items-center cursor-pointer px-3 py-1 rounded-full transition duration-300 ease-in-out ${
            showChart ? "bg-blue-500" : "bg-gray-500"
          }`}
        >
          <div className="flex items-center justify-center w-12 h-6 bg-white rounded-full relative">
            <div
              className={`absolute top-0 left-0 w-6 h-6 bg-blue-600 rounded-full transition-transform duration-300 ease-in-out ${
                showChart ? "transform translate-x-6" : ""
              }`}
            />
          </div>
          <span className="ml-2 text-xs text-white">
            {showChart ? "Show Table Only" : "Show Chart"}
          </span>
        </div>
      </div>
      {showChart ? <ChartComponent /> : null}
      <PortfolioTable />
    </div>
  );
};

export default PortfolioDashboard;
