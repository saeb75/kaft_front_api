import { ApiFunc } from "../helper/axios";
import {
  GET_ALL_EMAIL_FAILURE,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
} from "./actionType";

export const getCategories = () => (dispatch) => {
  dispatch({ type: GET_CATEGORIES_REQUEST });
  ApiFunc()
    .get("category/getcategories")
    .then((res) =>
      dispatch({ type: GET_CATEGORIES_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: GET_ALL_EMAIL_FAILURE }));
};
