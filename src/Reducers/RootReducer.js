import { authReducer } from "./authReducer";
import { categoryReducer } from "./categoryReducer";
import { productReducer } from "./productReducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
  auth: authReducer,
});

export default rootReducer;
