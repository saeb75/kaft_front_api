import React, { useState } from "react";
import { Table, Container, NavItem, Nav } from "react-bootstrap";
import Header from "../../Components/Header/Header";
import { AiOutlineClose } from "react-icons/ai";
import imgCart from "../../assents/tshirt2.png";
import "./style.css";
import { Input } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Action/cartAction";

const CartList = ({ item }) => {
  const dispatch = useDispatch();
  let { name, price, qty, img, size, _id } = item;

  const [quantityState, setQuantityState] = useState(qty);
  console.log(_id);
  console.log(item);
  const increase = () => {
    setQuantityState(quantityState + 1);
    dispatch(addToCart({ _id, name, price, img }, size, 1));
  };
  const decrease = () => {
    setQuantityState(quantityState - 1);
    dispatch(addToCart({ _id, name, price, img }, size, -1));
  };
  return (
    <div>
      <Container className="mt-3">
        <Nav className="w-100 tableNav">
          <NavItem className="table__delete">
            <AiOutlineClose />
          </NavItem>
          <NavItem className="table__product">
            <img src={img.image} width="70" />
          </NavItem>
          <NavItem className="table__description ">
            <h6 className="ml-2">{name}</h6>
            <h6>{size}</h6>
          </NavItem>
          <NavItem className="table__quantity">
            <span className="increase" onClick={increase}>
              +
            </span>
            <span className="quantity">{quantityState}</span>
            <span className="decrease" onClick={decrease}>
              -
            </span>
          </NavItem>
          <NavItem className="table__price">{price} تومان</NavItem>
          <NavItem className="table__totalPrice">{price * qty} تومان</NavItem>
        </Nav>
      </Container>
    </div>
  );
};

export default CartList;
