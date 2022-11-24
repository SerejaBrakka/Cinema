import FilmPage from "../components/FilmPage/FilmPagePrime/FilmPage";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import Online from "../components/Online/Online";
import Connect from "../containers/Connect/Connect";
import HeaderActors from "../containers/HeaderContainer/HeaderActors/HeaderActors";
import HeaderFavorite from "../containers/HeaderContainer/HeaderFavorite/HeaderFavorite";
import HeaderTrend from "../containers/HeaderContainer/HeaderTrend/HeaderTrend";
import HomePage from "../containers/HomePage/HomePage";
import SubscribePrime from "./../containers/Subscribe/SubscribePrime/SubscribePrime";
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
  // {
  //   path: "/primer",
  //   element: <HeaderPrimer />,
  // },
];
