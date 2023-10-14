// src/components/Dashboard/Sidebar.js
import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { AiOutlineTags } from "react-icons/ai";
import { LuCalendarClock, LuPieChart, LuSettings } from "react-icons/lu";
import { BiUserCircle } from "react-icons/bi";

const Sidebar = () => {
  const [activeNavLink, setActiveNavLink] = useState("Dashboard");

  const handleNavLinkClick = (navLink) => {
    setActiveNavLink(navLink);
  };

  useEffect(() => {
    // Get the current pathname from the URL
    const currentPathname = window.location.pathname;

    // Map the pathname to the NavLink name (e.g., '/dashboard' maps to 'Dashboard')
    const pathToNavLinkMap = {
      '/dashboard': 'Dashboard',
      '/transactions': 'Transactions',
      '/schedules': 'Schedules',
      '/users': 'Users',
      '/settings': 'Settings',
    };

    // Update the active NavLink based on the pathname
    setActiveNavLink(pathToNavLinkMap[currentPathname] || 'Dashboard');
  }, []);

  return (
    <div className="sidebar">
      <div className="top">
        <div className="board-title">Board.</div>
      </div>
      <div className="navlinks">
        <a
          href="/dashboard"
          className={activeNavLink === "Dashboard" ? "active-link" : ""}
          onClick={() => handleNavLinkClick("Dashboard")}
        >
          <span className="navlinks-icons">
            <LuPieChart />
          </span>
          Dashboard
        </a>
        <a
          href="/transactions"
          className={activeNavLink === "Transactions" ? "active-link" : ""}
          onClick={() => handleNavLinkClick("Transactions")}
        >
          <span className="navlinks-icons">
            <AiOutlineTags className="transaction-icon" />
          </span>
          Transactions
        </a>

        <a
          href="/schedules"
          className={activeNavLink === "Schedules" ? "active-link" : ""}
          onClick={() => handleNavLinkClick("Schedules")}
        >
          <span className="navlinks-icons">
            <LuCalendarClock />
          </span>
          Schedules
        </a>
        <a
          href="/users"
          className={activeNavLink === "Users" ? "active-link" : ""}
          onClick={() => handleNavLinkClick("Users")}
        >
          <span className="navlinks-icons">
            <BiUserCircle />
          </span>
          Users
        </a>
        <a
          href="/settings"
          className={activeNavLink === "Settings" ? "active-link" : ""}
          onClick={() => handleNavLinkClick("Settings")}
        >
          <span className="navlinks-icons">
            <LuSettings />
          </span>
          Settings
        </a>
      </div>
      <div className="bottom">
        <a href="/help">Help</a>
        <a href="/contact-us">Contact us</a>
      </div>
    </div>
  );
};

export default Sidebar;
