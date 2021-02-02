import React from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import "./style.css";
import { GiPoloShirt } from "react-icons/gi";
import FooterList from "../FooterList/FooterList";

const Footer = () => {
  const list = [1, 23, 4, 56, 4, 8, 9];
  return (
    <Container className="footer_container py-5" fluid>
      <Container className="footer_container_first line2">
        <Row>
          <Col md="3">
            <div>
              <h5 className="text-right mb-1" style={{ color: " #f2f1e9" }}>
                پست الکترونیکی
              </h5>
              <Form.Control
                type="text"
                placeholder="ارسال نظر "
                className="text-right bg-dark fetured_input"
              />
            </div>
          </Col>
          <Col md="9">
            <div className="product_feature">
              <h5 className="text-right" style={{ color: " #f2f1e9" }}>
                ویژگی محصولات
              </h5>
              <ul className="mt-1">
                {list.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href="#">
                        <GiPoloShirt className="product_feature_icon" />
                        تی شرت
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="line2 py-3">
        <FooterList />
      </Container>
    </Container>
  );
};

export default Footer;
