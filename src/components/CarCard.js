import React from "react";
import { Button } from "react-bootstrap";
import "./CarCard.css";
import mobilInova from "../assets/img/image 1.png";
import userIcon from "../assets/img/fi_users.png";
import clockIcon from "../assets/img/fi_clock.png";
import trashIcon from "../assets/img/fi_trash-2.png";
import editIcon from "../assets/img/fi_edit.png";

const carCard = () => {
  return (
    <article className="col-lg-4">
      <div className="carCard">
        <figure className="carImageContainer">
          <img src={mobilInova} className="carImage img-fluid" alt="Car" />
        </figure>
        <div className="carDetailContainer">
          <h3 className="carName">Nama/Tipe Mobil</h3>
          <p className="carPrice">Rp 500.000 / hari</p>
          <p className="carCategory">
            <img src={userIcon} className="carCategoryIcon" alt="Category Icon" /> 6 - 8 people
          </p>
          <p className="carUpdate">
            <img src={clockIcon} className="carUpdateIcon" alt="Clock Icon" /> Updated at 4 Apr 2022, 09.00
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
