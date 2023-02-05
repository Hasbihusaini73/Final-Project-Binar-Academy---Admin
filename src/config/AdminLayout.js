import React from "react";
import "./AdminLayout.css";
import SidebarMenu from "../components/SidebarMenu";
import NormalHeader from "../components/Header";

const AdminLayout = ({ Children }) => {
  return (
    <>
      <div id="main-container" className="container-fluid d-flex">
        <div className="sidebar-container">
          <SidebarMenu />
        </div>
        <div className="header-container">
          <NormalHeader />
          {Children}
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
