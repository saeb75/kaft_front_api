import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { data } from "../../Data/bestCategories_data";
import "./style.css";
export const BestCategories = () => {
  return (
    <div>
      <Container>
        <Row className="bestCategories_row mt-3">
          <Col md="12 d-flex justify-content-center">
            <h3 className="mb-5 text-center line">پرفروش ترین دسته بندی ها</h3>
          </Col>
          {data.map((item, index) => {
            return (
              <Col
                md="4"
                xs="6"
                sm="6"
                key={index}
                className="bestcat_col mb-3"
              >
                <Card>
                  <img src={item.img1} className="bestcat_img1" />
                  <img src={item.img2} className="bestcat_img2" />
                  <h5 className="text-center" style={{ color: "#8e8e8e" }}>
                    {item.name}
                  </h5>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
