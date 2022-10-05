import React from "react";
import cl from "../styles/button.module.css";

export default function button(props) {
  return (
    <div {...props} className={cl.button + " " + props.className}>
      button
    </div>
  );
}
