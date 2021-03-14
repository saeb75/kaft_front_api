import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import SimpleModal from "../Modals/Modal";
import { NavLink } from "react-router-dom";
import "./style.css";
import { BsEyeFill } from "react-icons/bs";
import { data } from "../../Data/CategoryData";

const ProductCard = ({ item }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  let {
    name,
    description,
    productImg,
    category,
    color,
    price,
    slug,
    discount,
  } = item;
  return (
    <>
      <Card className="categoryCard">
        <div className="cardImage">
          <img src={productImg[0].img.image} alt="" />
        </div>
        <div className="CardInfo">
          <div className="namePrice">
            <p className="text-center">{name}</p>
            {discount ? (
              <div className="d-flex justify-content-around ">
                <p className="text-center">
                  <del>{price}</del>
                </p>
                <p>{(price * discount) / 100}</p>
              </div>
            ) : (
              <p className="text-center">{price}</p>
            )}
          </div>
          <div className="quickSee">
            <span style={{ cursor: "pointer", padding: "10px" }}>Size</span>
            <span
              onClick={handleOpen}
              style={{ cursor: "pointer", padding: "10px" }}
            >
              <BsEyeFill />
            </span>
          </div>
        </div>
        <NavLink to={`/product/${slug}`} className="cardLink"></NavLink>
      </Card>

      <SimpleModal open={open} setOpen={setOpen} />
    </>
  );
};

export default ProductCard;
