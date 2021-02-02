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

function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!auth.authenticated) {
      dispatch(userLoginControl());
    }
  }, [auth.authenticated]);
  return (
    <>
      <Switch style={{ padding: 0 }}>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/product/:slug" component={Product} />
        <Route exact path="/category/:slug" component={ProductList} />
        <Route exact path="/active/account/:token" component={ActiveAccount} />
        <Route path="/404" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
