import "./App.css";
import React, { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/header.jsx";

function App() {
  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header />
      New Version
      <button onClick={onToggleButton}>Show menu</button>
    </div>
  );
}

export default App;
