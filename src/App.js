import "./App.css";
import React, { useEffect, useState } from "react";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/header.jsx";

function App() {
  const { tg, onToggleButton, whatIsInUser } = useTelegram();

  const [whatIsInUserArray, setWhatIsInUserArray] = useState([]);

  useEffect(() => {
    tg.ready();
    setWhatIsInUserArray([...Object.values(whatIsInUser), "eat\n", "eat\n"]);
  }, []);

  return (
    <div className="App">
      <Header />
      {whatIsInUserArray}
      New Version
      <button onClick={onToggleButton}>Show menu</button>
    </div>
  );
}

export default App;
