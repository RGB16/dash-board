// BarChart.js
import React from 'react';
import './barchart.css';

const BarChart = () => {
  // Sample data (you can replace this with your actual data)
  const data = [
    { week: 'Week 1', guests: 400, users: 500 },
    { week: 'Week 2', guests: 450, users: 350 },
    { week: 'Week 3', guests: 300, users: 200 },
    { week: 'Week 4', guests: 350, users: 400 },
    // Add more weeks and data as needed
  ];

  return (
    <div className="bar-chart">
        <div className='bar-heading'>
            <div className='bar-left'>
                <h2>Activities</h2>
                <p>May - June 2021</p> 
            </div>
            <div className='bar-right'>
                <div className='bar-right-guests'>
                    <div className='bar-right-dot1'></div>
                    <div>Guest</div>
                </div>
                <div className='bar-right-users'>
                    <div className='bar-right-dot2'></div>
                    <div>User</div>
                </div>
            </div>
        </div>
      <div className="chart">
        <div className='y-axis'>
            <div className='score'>500</div>
            <div className='score'>400</div>
            <div className='score'>300</div>
            <div className='score'>200</div>
            <div className='score'>100</div>
            <div className='score'>0</div>
        </div>
        {data.map((weekData, index) => (
          <div key={index} className="week">
            <div className='chart-container'>
                <div className="bar green" style={{ height: weekData.users * 2/ 5 }}></div>
                <div className="bar pink" style={{ height: weekData.guests * 2 / 5 }}></div>
            </div>
            <div className="week-label">{weekData.week}</div>
          </div>
        ))}
        <div className='line-0'></div>
        <div className='line-1'></div>
        <div className='line-2'></div>
        <div className='line-3'></div>
        <div className='line-4'></div>
        <div className='line-5'></div>
        
      </div>
    </div>
  );
};

export default BarChart;
