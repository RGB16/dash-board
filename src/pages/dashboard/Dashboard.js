// src/components/Dashboard/Dashboard.js
import React from 'react';
import './dashboard.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import MainComponent from '../../components/main-component/MainComponent';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className='sidebar-container'>
        <Sidebar />
      </div>
      <div className="content">
        <div className='navbar-container'>
          <Navbar />
        </div>
        <div className='main-container'>
          <MainComponent />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
