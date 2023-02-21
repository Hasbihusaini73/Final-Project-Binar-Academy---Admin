import React, { useState, useEffect } from "react";
import { Form, Button, Pagination } from "react-bootstrap";
import axios from "axios";
import OrderTable from "../components/OrderTable";
import "./SectionOrderTable.css";

const SectionOrderTable = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [orderData, setOrderData] = useState();
  const [pageCount, setPageCount] = useState();
  const [fetchDone, setFetchDone] = useState(false);

  let active = 1;
  let items = [];
  for (let number = 1; number <= 3; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
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
      .get(`${urlAPI}/admin/v2/order?sort=created_at%3Adesc&page=${page}&pageSize=${pageSize}`, config)
      .then((res) => {
        const tempOrders = res.data;
        setOrderData(tempOrders.orders);
        setFetchDone(true);
        console.log(tempOrders);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, pageSize]);

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
                <Form id="orderFilterForm" className="d-flex justify-content-start">
                  <div className="limitSide">
                    <h5 className="formTitle">Limit</h5>
                    <Form.Group>
                      <Form.Control required name="limitInput" id="limitInput" className="limitInput" type="month" as="input" placeholder="Pilih Limit" />
                    </Form.Group>
                  </div>
                  <div className="jumpSide">
                    <h5 className="formTitle">Jump to page</h5>
                    <div className="d-flex">
                      <Form.Group>
                        <Form.Control required name="jumpInput" id="jumpInput" className="jumpInput" type="month" as="input" placeholder="Pilih Jump" />
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
