import { ReactComponent as Actor } from "./img/actor.svg";
import { ReactComponent as Film } from "./img/film.svg";
import { ReactComponent as Home } from "./img/home.svg";
import { ReactComponent as Login } from "./img/login.svg";
import { ReactComponent as Multfilm } from "./img/multfilm.svg";
import { ReactComponent as Primer } from "./img/primer.svg";
import { ReactComponent as Serial } from "./img/serial.svg";
import { ReactComponent as Show } from "./img/show.svg";
import { ReactComponent as Star } from "./img/star.svg";
import { ReactComponent as Subscribe } from "./img/subscribe.svg";
import { ReactComponent as Trend } from "./img/trend.svg";
import { ReactComponent as Online } from "./img/online.svg";

export const data = [
  {
    Профиль: [
      {
        name: "Подписка",
        src: <Subscribe />,
        to: "/subscribe",
      },
      {
        name: "Войти в профиль",
        src: <Login />,
        to: "/connect",
      },
    ],
  },
  {
    Меню: [
      {
        name: "Главная",
        src: <Home />,
        to: "/",
      },
      {
        name: "Тренды",
        src: <Trend />,
      },
      {
        name: "Премьеры",
        src: <Primer />,
      },
      {
        name: "Избранные",
        src: <Star />,
      },
    ],
  },
  {
    Категории: [
      {
        name: "Прямая трансляция",
        src: <Online />,
        to: "/online",
      },
      {
        name: "Сериалы",
        src: <Serial />,
      },
      {
        name: "Фильмы",
        src: <Film />,
      },
      {
        name: "Шоу",
        src: <Show />,
      },
      {
        name: "Мультфильмы",
        src: <Multfilm />,
      },
      {
        name: "Актеры",
        src: <Actor />,
      },
    ],
  },
];
