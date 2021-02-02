import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../Reducers/RootReducer";
import thunk from "redux-thunk";
let middelware = [thunk];
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middelware))
);
