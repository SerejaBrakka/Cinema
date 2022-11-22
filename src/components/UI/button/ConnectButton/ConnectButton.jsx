import React from "react";
import classes from "./ConnectButton.module.css";
const ConnectButton = ({ value, onClick }) => {
  return (
    <button className={classes.button} onClick={onClick}>
      <span>{value}</span>
    </button>
  );
};

export default ConnectButton;
