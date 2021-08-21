import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./login/Login";
import Register from "./login/Register";
import Home from "./home/Home";
import Statistics from "./statistics/Statistics";
import Menu from "./menu/Menu";
import Orders from "./orders/Orders";
import Settings from "./settings//Settings";
import "./Mainbar.scss";
import Landing from "./landing/Landing";

function Mainbar() {
  const [width, setWidth] = useState(window.innerWidth);
  const [isLogged, setLogged] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
  }, []);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  return (
    <div className="mainbar" style={{ width: `${width - 300}px` }}>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />

          <PrivateRoute exact path="/orders" component={Orders} />
          <PrivateRoute exact path="/menu" component={Menu} />
          <PrivateRoute exact path="/statistics" component={Statistics} />
          <PrivateRoute exact path="/settings" component={Settings} />

          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route>
            <Landing />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/landing", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default Mainbar;
