import Input from "../../../components/UI/Input/Input";
import FavoriteMovies from "../FavoriteMovies/FavoriteMovies";
import TopMovies from "../TopMovies/TopMovies";
import classes from "./RightSidebar.module.css";

const RightSidebar = () => {
  return (
    <div className={classes.wrapper}>
      <Input />
      <TopMovies />
      <FavoriteMovies />
    </div>
  );
};

export default RightSidebar;
