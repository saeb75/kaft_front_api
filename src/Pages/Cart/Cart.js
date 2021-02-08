import React, { useState } from "react";
import { Table, Container, NavItem, Nav } from "react-bootstrap";
import Header from "../../Components/Header/Header";
import { AiOutlineClose } from "react-icons/ai";
import imgCart from "../../assents/tshirt2.png";
import "./style.css";
import { Input } from "@material-ui/core";
import CartList from "../../Components/CartList/CartList";
import { useSelector } from "react-redux";

const Cart = () => {
  const [quantityState, setQuantityState] = useState(0);
  let cart = useSelector((state) => state.cart);

  return (
    <>
      <Header />
      <Container fluid className="tableHeaderContainer">
        <Container className="tableHeader">
          <Nav className="w-100 tableNav">
            <NavItem className="table__delete">حذف</NavItem>
            <NavItem className="table__product">محصول</NavItem>
            <NavItem className="table__description ">توضیحات</NavItem>
            <NavItem className="table__quantity">تعداد</NavItem>
            <NavItem className="table__price">قیمت عدد</NavItem>
            <NavItem className="table__totalPrice">قیمت کل</NavItem>
          </Nav>
        </Container>
      </Container>
      {cart.cartItems &&
        Object.keys(cart.cartItems).map((key, index) => {
          return <CartList item={cart.cartItems[key]} />;
        })}
      <div></div>
    </>
  );
};

export default Cart;
