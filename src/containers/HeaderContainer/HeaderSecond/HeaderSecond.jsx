import React from "react";
import classes from "./HeaderSecond.module.css";
import { Link } from "react-router-dom";
import Logo from "../../../components/Logo/Logo";
const HeaderSecond = () => {
  return (
    <div className={classes.wrapper}>
      <Logo />
      <Link to="/">На главную</Link>
    </div>
  );
};

export default HeaderSecond;
