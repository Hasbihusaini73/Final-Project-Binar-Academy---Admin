import React from "react";
import { NavLink } from "react-router-dom";
import "./CarsPage.css";
import SectionListCar from "../sections/SectionListCar";
import ChevronRight from "../assets/img/chevron-right.png";

const CarsPage = () => {
  let activeClassName = "menuItemActive";
  return (
    <main id="pageCars">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 leftSidebar">
            <h2 className="pageTitle">CARS</h2>
            <NavLink to="#dashboard" className={({ isActive }) => (isActive ? activeClassName : "menuItem")}>
              List Car
            </NavLink>
          </div>
          <div className="col-lg-10 rightContent">
            <div className="breadcrumb d-flex align-items-center">
              <h4 className="breadcrumbRoot">Cars</h4>
              <img src={ChevronRight} className="breadcrumbArrow img-fluid" alt="Breadcrumb Arrow"></img>
              <h4 className="breadcrumbCurrent">list Car</h4>
            </div>
            <SectionListCar />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CarsPage;
