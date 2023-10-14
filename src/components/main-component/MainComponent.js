import React from "react";
import Frame from "../frames/Frame";
import BarChart from "../barchart/BarChart";
import TopProductsChart from "../topProductsChart/TopProductsChart";
import AddProfile from "../add-profile/AddProfile";
import './maincomponent.css';
import {BsTagsFill,BsCashStack } from "react-icons/bs";
import { AiTwotoneLike }from "react-icons/ai";
import { FiUsers }from "react-icons/fi";
const MainComponent = () => {
  return (
    <div className="main-component">
      <div className="frames-container" style={{display:"flex"}}>
        <Frame icon=<BsCashStack  style={{ background:'#7FCD93', borderRadius: '50%', padding: '8px', color: "white"}}/> title="Total Revenue" integer="$2,129,430" tag="+2.5%" />
        <Frame icon=<BsTagsFill style={{ background: '#DEBF85', borderRadius: '50%', padding: '8px', color: "white" }}/> title="Total Transaction" integer="1,520" tag="+1.7%" />
        <Frame icon=<AiTwotoneLike style={{ background: '#ECA4A4', borderRadius: '50%', padding: '8px', color: "white" }}/> title="Total Likes" integer="9,721" tag="+1.4%" />
        <Frame icon=<FiUsers style={{ background: '#A9B0E5', borderRadius: '50%', padding: '8px', color: "white" }}/> title="Toal Users" integer="9,721" tag="+4.2%" />  
      </div>
      <div>
        <BarChart />
      </div>
      <div className="main-bottom">
        <div className="bottom-left">
           <TopProductsChart />
        </div>
        <div className="bottom-right">
          <AddProfile />
        </div>
      </div>
    </div>
  );
};
export default MainComponent;


