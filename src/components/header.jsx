import React from "react";
import cl from "./styles/header.module.css";
import Button from "./UI/buttons/button.jsx";
const tg = window.Telegram.WebApp;

export default function header() {
  const onClose = () => {
    tg.close();
  };
  return (
    <div className={cl.header}>
      <Button onClick={onClose}>Close</Button>
      <span className={cl.username}>{tg.initDataUnsafe?.user?.username}</span>
    </div>
  );
}
