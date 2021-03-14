import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import oldSchool from "../../assents/oldschool-bg.jpg";
import journey from "../../assents/journey-home-bg.jpg";
import whatkaft from "../../assents/kaft-nedir-home-bg.jpg";
import properties from "../../assents/product-properties-home-bg.jpg";
import lookbook from "../../assents/lookbook-home-bg.jpg";
import "./style.css";
const BannerSection = () => {
  return (
    <div>
      <Container fluid style={{ backgroundColor: "white" }} className="py-4">
        <Container className="banner_section_container">
          {/*   <Row>
            <Col md="12" className="mb-2 banner_section_col">
              <div className="banner_col_container">
                <img src={oldSchool} />
                <a href="#">
                  <h3>"فروش شگفت انگیز"</h3>
                  <p>
                    این اجناس به مدت محدود با تخیف‌های بالای 20% به فروش میرسد
                  </p>
                  <div className="hover_effect_banner">
                    <p> اطلاعات بیشتر </p>
                  </div>
                </a>
              </div>
            </Col>
            <Col md="12" className="mb-2 banner_section_col">
              <div className="banner_col_container">
                <img src={journey} style={{ width: "100%" }} />
                <a href="#">
                  <h3>"سفر ما در کافت"</h3>
                  <p>تجربه های ما در کافت در مسیر رسیدن به اهداف</p>
                  <div className="hover_effect_banner">
                    <p> اطلاعات بیشتر </p>
                  </div>
                </a>
              </div>
            </Col>
          </Row> */}
          <Row>
            <Col md="4">
              <Card className="banner_section_col2">
                <img src={whatkaft} style={{ width: "100%" }} />
                <a href="#">
                  <h4 className="mb-3">کافت چیست ؟</h4>
                  <div className="hover_effect_banner">
                    <p> اطلاعات بیشتر </p>
                  </div>
                </a>
              </Card>
            </Col>
            <Col md="4">
              <Card className="banner_section_col2">
                <img src={properties} style={{ width: "100%" }} />
                <a href="#">
                  <h4 className="mb-3">ویژگی محصولات کافت </h4>
                  <div className="hover_effect_banner">
                    <p> اطلاعات بیشتر </p>
                  </div>
                </a>
              </Card>
            </Col>
            <Col md="4">
              <Card className="banner_section_col2">
                <img src={lookbook} style={{ width: "100%" }} />
                <a href="#">
                  <h4 className="mb-3">تجربه مشتری‌های ما از کافت</h4>
                  <div className="hover_effect_banner">
                    <p> اطلاعات بیشتر </p>
                  </div>
                </a>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default BannerSection;
