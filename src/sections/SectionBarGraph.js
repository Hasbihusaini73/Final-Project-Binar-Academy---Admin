import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import "./SectionBarGraph.css";
import BarGraph from "../components/BarGraph";

const SectionBarGraph = () => {
  const initialValues = {
    monthInput: null,
  };

  const [values, setValues] = useState(initialValues);
  const [dataReport, setDataReport] = useState(null);

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    // console.log(values.monthInput); cek isi value onChange
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlAPI = "https://bootcamp-rent-cars.herokuapp.com";
    const config = {
      headers: {
        access_token: JSON.parse(localStorage.getItem("accessToken")),
      },
    };

    axios
      .get(`${urlAPI}/admin/order/reports?from=${values.monthInput}-01&until=${values.monthInput}-31`, config)
      .then(async (res) => {
        const tempReports = res.data;
        setDataReport(tempReports);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section id="sectionBarGraph">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="titleArea d-flex align-items-center">
              <h3 className="titleText">Rented Car Data Visualization</h3>
            </div>
            <h5 className="formTitle">Month</h5>
            <Form id="monthFilterForm" className="d-flex" onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control required name="monthInput" id="monthInput" className="monthInput" type="month" as="input" placeholder="Pilih Bulan" onChange={handleInputChange} />
              </Form.Group>
              <Button className="submitButton" type="submit">
                Go
              </Button>
            </Form>
            {dataReport ? <BarGraph dataReport={dataReport} /> : <h4 className="dataEmptyAlert">Sorry, but the data is empty, Please select month report to be displayed</h4>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionBarGraph;
