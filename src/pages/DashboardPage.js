import React from "react";
import { NavLink } from "react-router-dom";
import "./DashboardPage.css";
import SectionBarGraph from "../sections/SectionBarGraph";
import ChevronRight from "../assets/img/chevron-right.png";

const DashboardPage = () => {
  let activeClassName = "menuItemActive";
  return (
    <div id="pageDashboard">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 leftSidebar">
            <h2 className="pageTitle">DASHBOARD</h2>
            <NavLink to="#dashboard" className={({ isActive }) => (isActive ? activeClassName : "menuItem")}>
              Dashboard
            </NavLink>
          </div>
          <div className="col-lg-10 rightContent">
            <div className="breadcrumb d-flex align-items-center">
              <h4 className="breadcrumbRoot">Dashboard</h4>
              <img src={ChevronRight} className="breadcrumbArrow img-fluid" alt="Breadcrumb Arrow"></img>
              <h4 className="breadcrumbCurrent">Dashboard</h4>
            </div>
            <SectionBarGraph />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
