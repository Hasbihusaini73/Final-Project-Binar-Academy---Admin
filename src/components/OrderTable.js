import React from "react";
import { Table } from "react-bootstrap";
import "./OrderTable.css";
import sortIcon from "../assets/img/fi_sort.png";

const OrderTable = () => {
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
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;
