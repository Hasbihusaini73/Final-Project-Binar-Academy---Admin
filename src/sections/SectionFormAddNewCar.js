import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./SectionFormAddNewCar.css";
import AddNewCarForm from "../components/AddNewCarForm";

const SectionFormAddNewCar = () => {
  const navigate = useNavigate();

  const handleCancelButton = () => {
    navigate(-1);
  };

  return (
    <section id="sectionFormAddNewCar">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="titleArea">
              <h2 className="addNewCarTitle">List Car</h2>
            </div>
            <div className="formBox">
              <AddNewCarForm />
            </div>
            <div className="actionArea d-flex justify-content-start align-items-center">
              <Button className="cancelButton" onClick={handleCancelButton}>
                Cancel
              </Button>
              <label className="submitButton" htmlFor="formSubmit" tabIndex="0">
                Save
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFormAddNewCar;
