import React from "react";
import { Button } from "react-bootstrap";
import "./SectionListCar.css";
import CarCard from "../components/CarCard";

const SectionListCar = () => {
  return (
    <section id="sectionListCar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="titleArea d-flex justify-content-between align-items-center">
              <h2 className="listCarTitle">List Car</h2>
              <Button className="addNewButton">+ Add New Car</Button>
            </div>
            <div className="filterArea">
              <Button className="buttonFilter active">All</Button>
              <Button className="buttonFilter">2 - 4 People</Button>
              <Button className="buttonFilter">4 - 6 People</Button>
              <Button className="buttonFilter">6 - 8 People</Button>
            </div>
            <div className="carCardContainer row">
              <CarCard />
              <CarCard />
              <CarCard />
              <CarCard />
              <CarCard />
              <CarCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionListCar;
