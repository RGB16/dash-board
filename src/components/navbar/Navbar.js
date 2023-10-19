import React from 'react';
import './navbar.css';
import { GoSearch } from "react-icons/go";
import { BiBell } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">Dashboard</div>
      <div className="navbar-right">
        <div className='search-conatiner'>
            <input type="text" placeholder="Search" />
            <div className='searchIcon'>
              <GoSearch size={16} />
            </div>
        </div>
        <BiBell id="bellIcon" size={24} />
        <img src="./assets/profile-picture.png" alt="Profile"/>
      </div>
    </div>
  );
}

export default Navbar;
