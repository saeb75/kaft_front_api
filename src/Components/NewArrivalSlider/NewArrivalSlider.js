import React from "react";
import { Container, NavLink } from "react-bootstrap";
import ReactSlick from "../RactSlick/ReactSlick";
import "./style.css";
const NewArrivalSlider = () => {
  return (
    <Container>
      <div className="SilderTitle">
        <h5 className="m-0 p-0">جدیدترین ها</h5>
        <NavLink className="m-0 p-0 ">همه‌</NavLink>
      </div>
      <ReactSlick />
    </Container>
  );
};

export default NewArrivalSlider;
