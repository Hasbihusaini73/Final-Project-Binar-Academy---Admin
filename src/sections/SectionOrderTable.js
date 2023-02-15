import React from "react";
import { Form, Button } from "react-bootstrap";
import OrderTable from "../components/OrderTable";
import "./SectionOrderTable.css";

const SectionOrderTable = () => {
  return (
    <section id="sectionOrderTable">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="orderTableTitle">Dashboard</h2>
            <div className="titleArea d-flex align-items-center">
              <h3 className="titleText">List Order</h3>
            </div>
            <OrderTable />
            <div className="navigationFooter row justify-content-between">
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
              <div className="col-lg-6 d-flex justify-content-end rightSide">kanan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOrderTable;
