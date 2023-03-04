import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCars } from "../redux/carSlice";
import axios from "axios";
import "./CarsPage.css";
import SectionListCar from "../sections/SectionListCar";
import ChevronRight from "../assets/img/chevron-right.png";
import AddNewNotification from "../components/AddNewNotification";
import DeleteNotification from "../components/DeleteNotification";

const CarsPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [addNewStatus, setAddNewStatus] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);
  let activeClassName = "menuItemActive";

  console.log(location.state);

  useEffect(() => {
    if (location.state !== null) {
      if ("statusAdd" in location.state) {
        setAddNewStatus(location.state.statusAdd);
        setTimeout(() => {
          setAddNewStatus(false);
        }, 5000);
      }
      if ("statusDelete" in location.state) {
        setDeleteStatus(location.state.statusDelete);
        setTimeout(() => {
          setDeleteStatus(false);
        }, 5000);
      }
    }
  }, [location.state]);

  useEffect(() => {
    //get data from api
    const urlAPI = "https://bootcamp-rent-cars.herokuapp.com";
    const config = {
      headers: {
        access_token: JSON.parse(localStorage.getItem("accessToken")),
      },
    };

    axios
      .get(`${urlAPI}/admin/v2/car`, config)
      .then(async (res) => {
        const tempCars = await res.data.cars;
        dispatch(setCars(tempCars));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch, deleteStatus]);
  return (
    <main id="pageCars">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 leftSidebar">
            <h2 className="pageTitle">CARS</h2>
            <NavLink to="#listcar" className={({ isActive }) => (isActive ? activeClassName : "menuItem")}>
              List Car
            </NavLink>
          </div>
          <div className="col-lg-10 rightContent">
            {addNewStatus ? (
              <div className="addNewToast">
                <AddNewNotification />
              </div>
            ) : null}
            {deleteStatus ? (
              <div className="addNewToast">
                <DeleteNotification />
              </div>
            ) : null}

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
