import "./App.css";
import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/header.jsx";

function App() {
  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header></Header>
      {console.log(tg)}
      New Version
      <button onClick={onToggleButton}>Show menu</button>
    </div>
  );
}

export default App;
