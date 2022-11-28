import HeaderHOC from "../../../HOC/HeaderHOC/HeaderHOC";
import MainTrending from "../../MainContainer/MainTrending/MainTrending";
const HeaderTrend = () => {
  return <MainTrending />;
};

export default HeaderHOC(HeaderTrend);
