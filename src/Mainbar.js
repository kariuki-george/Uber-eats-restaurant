import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./login/Login";
import Register from "./login/Register";
import Home from "./Home";
import "./Mainbar.scss";

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
          <Route exact path="/">
            {isLogged ? <Home /> : <Login />}
          </Route>
          <Route exact path="/orders">
            orders
          </Route>
          <Route exact path="/menu">
            menu
          </Route>
          <Route exact path="/statistics">
            statistics
          </Route>
          <Route exact path="/settings">
            settings
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route path="*">error:Page not found</Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default Mainbar;
