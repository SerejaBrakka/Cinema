import React from "react";
import MainTrending from "./../../MainContainer/MainTrending/MainTrending";
import HeaderHOC from "../../../HOC/HeaderHOC/HeaderHOC";
const HeaderAnime = () => {
  return <MainTrending type={4} />;
};

export default HeaderHOC(HeaderAnime);
