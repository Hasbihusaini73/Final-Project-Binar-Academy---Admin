import React, { useState } from "react";
import { Table } from "react-bootstrap";
import "./OrderTable.css";
import sortIcon from "../assets/img/fi_sort.png";

const OrderTable = (orderData) => {
  const orderDatas = orderData.orderData;
  console.log(orderDatas);

  return (
    <div id="componentOrderTable">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <Table bordered responsive className="orderTable">
              <thead>
                <tr>
                  <th>No</th>
                  <th className="headIcon">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>User Email</div>
                      <div>
                        <img src={sortIcon} className="img-fluid sortIcon" alt="icon sort" />
                      </div>
                    </div>
                  </th>
                  <th className="headIcon">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>Car</div>
                      <div>
                        <img src={sortIcon} className="img-fluid sortIcon" alt="icon sort" />
                      </div>
                    </div>
                  </th>
                  <th className="headIcon">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>Start Rent</div>
                      <div>
                        <img src={sortIcon} className="img-fluid sortIcon" alt="icon sort" />
                      </div>
                    </div>
                  </th>
                  <th className="headIcon">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>Finish Rent</div>
                      <div>
                        <img src={sortIcon} className="img-fluid sortIcon" alt="icon sort" />
                      </div>
                    </div>
                  </th>
                  <th className="headIcon">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>Price</div>
                      <div>
                        <img src={sortIcon} className="img-fluid sortIcon" alt="icon sort" />
                      </div>
                    </div>
                  </th>
                  <th className="headIcon">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>Category</div>
                      <div>
                        <img src={sortIcon} className="img-fluid sortIcon" alt="icon sort" />
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {orderDatas?.map((order, index) => (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{order.User.email}</td>
                    <td>{order.Car.name}</td>
                    <td>{order.start_rent_at.substring(0, 10)}</td>
                    <td>{order.finish_rent_at.substring(0, 10)}</td>
                    <td>{order.total_price}</td>
                    <td>{order.Car.category}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;
