import MainActors from "../MainActors/MainActors";
import MainPrimeSlider from "../MainPrimeSlider/MainPrimeSlider";
import MainTrending from "../MainTrending/MainTrending";

import classes from "./Main.module.css";
const Main = () => {
  return (
    <div className={classes.main__container}>
      <MainPrimeSlider />
      <MainTrending />
      <MainActors />
    </div>
  );
};

export default Main;
