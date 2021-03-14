import React, { useEffect } from "react";
import { Container, NavLink } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getDiscountList, getProductsBySort } from "../../Action/productAction";
import ReactSlick from "../RactSlick/ReactSlick";
import "./style.css";
const ProductsSlider = ({ sort, order, title }) => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  useEffect(() => {
    if (!order) {
      dispatch(getDiscountList());
    }
    dispatch(getProductsBySort(sort, order));
  }, []);
  if (product.loading) {
    return <h2>saeb</h2>;
  }
  let arrayList = [];
  let list = product.discountList?.map((item) => arrayList.push(item.product));
  let sliderName = null;
  switch (sort) {
    case "createdAt":
      sliderName = product.newProductList;
      break;
    case "sold":
      sliderName = product.soldProductList;
      break;
    case "discount":
      sliderName = arrayList;
      break;
    default:
      break;
  }
  return (
    <Container className="mb-4">
      <div className="SilderTitle">
        <h5 className="m-0 p-0"> {title}</h5>
        <NavLink className="m-0 p-0 ">همه‌</NavLink>
      </div>
      <ReactSlick products={sliderName} />
    </Container>
  );
};

export default ProductsSlider;
