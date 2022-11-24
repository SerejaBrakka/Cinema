import HeaderHOC from "../../../HOC/HeaderHOC/HeaderHOC";
import FavoriteMovies from "../../RightSidebarContainer/FavoriteMovies/FavoriteMovies";
const HeaderFavorite = () => {
  return <FavoriteMovies />;
};

export default HeaderHOC(HeaderFavorite);
