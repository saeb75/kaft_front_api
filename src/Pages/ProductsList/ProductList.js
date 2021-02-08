import React, { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { FaGripHorizontal, FaGripVertical } from "react-icons/fa";
import Header from "../../Components/Header/Header";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./style.css";
import { NavLink } from "react-router-dom";
import { Redirect, useHistory, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsByCategories,
  getProductsColor,
} from "../../Action/productAction";
const queryString = require("query-string");
const ProductList = () => {
  const location = useLocation();
  let Url = queryString.parse(location.search);
  const [color, setColor] = useState(Url.color ? Url.color : "");
  const [size, setSize] = useState(Url.size ? Url.size : "");
  const history = useHistory();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product);
  let { slug } = useParams();

  useEffect(async () => {
    await setColor("");
    dispatch(getProductsByCategories({ slug }));
    dispatch(getProductsColor({ slug }));
  }, [!location.search]);

  useEffect(async () => {
    await setColor("");
    dispatch(getProductsByCategories({ slug }));
    dispatch(getProductsColor({ slug }));
  }, [slug]);

  useEffect(async () => {
    await setColor("");
    dispatch(getProductsByCategories({ slug, size, color }));
    dispatch(getProductsColor({ slug }));
  }, []);

  let { products, productsDetals } = product;
  let colorArray = productsDetals.map((item) => item.color);
  let sizeArray = products.map((item) => item.productDetails);
  const key = "prName";
  const colorUnique = [
    ...new Map(colorArray.map((item) => [item[key], item])).values(),
  ];

  let handleColor = async (myColor) => {
    let parsed = {};
    parsed.color = myColor.enName;
    if (size) {
      parsed.size = size;
    }
    const stringified = queryString.stringify(parsed);

    await setColor(myColor.enName);
    history.push(`${location.pathname}?${stringified}`);
    await dispatch(
      getProductsByCategories({ slug, color: myColor.enName, size })
    );
  };

  let handleSize = async (mySize) => {
    let parsed = {};
    parsed.size = mySize;
    if (color) {
      parsed.color = color;
    }
    const stringified = queryString.stringify(parsed);
    await setSize(mySize);
    history.push(`${location.pathname}?${stringified}`);
    await dispatch(getProductsByCategories({ slug, color, size: mySize }));
  };

  return (
    <div>
      <Header />
      <Container className="filter_container" fluid>
        <Container
          style={{ direction: "rtl" }}
          className="d-flex justify-content-between"
        >
          <ul className="first_filter_navbar">
            <li>
              <span>
                رنگ
                <ul className="secound_filter_navbar">
                  {colorUnique.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => handleColor(item)}
                      style={{
                        display: "flex",

                        justifyContent: "space-between",
                      }}
                    >
                      {item.prName}

                      <div
                        style={{
                          backgroundColor: `#${item.code}`,
                          width: 20,
                          height: 20,
                        }}
                      ></div>
                    </li>
                  ))}
                </ul>
              </span>
            </li>
            <li>
              <span href="">
                سایز
                <ul className="secound_filter_navbar">
                  <li onClick={() => handleSize("XS")}> XS </li>
                  <li onClick={() => handleSize("S")}> S </li>
                  <li onClick={() => handleSize("M")}> M </li>
                  <li onClick={() => handleSize("L")}> L </li>
                  <li onClick={() => handleSize("XL")}> XL </li>
                  <li onClick={() => handleSize("XXL")}> XXL</li>
                </ul>
              </span>
            </li>
            <li>
              <span href="">قیمت</span>
            </li>
          </ul>
          <ul className="nav navbar listStyle m-0 p-0">
            <li className="ml-2">
              <FaGripHorizontal />
            </li>
            <li>
              <FaGripVertical />
            </li>
          </ul>
        </Container>
      </Container>
      <Container className="py-4 ProductCardContainer">
        <Row>
          {products.map((item) => (
            <Col md="4">
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default ProductList;
