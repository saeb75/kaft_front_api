import { ApiFunc } from "../helper/axios";

import {
  ACTIVE_ACCOUNT_FAILURE,
  ACTIVE_ACCOUNT_REQUEST,
  ACTIVE_ACCOUNT_SUCCESS,
  GET_ALL_EMAIL_FAILURE,
  GET_ALL_EMAIL_REQUEST,
  GET_ALL_EMAIL_SUCCESS,
  SIGNIN_FAILED,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNOUT_REQUEST,
  SIGNOUT_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./actionType";
let jwt = require("jsonwebtoken");
export const signUp = (data) => (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });
  ApiFunc()
    .post("user/register", data)
    .then((res) => dispatch({ type: SIGNUP_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: SIGNUP_FAILED }));
};

export const getAllEmail = () => (dispatch) => {
  dispatch({ type: GET_ALL_EMAIL_REQUEST });
  ApiFunc()
    .get("user/email")
    .then((res) => dispatch({ type: GET_ALL_EMAIL_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: GET_ALL_EMAIL_FAILURE }));
};

export const activeAccount = (token) => (dispatch) => {
  dispatch({ type: ACTIVE_ACCOUNT_REQUEST });
  ApiFunc()
    .post("user/activate", { token })
    .then((res) =>
      dispatch({ type: ACTIVE_ACCOUNT_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: ACTIVE_ACCOUNT_FAILURE }));
};

export const signIn = (data) => (dispatch) => {
  dispatch({ type: SIGNIN_REQUEST });
  ApiFunc()
    .post("user/login", data)
    .then((res) => {
      let { token } = res.data;
      let { user } = jwt.decode(token);
      localStorage.setItem("token", token);
      return dispatch({ type: SIGNIN_SUCCESS, payload: { token, user } });
    })
    .catch((err) => dispatch({ type: SIGNIN_FAILED }));
};

export const SignOut = () => (dispatch) => {
  dispatch({ type: SIGNOUT_REQUEST });
  localStorage.clear();
  dispatch({ type: SIGNOUT_SUCCESS });
};
export const userLoginControl = () => (dispatch) => {
  let token = localStorage.getItem("token");
  if (token) {
    let { user } = jwt.decode(token);
    return dispatch({ type: SIGNIN_SUCCESS, payload: { token, user } });
  } else {
    dispatch({ type: SIGNIN_FAILED });
  }
};
