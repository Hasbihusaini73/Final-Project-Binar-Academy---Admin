import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCarsState } from "../redux/carSlice";
import "./SectionListCar.css";
import CarCard from "../components/CarCard";

const SectionListCar = () => {
  //declaring variable
  const navigate = useNavigate();
  const cars = useSelector(selectCarsState);
  const [filteredCars, setFilteredCars] = useState();

  const handleFilterButton = (e) => {
    e.preventDefault();
    if (e.target.value === "all") {
      setFilteredCars(cars);
    } else {
      const tempCarsFilter = cars;
      setFilteredCars(tempCarsFilter.filter((obj) => obj.category === e.target.value));
    }
    console.log(filteredCars);
    console.log(e.target.value);
  };

  const handleAddNewButton = () => {
    navigate("/listcar/addnewcar");
  };

  useEffect(() => {
    setFilteredCars(cars);
  }, [cars]);

  return (
    <section id="sectionListCar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="titleArea d-flex justify-content-between align-items-center">
              <h2 className="listCarTitle">List Car</h2>
              <Button className="addNewButton" onClick={handleAddNewButton}>
                + Add New Car
              </Button>
            </div>
            <div className="filterArea">
              <Button className="buttonFilter active" value="all" onClick={handleFilterButton}>
                All
              </Button>
              <Button className="buttonFilter" value="small" onClick={handleFilterButton}>
                2 - 4 People
              </Button>
              <Button className="buttonFilter" value="Medium" onClick={handleFilterButton}>
                4 - 6 People
              </Button>
              <Button className="buttonFilter" value="large" onClick={handleFilterButton}>
                6 - 8 People
              </Button>
            </div>
            <div className="carCardContainer row">
              {filteredCars?.map((car, index) => (
                <CarCard key={index} dataCar={car} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionListCar;
