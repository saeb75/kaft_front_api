import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";
import { IoMdReturnRight } from "react-icons/io";
import { MdLocalShipping } from "react-icons/md";

export const SellFeature = () => {
  return (
    <Container fluid className="sell_feature_container py-3">
      <Container>
        <Row className="justify-content-between saeb">
          <Col md="5" className="d-flex ">
            <MdLocalShipping className="fearture_icons  text-muted " />
            <div className="mt-3">
              <h5 className="text-right  text-muted">ارسال سریع وآسان</h5>
              <p className="text-right  text-muted">
                ارسال اجناس به چهار سوی ایران به شکل رایگان و سریع صورت می گیرد
              </p>
            </div>
          </Col>
          <Col md="5" className="d-flex align-items-start text-muted">
            <IoMdReturnRight className="fearture_icons " />
            <div className="mt-3">
              <h5 className="text-right">مرجوع رایگان جنس خریداری شده</h5>
              <p className="text-right text-muted">
                امکان مرجوع اجناس کافت بعد از گذشت 7 روز از خرید بصورت رایگان
                امکان پذیر است
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
