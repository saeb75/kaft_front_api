import React from "react";
import { Container } from "react-bootstrap";
import { data } from "../../Data/CategoryData";
import ProductCard from "../ProductCard/ProductCard";
import "./style.css";
const RelatedMenu = () => {
  let list = data.slice(0, 3);

  return (
    <Container>
      <div className="myBorder mt-5">
        <h5>محصولات مرتبط</h5>
      </div>
      <div className="mt-5">{/*     <ProductCard myData={list} /> */}</div>
    </Container>
  );
};

export default RelatedMenu;
