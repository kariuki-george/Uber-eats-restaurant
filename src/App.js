import "./App.scss";
import Sidebar from "./components/Sidebar";
import Mainbar from "./Mainbar";
import { useState, useEffect } from "react";

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.remove("dark");
    document.body.classList.remove("light");
    dark
      ? document.body.classList.add("dark")
      : document.body.classList.add("light");
  }, [dark]);

  return (
    <div>
      <Sidebar />
      <Mainbar />
    </div>
  );
}

export default App;
