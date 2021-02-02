import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./style.css";
import kaft_logo from "../../assents/kaft_logo.svg";

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SignOut } from "../../Action/authAction";
import { getCategories } from "../../Action/categoryAction";
import MenuHeader from "../MenuHeader/MenuHeader";

const Header = () => {
  const auth = useSelector((state) => state.auth);
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(SignOut());
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  let categories = category.categories.allCategories;

  return (
    <div
      style={{
        borderBottom: "1px solid #dfded9",
        zIndex: 999,
      }}
    >
      <Container className="header_container" fluid>
        <Container className="d-flex  header_container_in">
          <div className="header_buttons_container">
            {!auth.authenticated ? (
              <>
                <button className="mr-2">
                  <NavLink to="/register">ثبت نام</NavLink>
                </button>
                <button>
                  <NavLink to="/login">ورود </NavLink>
                </button>
              </>
            ) : (
              <button onClick={signOut}>خروج</button>
            )}
          </div>
          <a href="#" className="logo">
            <img src={kaft_logo} />
          </a>
        </Container>
      </Container>
      <Container className="menu_container" fluid>
        <Container className="h-100">
          <MenuHeader categories={categories} />
        </Container>
      </Container>
    </div>
  );
};

export default Header;
