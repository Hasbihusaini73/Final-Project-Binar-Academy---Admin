import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import burgerMenu from "../assets/img/fi_menu.png";
import userImage from "../assets/img/Group 15.png";

function OffCanvasExample({ ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //note : tidak pakai NavLink/Link karena tidak support scroll to section

  return (
    <>
      <div className="offcanvas-button" data-bs-toggle="offcanvas" role="button">
        <img src={burgerMenu} alt="menu-mobile" onClick={handleShow} />
      </div>
      <Offcanvas show={show} onHide={handleClose} {...props} className="customOffCanvas" scroll={true}>
        <Offcanvas.Header closeButton>
          <h5 className="fw-5">BCR</h5>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="navbar-nav ms-auto fs-5 fw-normal">
            <li className="nav-item" key="offcanvas-1">
              <a className="nav-link active" aria-current="page" href="#about">
                Our Services
              </a>
            </li>
            <li className="nav-item" key="offcanvas-2">
              <a className="nav-link active" href="#whyus">
                Why Us
              </a>
            </li>
            <li className="nav-item" key="offcanvas-3">
              <a className="nav-link active" href="#testimonial">
                Testimonial
              </a>
            </li>
            <li className="nav-item" key="offcanvas-4">
              <a className="nav-link active" href="#faq">
                FAQ
              </a>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const DefaultHeader = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <nav id="headerNavbar" className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <button className="navbar-brand" onClick={handleLogoClick}></button>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <OffCanvasExample placement="start" />
        <div className="collapse navbar-collapse" id="navbarNav">
          <form className="d-flex ms-auto header-search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn search-button" type="submit">
              Search
            </button>
          </form>
          <ul className="navbar-nav fs-5 fw-normal ms-3">
            <li className="nav-item d-flex align-items-center">
              <img src={userImage} className="img-fluid user-image" alt="user-profile"></img>
              <a className="nav-link active user-nav" href="#about" key="navbar-1">
                Unis Badri
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

function NormalHeader() {
  return <DefaultHeader></DefaultHeader>;
}

export default NormalHeader;
