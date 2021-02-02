import { Redirect, useHistory } from "react-router-dom";
import { ApiFunc } from "../helper/axios";
import {
  GET_PRODUCTS_BY_CATEGORIES_FAILURE,
  GET_PRODUCTS_BY_CATEGORIES_REQUEST,
  GET_PRODUCTS_BY_CATEGORIES_SUCCESS,
  GET_PRODUCTS_COLOR_REQUEST,
  GET_PRODUCTS_COLOR_SUCCESS,
  GET_PRODUCTS_COLOR_FAILURE,
  GET_SINGLE_PRODUCT_REQUEST,
  GET_SINGLE_PRODUCT_FAILURE,
  GET_SINGLE_PRODUCT_SUCCESS,
} from "./actionType";

export const getProductsByCategories = ({ slug, color, size }) => (
  dispatch
) => {
  dispatch({ type: GET_PRODUCTS_BY_CATEGORIES_REQUEST });
  ApiFunc()
    .post("product/by/categories", { slug, color, size })
    .then((res) =>
      dispatch({
        type: GET_PRODUCTS_BY_CATEGORIES_SUCCESS,
        payload: res.data.products,
      })
    )
    .catch((err) => {
      if (err.response.status == "404") {
        dispatch({ type: GET_PRODUCTS_BY_CATEGORIES_FAILURE });
        window.location.href = "/404";
      }
    });
};

export const getProductsColor = (slug) => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_COLOR_REQUEST });
  ApiFunc()
    .post("product/details", { slug })
    .then((res) =>
      dispatch({
        type: GET_PRODUCTS_COLOR_SUCCESS,
        payload: res.data.products,
      })
    )
    .catch((err) => {
      if (err.response) {
        if (err.response.status == "404") {
          dispatch({ type: GET_PRODUCTS_COLOR_FAILURE });
          window.location.href = "/404";
        }
      }
    });
};

export const getProduct = (slug) => (dispatch) => {
  dispatch({ type: GET_SINGLE_PRODUCT_REQUEST });
  ApiFunc()
    .post("product/single", { slug })
    .then((res) =>
      dispatch({
        type: GET_SINGLE_PRODUCT_SUCCESS,
        payload: res.data.product,
      })
    )
    .catch((err) => dispatch({ type: GET_SINGLE_PRODUCT_FAILURE }));
};
