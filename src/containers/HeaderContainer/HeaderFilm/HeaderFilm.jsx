import React from "react";
import HeaderHOC from "../../../HOC/HeaderHOC/HeaderHOC";
import MainTrending from "../../MainContainer/MainTrending/MainTrending";
const HeaderFilm = () => {
  return <MainTrending type={1} />;
};

export default HeaderHOC(HeaderFilm);
