import React, { useState, useEffect } from "react";
import { Form, Button, Pagination } from "react-bootstrap";
import axios from "axios";
import OrderTable from "../components/OrderTable";
import "./SectionOrderTable.css";

const SectionOrderTable = () => {
  /*deklarasi variable*/
  const [orderData, setOrderData] = useState();
  const [pageCount, setPageCount] = useState();
  const [fetchDone, setFetchDone] = useState(false);

  const initialValues = {
    page: 1,
    pageSize: 10,
  };

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    // console.log(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFetchDone(false);
    const urlAPI = "https://bootcamp-rent-cars.herokuapp.com";
    const config = {
      headers: {
        access_token: JSON.parse(localStorage.getItem("accessToken")),
      },
    };

    axios
      .get(`${urlAPI}/admin/v2/order?sort=created_at%3Adesc&page=${values.page}&pageSize=${values.pageSize}`, config)
      .then((res) => {
        const tempOrders = res.data;
        setOrderData(tempOrders.orders);
        setFetchDone(true);
        console.log(tempOrders);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /*loop untuk item pagination*/
  let active = 1;
  let items = [];
  for (let number = 1; number <= 3; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  /*loop untuk select limit*/
  let limitOptions = [];
  for (let numLimit = 1; numLimit <= 11; numLimit++) {
    limitOptions.push(
      <option key={numLimit} value={numLimit + 9}>
        {numLimit + 9}
      </option>
    );
  }

  /*loop untuk select jump page*/
  let jumpOptions = [];
  for (let numJump = 1; numJump <= pageCount; numJump++) {
    jumpOptions.push(
      <option key={numJump} value={numJump}>
        {numJump}
      </option>
    );
  }

  useEffect(() => {
    const urlAPI = "https://bootcamp-rent-cars.herokuapp.com";
    const config = {
      headers: {
        access_token: JSON.parse(localStorage.getItem("accessToken")),
      },
    };

    axios
      .get(`${urlAPI}/admin/v2/order?sort=created_at%3Adesc&page=1&pageSize=10`, config)
      .then((res) => {
        const tempOrders = res.data;
        setOrderData(tempOrders.orders);
        setPageCount(tempOrders.pageCount);
        setFetchDone(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section id="sectionOrderTable">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="orderTableTitle">Dashboard</h2>
            <div className="titleArea d-flex align-items-center">
              <h3 className="titleText">List Order</h3>
            </div>
            {fetchDone && <OrderTable orderData={orderData} />}
            <div className="navigationFooter row justify-content-between align-items-end">
              <div className="col-lg-6 d-flex justify-content-start leftSide">
                <Form id="orderFilterForm" className="d-flex justify-content-start" onSubmit={handleSubmit}>
                  <div className="limitSide">
                    <h5 className="formTitle">Limit</h5>
                    <Form.Group>
                      <Form.Select required name="pageSize" id="pageSize" className="limitInput" placeholder="Pilih Limit" onChange={handleInputChange}>
                        {limitOptions}
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className="jumpSide">
                    <h5 className="formTitle">Jump to page</h5>
                    <div className="d-flex">
                      <Form.Group>
                        <Form.Select required name="page" id="page" className="jumpInput" placeholder="Pilih Jump" onChange={handleInputChange}>
                          {jumpOptions}
                        </Form.Select>
                      </Form.Group>
                      <Button className="submitButton" type="submit">
                        Go
                      </Button>
                    </div>
                  </div>
                </Form>
              </div>
              <div className="col-lg-6 d-flex justify-content-end rightSide">
                <Pagination id="orderPagination">
                  <Pagination.First />
                  {items}
                  <Pagination.Ellipsis />
                  <Pagination.Item>{9}</Pagination.Item>
                  <Pagination.Last />
                </Pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOrderTable;
