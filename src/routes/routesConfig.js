import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import Online from "../components/Online/Online";
import HomePage from "../containers/HomePage/HomePage";
import Connect from "../containers/Connect/Connect";
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
];
