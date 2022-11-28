import HeaderHOC from "../../../HOC/HeaderHOC/HeaderHOC";
import MainTrending from "../../MainContainer/MainTrending/MainTrending";
const HeaderPremiere = () => {
  return <MainTrending type={1} year={"2022-2023"} />;
};

export default HeaderHOC(HeaderPremiere);
