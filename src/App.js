import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  return <div className="App">Working</div>;
}

export default App;
