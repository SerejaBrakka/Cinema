import Loader from "../../../components/Loader/Loader";
import HeaderHOC from "../../../HOC/HeaderHOC/HeaderHOC";
import MainActors from "../../MainContainer/MainActors/MainActors";
const HeaderActors = () => {
  return <MainActors max={15} />;
};

export default HeaderHOC(HeaderActors);
