import FilmPage from "../components/FilmPage/FilmPagePrime/FilmPage";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import Online from "../containers/HeaderContainer/HeaderOnline/Online";
import Connect from "../containers/HeaderContainer/HeaderConnect/Connect";
import HeaderActors from "../containers/HeaderContainer/HeaderActors/HeaderActors";
import HeaderFavorite from "../containers/HeaderContainer/HeaderFavorite/HeaderFavorite";
import HeaderTrend from "../containers/HeaderContainer/HeaderTrend/HeaderTrend";
import HomePage from "../containers/HomePage/HomePage";
import SubscribePrime from "../containers/HeaderContainer/HeaderSubscribe/SubscribePrime/SubscribePrime";
import HeaderPremiere from "../containers/HeaderContainer/HeaderPremiere/HeaderPremiere";
import ActorPage from "../components/ActorPage/ActorPagePrime/ActorPage";
import HeaderFilm from "../containers/HeaderContainer/HeaderFilm/HeaderFilm";
import HeaderSerial from "../containers/HeaderContainer/HeaderSerial/HeaderSerial";
import HeaderCartoon from "../containers/HeaderContainer/HeaderCartoon/HeaderCartoon";
import HeaderAnime from "../containers/HeaderContainer/HeaderAnime/HeaderAnime";
import AllFindedFilms from "../containers/RightSidebarContainer/AllFindedFilms/AllFindedFilms";
export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/online",
    element: <Online />,
  },
  {
    path: "/connect",
    element: <Connect />,
  },
  {
    path: "/subscribe",
    element: <SubscribePrime />,
  },
  {
    path: "/film/:id",
    element: <FilmPage />,
  },
  {
    path: "/actor/:id",
    element: <ActorPage />,
  },
  {
    path: "/actors",
    element: <HeaderActors />,
  },

  {
    path: "/trends",
    element: <HeaderTrend />,
  },
  {
    path: "/favoritesMovie",
    element: <HeaderFavorite />,
  },
  {
    path: "/premiere",
    element: <HeaderPremiere />,
  },
  {
    path: "/film",
    element: <HeaderFilm />,
  },
  {
    path: "/serial",
    element: <HeaderSerial />,
  },
  {
    path: "/cartoon",
    element: <HeaderCartoon />,
  },
  {
    path: "/anime",
    element: <HeaderAnime />,
  },
  {
    path: "/allFindedFilms",
    element: <AllFindedFilms />,
  },
];
