import { store } from "../store/store";
import { ApiFunc } from "../helper/axios";
import {
  ADD_TO_CART_FAILURE,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  GET_CART_ITEMS_FAILURE,
  GET_CART_ITEMS_SUCCESS,
  GET_CART_ITEMS_REQUEST,
} from "./actionType";
export const addToCart = (product, size, newQty = 1) => (dispatch) => {
  dispatch({ type: ADD_TO_CART_REQUEST });
  let {
    cart: { cartItems },
    auth,
  } = store.getState();
  let cartItemsID = product._id + "&" + size;
  console.log(product, size, newQty);
  let qty = cartItems[cartItemsID]
    ? parseInt(cartItems[cartItemsID].qty + newQty)
    : 1;
  cartItems[cartItemsID] = {
    ...product,
    qty,
    size,
  };
  if (auth.authenticated) {
    let payload = {
      cartItems: [{ product: product._id, quantity: qty, size }],
    };
    ApiFunc()
      .post("cart/add", payload)
      .then()
      .catch((err) => dispatch({ type: ADD_TO_CART_FAILURE }));
  } else {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }
  dispatch({ type: ADD_TO_CART_SUCCESS, payload: cartItems });
};

export const getCartItems = (req, res) => (dispatch) => {
  dispatch({ type: GET_CART_ITEMS_REQUEST });
  ApiFunc()
    .get("cart/get")
    .then((res) =>
      dispatch({ type: GET_CART_ITEMS_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: GET_CART_ITEMS_FAILURE }));
};

export const updatedCart = (req, res) => (dispatch) => {
  const { auth } = store.getState();
  let cartItems = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : null;
  if (auth.authenticated) {
    if (cartItems) {
      let payload = {
        cartItems: Object.keys(cartItems).map((key, index) => {
          return {
            product: cartItems[key]._id,
            quantity: cartItems[key].qty,
            size: cartItems[key].size,
          };
        }),
      };

      if (Object.keys(cartItems).length > 0) {
        ApiFunc()
          .post("cart/add", payload)
          .then(dispatch(getCartItems()))
          .catch((err) => dispatch({ type: ADD_TO_CART_FAILURE }));
      } else {
        getCartItems();
      }
    }
  } else {
    if (cartItems) {
      dispatch({ type: ADD_TO_CART_SUCCESS, payload: cartItems });
    }
  }
};
