import React from "react";
import MainTrending from "../../MainContainer/MainTrending/MainTrending";
import HeaderHOC from "../../../HOC/HeaderHOC/HeaderHOC";
const HeaderSerial = () => {
  return <MainTrending type={2} />;
};

export default HeaderHOC(HeaderSerial);
