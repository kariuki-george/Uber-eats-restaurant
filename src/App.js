import "./App.scss";
import Sidebar from "./components/Sidebar";

import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "./login/Login";
import Register from "./login/Register";
import Home from "./home/Home";
import Statistics from "./statistics/Statistics";
import Menu from "./menu/Menu";
import Orders from "./orders/Orders";
import Settings from "./settings//Settings";

import Landing from "./landing/Landing";

function App() {
  const { theme } = useSelector((state) => state.theme);

  useEffect(() => {
    document.body.classList.remove("dark");
    document.body.classList.remove("light");
    if (theme === ".light") {
      document.body.classList.add("light");
    } else {
      document.body.classList.add("dark");
    }
  }, [theme]);

  const [width, setWidth] = useState(window.innerWidth);
  const [isLogged, setLogged] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
  }, []);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  return (
    <div className="App" style={{ width: `${width - 200}px` }}>
      <Toaster />

      <Router>
        <Sidebar />
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
          <Route exact path="/landing">
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

export default App;
