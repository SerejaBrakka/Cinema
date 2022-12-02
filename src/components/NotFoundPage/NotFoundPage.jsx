import React from "react";
import { Link } from "react-router-dom";
import classes from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={classes.wrapper}>
      <h1>
        Sorry, page not found, go to <Link to="/">HomePage</Link>
      </h1>
    </div>
  );
};

export default NotFoundPage;
