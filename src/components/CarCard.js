import React from "react";
import { Button } from "react-bootstrap";
import "./CarCard.css";
import userIcon from "../assets/img/fi_users.png";
import clockIcon from "../assets/img/fi_clock.png";
import trashIcon from "../assets/img/fi_trash-2.png";
import editIcon from "../assets/img/fi_edit.png";

const carCard = (dataCar) => {
  const car = dataCar.dataCar;
  const date = new Date(car.updatedAt);

  return (
    <article className="col-lg-4">
      <div className="carCard">
        <figure className="carImageContainer">
          <img src={car.image} className="carImage img-fluid" alt="Car" />
        </figure>
        <div className="carDetailContainer">
          <h3 className="carName">{car.name}</h3>
          <p className="carPrice">{car.price}</p>
          <p className="carCategory">
            <img src={userIcon} className="carCategoryIcon" alt="Category Icon" /> {car.category === "small" ? "2 - 4 People" : ""} {car.category === "Medium" ? "4 - 6 People" : ""} {car.category === "large" ? "6 - 8 People" : ""}
          </p>
          <p className="carUpdate">
            <img src={clockIcon} className="carUpdateIcon" alt="Clock Icon" /> Updated at {date.getDate()} {date.toLocaleString("default", { month: "long" })} {date.getFullYear()},{" "}
            {date.toLocaleString("default", { hour: "numeric", minute: "numeric", hourCycle: "h24" })}
          </p>
        </div>
        <div className="cardActionContainer d-flex justify-content-between">
          <Button className="deleteButton d-flex align-items-center justify-content-center">
            <img src={trashIcon} className="img-fluid" alt="Trash Icon" />
            Delete
          </Button>
          <Button className="editButton  d-flex align-items-center justify-content-center">
            <img src={editIcon} className="img-fluid" alt="Edit Icon" />
            Edit
          </Button>
        </div>
      </div>
    </article>
  );
};

export default carCard;
