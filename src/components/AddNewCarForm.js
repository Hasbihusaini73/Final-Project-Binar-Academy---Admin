import React, { useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddNewCarForm.css";
import iconUpload from "../assets/img/fi_upload.png";

const AddNewCarForm = () => {
  const navigate = useNavigate();

  const handleUploadClick = () => {
    document.getElementById("imageInput").click();
  };

  const initialValues = {
    nameInput: "",
    priceInput: 0,
    imageInput: null,
    categoryInput: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const urlAPI = "https://bootcamp-rent-cars.herokuapp.com";
    const config = {
      headers: {
        access_token: JSON.parse(localStorage.getItem("accessToken")),
      },
    };
    const data = new FormData();
    data.append("name", values.nameInput);
    data.append("category", values.categoryInput);
    data.append("price", values.priceInput);
    data.append("status", false);
    data.append("image", values.imageInput);

    await axios
      .post(`${urlAPI}/admin/car`, data, config)
      .then(async (res) => {
        const tempRes = res;
        console.log(tempRes);
      })
      .catch((err) => {
        console.log(err);
      });

    navigate("/listcar", { state: { statusAdd: true } });
  };

  return (
    <div className="addNewCarFormContainer">
      <Form id="addNewCarForm" onSubmit={handleSubmit}>
        <div className="row inputContainer justify-content-start align-items-center">
          <div className="col-lg-2 labelArea">
            <Form.Label>
              Nama/Tipe Mobil<sup>*</sup>
            </Form.Label>
          </div>
          <div className="col-lg-3 inputArea">
            <Form.Control required type="input" name="nameInput" id="nameInput" className="nameInput" placeholder="Input Nama/Tipe Mobil" onChange={handleInputChange}></Form.Control>
          </div>
        </div>
        <div className="row inputContainer justify-content-start align-items-center">
          <div className="col-lg-2 labelArea">
            <Form.Label>
              Harga<sup>*</sup>
            </Form.Label>
          </div>
          <div className="col-lg-3 inputArea">
            <Form.Control required type="number" min="0" name="priceInput" id="priceInput" className="priceInput" placeholder="Input Harga Sewa Mobil" onChange={handleInputChange}></Form.Control>
          </div>
        </div>
        <div className="row inputContainer justify-content-start align-items-center">
          <div className="col-lg-2 labelArea">
            <Form.Label>
              Foto<sup>*</sup>
            </Form.Label>
          </div>
          <div className="col-lg-3 inputArea">
            <Form.Control required type="file" name="imageInput" id="imageInput" className="imageInput" placeholder="Upload Foto Mobil" onChange={handleImageChange}></Form.Control>
            <button type="button" className="fileInputFake d-flex justify-content-between align-items-center" onClick={handleUploadClick}>
              <p>{values.imageInput ? values.imageInput.name : "Upload Foto Mobil"}</p>
              <img src={iconUpload} className="uploadIcon img-fluid" alt="Icon Upload" />
            </button>
          </div>
        </div>
        <div className="row inputContainer justify-content-start align-items-center">
          <div className="col-lg-2 labelArea">
            <Form.Label>
              Kategori<sup>*</sup>
            </Form.Label>
          </div>
          <div className="col-lg-3 inputArea">
            <Form.Select required name="categoryInput" id="categoryInput" className="categoryInput" placeholder="Pilih Kategori Mobil" onChange={handleInputChange}>
              <option value="small">Pilih Kategori Mobil</option>
              <option value="small">Small</option>
              <option value="Medium">Medium</option>
              <option value="large">Large</option>
            </Form.Select>
          </div>
        </div>
        <div className="row inputContainer justify-content-start align-items-center">
          <div className="col-lg-2 labelArea">
            <Form.Label>Created at</Form.Label>
          </div>
          <div className="col-lg-3 inputArea">-</div>
        </div>
        <div className="row inputContainer justify-content-start align-items-center">
          <div className="col-lg-2 labelArea">
            <Form.Label>Updated at</Form.Label>
          </div>
          <div className="col-lg-3 inputArea">-</div>
        </div>
        <Form.Control type="submit" name="formSubmit" id="formSubmit" className="formSubmit"></Form.Control>
      </Form>
    </div>
  );
};

export default AddNewCarForm;
