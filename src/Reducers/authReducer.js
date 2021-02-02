import {
  ACTIVE_ACCOUNT_FAILURE,
  ACTIVE_ACCOUNT_REQUEST,
  ACTIVE_ACCOUNT_SUCCESS,
  GET_ALL_EMAIL_REQUEST,
  GET_ALL_EMAIL_SUCCESS,
  SIGNIN_FAILED,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "../Action/actionType";

const initialState = {
  token: "",
  loading: false,
  sendActivate: false,
  msg: "",
  success: "",
  emails: [],
  user: {},
  authenticated: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_EMAIL_SUCCESS:
      return {
        ...state,
        emails: action.payload,
        loading: false,
        sendActivate: false,
        msg: "",
      };
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        sendActivate: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        sendActivate: true,
        msg: "لینک فعال سازی حساب کاربری به ایمیل شما ارسال شد",
      };
    case SIGNUP_FAILED:
      return {
        ...state,
        loading: false,
        sendActivate: false,
        msg: "مشکلی در روند ثب نام رخ داد .لطفا ذوباره امتحان کنید",
      };
    case ACTIVE_ACCOUNT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ACTIVE_ACCOUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        msg: "ثبت نام شما با موفقیت انجام شد",
      };
    case ACTIVE_ACCOUNT_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        msg: "ثبت نام شما با شکست مواجه شد.لطفا دوباره امتحان کنید",
      };
    case SIGNIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        msg: "با موفقیت وارد شدید",
        token: action.payload.token,
        user: action.payload.user,
        authenticated: true,
      };
    case SIGNIN_FAILED:
      return {
        ...state,
        loading: false,
        success: false,
        msg: "نام کاربری و یا رمز شما اشتباه است",
        authenticated: false,
      };
    case SIGNOUT_SUCCESS:
      return {
        ...state,
        authenticated: false,
        user: {},
        token: "",
      };
    default:
      return state;
  }
};
