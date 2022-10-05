import React from "react";
import cl from "./styles/header.module.css";
import Button from "./UI/buttons/button.jsx";

export default function header() {
  const tg = window.Telegram.WebApp;

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
