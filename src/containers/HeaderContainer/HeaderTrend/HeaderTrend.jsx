import React from "react";
import MainTrending from "../../MainContainer/MainTrending/MainTrending";
import HeaderSecond from "../HeaderSecond/HeaderSecond";
import classes from "./HeaderTrend.module.css";
import HeaderHOC from "../../../HOC/HeaderHOC/HeaderHOC";
const HeaderTrend = () => {
  return <MainTrending />;
};

export default HeaderHOC(HeaderTrend);
