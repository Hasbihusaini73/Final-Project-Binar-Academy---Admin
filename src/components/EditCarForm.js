import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "./EditCarForm.css";
import iconUpload from "../assets/img/fi_upload.png";

const EditCarForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [imageErrorNotif, setImageErrorNotif] = useState("");
  const [imageStatus, setImageStatus] = useState(false);
  const [carCreate, setCarCreate] = useState(null);

  const handleUploadClick = () => {
    document.getElementById("imageInput").click();
  };

  //form
  const initialValues = {
    nameInput: "",
    priceInput: 0,
    imageInput: null,
    categoryInput: "",
  };

  const [values, setValues] = useState(initialValues);

  //populate value on first render
  useEffect(() => {
    const urlAPI = "https://bootcamp-rent-cars.herokuapp.com";
    const config = {
      headers: {
        access_token: JSON.parse(localStorage.getItem("accessToken")),
      },
    };
    axios
      .get(`${urlAPI}/admin/car/${location.state.carId}`, config)
      .then((res) => {
        const tempRes = res.data;
        setValues((values) => ({ ...values, nameInput: tempRes.name, priceInput: tempRes.price, categoryInput: tempRes.category }));
        setCarCreate(tempRes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [location.state.carId]);

  //handle change
  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.files[0] });
  };

  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (values.imageInput === null) {
      setImageStatus(true);
      setImageErrorNotif("Please Upload Image");
      return false;
    }
    if (values.imageInput !== null && values.imageInput.size > 2097152) {
      setImageStatus(true);
      setImageErrorNotif("Image File Size is Too Big");
      return false;
    }
    if (values.imageInput !== null) {
      var fname = values.imageInput.name;
      var re = /(\.jpg|\.jpeg|\.png|\.webp)$/i;
      if (!re.exec(fname)) {
        setImageStatus(true);
        setImageErrorNotif("File type is not supported!");
        return false;
      }
    }

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
    data.append("status", carCreate.status);
    data.append("image", values.imageInput);

    await axios
      .put(`${urlAPI}/admin/car/${location.state.carId}`, data, config)
      .then(async () => {
        navigate("/listcar", { state: { statusAdd: true } });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="editCarFormContainer">
      <Form noValidate id="editCarForm" onSubmit={handleSubmit}>
        <div className="row inputContainer justify-content-start align-items-center">
          <div className="col-lg-2 labelArea">
            <Form.Label>
              Nama/Tipe Mobil<sup>*</sup>
            </Form.Label>
          </div>
          <div className="col-lg-3 inputArea">
            <Form.Control required type="input" name="nameInput" id="nameInput" className="nameInput" placeholder="Input Nama/Tipe Mobil" value={values.nameInput || ""} onChange={handleInputChange}></Form.Control>
          </div>
        </div>
        <div className="row inputContainer justify-content-start align-items-center">
          <div className="col-lg-2 labelArea">
            <Form.Label>
              Harga<sup>*</sup>
            </Form.Label>
          </div>
          <div className="col-lg-3 inputArea">
            <Form.Control required type="number" min="0" name="priceInput" id="priceInput" className="priceInput" placeholder="Input Harga Sewa Mobil" value={values.priceInput || 0} onChange={handleInputChange}></Form.Control>
          </div>
        </div>
        <div className="row inputContainer justify-content-start align-items-center">
          <div className="col-lg-2 labelArea">
            <Form.Label>
              Foto<sup>*</sup>
            </Form.Label>
          </div>
          <div className="col-lg-3 inputArea">
            <Form.Group>
              <Form.Control isInvalid={imageStatus} required type="file" name="imageInput" id="imageInput" className="imageInput" placeholder="Upload Foto Mobil" accept=".png, .jpg, .jpeg, .webp" onChange={handleImageChange}></Form.Control>
              <button type="button" className="fileInputFake d-flex justify-content-between align-items-center" onClick={handleUploadClick}>
                <p>{values.imageInput ? values.imageInput.name : `Gambar ${values.nameInput}`}</p>
                <img src={iconUpload} className="uploadIcon img-fluid" alt="Icon Upload" />
              </button>
              <Form.Text id="imageUploadHelp" muted>
                File size max. 2MB
              </Form.Text>
              <Form.Control.Feedback type="invalid">{imageErrorNotif}</Form.Control.Feedback>
            </Form.Group>
          </div>
        </div>
        <div className="row inputContainer justify-content-start align-items-center">
          <div className="col-lg-2 labelArea">
            <Form.Label>
              Kategori<sup>*</sup>
            </Form.Label>
          </div>
          <div className="col-lg-3 inputArea">
            <Form.Select required name="categoryInput" id="categoryInput" className="categoryInput" placeholder="Pilih Kategori Mobil" value={values.categoryInput || "placeholder"} onChange={handleInputChange}>
              <option value="placeholder">Pilih Kategori Mobil</option>
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
          <div className="col-lg-3 inputArea">{carCreate !== null ? carCreate.createdAt.substring(0, 10) : "-"}</div>
        </div>
        <div className="row inputContainer justify-content-start align-items-center">
          <div className="col-lg-2 labelArea">
            <Form.Label>Updated at</Form.Label>
          </div>
          <div className="col-lg-3 inputArea">{carCreate !== null ? carCreate.updatedAt.substring(0, 10) : "-"}</div>
        </div>
        <Form.Control type="submit" name="formSubmit" id="formSubmit" className="formSubmit"></Form.Control>
      </Form>
    </div>
  );
};

export default EditCarForm;
