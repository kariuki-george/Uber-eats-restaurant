import "./App.scss";
import Sidebar from "./components/Sidebar";
import Mainbar from "./Mainbar";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

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

  return (
    <div>
      <Toaster />
      <Sidebar />
      <Mainbar />
    </div>
  );
}

export default App;
