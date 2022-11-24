import React from "react";
import MainActors from "../../MainContainer/MainActors/MainActors";
import HeaderSecond from "../HeaderSecond/HeaderSecond";
import classes from "./HeaderActors.module.css";
import HeaderHOC from "../../../HOC/HeaderHOC/HeaderHOC";
const HeaderActors = () => {
  return <MainActors max={15} />;
};

export default HeaderHOC(HeaderActors);
