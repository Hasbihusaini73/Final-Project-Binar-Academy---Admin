import React from "react";
import { NavLink } from "react-router-dom";
import "./SidebarMenu.css";
import iconDashboard from "../assets/img/Group 2.png";
import iconCars from "../assets/img/fi_truck.png";

const SidebarMenu = () => {
  let activeClassName = "active-menu";
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: iconDashboard,
    },
    {
      path: "/listcar",
      name: "Cars",
      icon: iconCars,
    },
  ];

  return (
    <section id="sidebar-menu">
      <div className="container-fluid">
        <div className="row">
          <div className="col d-flex flex-column align-items-center left-side">
            <div className="logo-box"></div>
            {menuItem?.map((item, index) => (
              <NavLink to={item.path} key={index} className={({ isActive }) => (isActive ? activeClassName : "sidebar-link")}>
                <div className="icon-image text-center">
                  <img src={item.icon} className="img-fluid" alt="icon-sidebar"></img>
                </div>
                <div className="menu-title text-center">
                  <p>{item.name}</p>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SidebarMenu;
