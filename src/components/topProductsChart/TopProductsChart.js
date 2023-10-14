import React from 'react';
import './topproductchart.css';


const TopProductsChart = () => {
  return (
    <div className="top-products-chart">
    <div className='top-products-header'>
        <h2>Top Products</h2>
        <div className="date">May-June 2001</div>
    </div>
    <div className='top-content'>
        <div className='top-left'>
            <img width={40} src='./assets/pie-chart.png' alt="chart-pie"/>
        </div>
        <div className="top-right">
            <div className="product-ring basic-trees">
                <div className='right-product-content'>
                    <div className='dot-trees'></div>
                    <h3>Basic Tees</h3>
                </div>  
                <div className="percentage">55%</div>
            </div>
            <div className="product-ring customer-pants">
                <div className='right-product-content'>
                    <div className='dot-pants'></div>
                    <h3>Custom Short Pants</h3>
                </div>
                <div className="percentage">31%</div>
            </div>
            <div className="product-ring super-hoodies">
                <div className='right-product-content'>
                    <div className='dot-hoodies'></div>
                    <h3>Super Hoodies</h3>
                </div>
                <div className="percentage">14%</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TopProductsChart;
