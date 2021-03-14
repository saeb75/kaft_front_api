import {
  GET_DISCOUNT_LIST_FAILURE,
  GET_DISCOUNT_LIST_REQUEST,
  GET_DISCOUNT_LIST_SUCCESS,
  GET_PRODUCTS_BY_CATEGORIES_FAILURE,
  GET_PRODUCTS_BY_CATEGORIES_REQUEST,
  GET_PRODUCTS_BY_CATEGORIES_SUCCESS,
  GET_PRODUCTS_BY_SORT_CREATEDAT_SUCCESS,
  GET_PRODUCTS_BY_SORT_FAILURE,
  GET_PRODUCTS_BY_SORT_REQUEST,
  GET_PRODUCTS_BY_SORT_SOLD_SUCCESS,
  GET_PRODUCTS_BY_SORT_SUCCESS,
  GET_PRODUCTS_COLOR_SUCCESS,
  GET_SINGLE_PRODUCT_FAILURE,
  GET_SINGLE_PRODUCT_REQUEST,
  GET_SINGLE_PRODUCT_SUCCESS,
} from "../Action/actionType";

let initialState = {
  loading: false,
  products: [],
  success: true,
  productsDetals: [],
  singleProduct: "",
  newProductList: [],
  soldProductList: [],
  discountList: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_BY_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCTS_BY_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: true,
        success: true,
        products: action.payload,
      };

    case GET_PRODUCTS_BY_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
      };

    case GET_PRODUCTS_COLOR_SUCCESS:
      return {
        ...state,
        productsDetals: action.payload,
      };
    case GET_SINGLE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        singleProduct: action.payload,
        loading: false,
      };
    case GET_PRODUCTS_BY_SORT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCTS_BY_SORT_CREATEDAT_SUCCESS:
      return {
        ...state,
        loading: false,
        newProductList: action.payload,
        success: true,
      };
    case GET_PRODUCTS_BY_SORT_SOLD_SUCCESS:
      return {
        ...state,
        loading: false,
        soldProductList: action.payload,
        success: true,
      };
    case GET_PRODUCTS_BY_SORT_FAILURE:
      return {
        ...state,
        loading: false,

        success: false,
      };
    case GET_DISCOUNT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_DISCOUNT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        discountList: action.payload,
      };
    case GET_DISCOUNT_LIST_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
