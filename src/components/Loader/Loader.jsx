import React from "react";
import loader from "./loader.svg";
import classes from "./Loader.module.css";
const Loader = () => {
  return (
    <div>
      <img src={loader} alt="loader" className={classes.loader} />
    </div>
  );
};

export default Loader;
