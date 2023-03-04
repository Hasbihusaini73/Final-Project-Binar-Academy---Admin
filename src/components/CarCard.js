import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CarCard.css";
import userIcon from "../assets/img/fi_users.png";
import clockIcon from "../assets/img/fi_clock.png";
import trashIcon from "../assets/img/fi_trash-2.png";
import editIcon from "../assets/img/fi_edit.png";
import modalDeleteImage from "../assets/img/img-BeepBeep.png";

const CarCard = (dataCar) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const car = dataCar.dataCar;
  const date = new Date(car.updatedAt);

  const handleEditButton = () => {
    navigate("/listcar/editcar", { state: { carId: car.id } });
  };

  const handleYesDeleteButton = async () => {
    const urlAPI = "https://bootcamp-rent-cars.herokuapp.com";
    const config = {
      headers: {
        access_token: JSON.parse(localStorage.getItem("accessToken")),
      },
    };

    await axios
      .delete(`${urlAPI}/admin/car/${car.id}`, config)
      .then(() => {
        setShow(false);
        navigate("/listcar", { state: { statusDelete: true } });
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          <Button className="deleteButton d-flex align-items-center justify-content-center" onClick={handleShow}>
            <img src={trashIcon} className="img-fluid" alt="Trash Icon" />
            Delete
          </Button>
          <Button className="editButton  d-flex align-items-center justify-content-center" onClick={handleEditButton}>
            <img src={editIcon} className="img-fluid" alt="Edit Icon" />
            Edit
          </Button>
        </div>
      </div>

      <Modal id="modalDelete" show={show} onHide={handleClose} centered>
        <Modal.Body>
          <figure className="d-flex justify-content-center">
            <img src={modalDeleteImage} className="img-fluid deleteModalImage" alt="Mobil Delete"></img>
          </figure>
          <h4 className="modalTitle">Menghapus Data Mobil</h4>
          <p className="modalDesc">Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?</p>
          <div className="modalActionArea d-flex justify-content-center align-items-center gap-3">
            <Button className="yesButton" onClick={handleYesDeleteButton}>
              Ya
            </Button>
            <Button className="noButton" onClick={handleClose}>
              Tidak
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </article>
  );
};

export default CarCard;
