import Switch from "react-bootstrap/esm/Switch";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import ProductList from "./Pages/ProductsList/ProductList";
import Product from "./Pages/Product/Product";
import SignUp from "./Pages/SignUp/SignUp";
import ActiveAccount from "./Pages/ActiveAccount/ActiveAccount";
import SignIn from "./Pages/SignIn/SignIn";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoginControl } from "./Action/authAction";
import NotFound from "./Components/NotFound/NotFound";
import Cart from "./Pages/Cart/Cart";
import { getCartItems, updatedCart } from "./Action/cartAction";

function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  /* let list = [
    { product: 123, size: "M", quantity: 56 },
    { product: 123, size: "S", quantity: 42 },
  ];
  let list2 = { product: 123, size: "M", quantity: 56 };
  let findArray = list.find(
    (item) => list2.product == item.product && list2.size == item.size
  );
  console.log(findArray); */
  useEffect(() => {
    if (!auth.authenticated) {
      dispatch(userLoginControl());
    }
    if (auth.authenticated) {
      dispatch(getCartItems());
    }
    dispatch(updatedCart());
  }, [auth.authenticated]);

  return (
    <>
      <Switch style={{ padding: 0 }}>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/product/:slug" component={Product} />
        <Route exact path="/category/:slug" component={ProductList} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/active/account/:token" component={ActiveAccount} />
        <Route path="/404" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
