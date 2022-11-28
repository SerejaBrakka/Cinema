import React from "react";
import MainTrending from "../../MainContainer/MainTrending/MainTrending";
import HeaderHOC from "../../../HOC/HeaderHOC/HeaderHOC";
const HeaderCartoon = () => {
  return <MainTrending type={5} />;
};

export default HeaderHOC(HeaderCartoon);
