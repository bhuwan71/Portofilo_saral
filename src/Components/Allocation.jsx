import { useState } from 'react';
import ReactECharts from 'echarts-for-react';

const pieChartOptions = {
  title: {
    text: 'Donut Chart',
    subtext: 'Fake Data',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    orient: 'horizontal',
    left: 'center',
    bottom: 0,
    itemWidth: 10,
    itemHeight: 10,
    textStyle: {
      fontSize: 12,
    },
    formatter: function (name) {
      const data = pieChartOptions.series[0].data.find((item) => item.name === name);
      return `${name}: ${data.value}`;
    },
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'], // Adjusted for donut chart
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Affiliate' },
        { value: 300, name: 'Video Ads' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
      label: {
        show: false,
      },
      color: ['#000000', '#FF8C00', '#FFA500', '#0000FF', '#00008B'],
    },
  ],
};

const Allocation = () => {
  const [activeTab, setActiveTab] = useState('stocks');

  return (
    <div>
        <h2 className='font-lg text-xl pb-3'>Allocation</h2>
      <div className="flex justify-around border-b border-gray-200 mb-4">
        {['stocks', 'mutual funds', 'debenture'].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-xs transition-colors duration-300 ${
              activeTab === tab
                ? 'border-b-2 border-blue-600 font-bold text-black'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <div>
        {activeTab === 'stocks' && (
          <ReactECharts
            option={pieChartOptions}
            style={{ height: 400, width: '100%' }}
          />
        )}
        {activeTab === 'mutual funds' && (
          <ReactECharts
            option={pieChartOptions} // Change options as needed
            style={{ height: 400, width: '100%' }}
          />
        )}
        {activeTab === 'debenture' && (
          <ReactECharts
            option={pieChartOptions} // Change options as needed
            style={{ height: 400, width: '100%' }}
          />
        )}
      </div>
    </div>
  );
};

export default Allocation;
