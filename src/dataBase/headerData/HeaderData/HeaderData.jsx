import subscribe from "./img/subscribe.svg";
import login from "./img/login.svg";
import home from "./img/home.svg";
import trend from "./img/trend.svg";
import multfilm from "./img/multfilm.svg";
import film from "./img/film.svg";
import show from "./img/show.svg";
import serial from "./img/serial.svg";

export const data = [
  {
    Профиль: [
      {
        name: "Подписка",
        src: subscribe,
      },
      {
        name: "Войти в профиль",
        src: login,
      },
    ],
  },
  {
    Меню: [
      {
        name: "Главная",
        src: home,
      },
      {
        name: "Тренды",
        src: trend,
      },
    ],
  },
  {
    Категории: [
      {
        name: "Сериалы",
        src: serial,
      },
      {
        name: "Фильмы",
        src: film,
      },
      {
        name: "Шоу",
        src: show,
      },
      {
        name: "Мультфильмы",
        src: multfilm,
      },
    ],
  },
];
