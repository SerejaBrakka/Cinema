import { useEffect, useState, useMemo } from "react";
import cn from "classnames";
import classes from "./GetFilms.module.css";
const GetFilms = ({ direction, year, img1, img }) => {
  let [filmsTop, setFilmsTop] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.kinopoisk.dev/movie?field=rating.kp&search=7-10&field=year&search=${year}&field=typeNumber&search=2&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&limit=100&token=ZQQ8GMN-TN54SGK-NB3MKEC-ZKB8V06`
    )
      .then((res) => res.json())
      .then((json) => setFilmsTop(json.docs))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div
        className={classes.photo_container1}
        style={{ flexDirection: `${direction}` }}
      >
        {filmsTop &&
          filmsTop.map((e, i) => {
            return (
              <img
                key={i}
                src={e.poster.previewUrl}
                alt={e.name}
                className={cn(classes[img], classes[img1])}
              />
            );
          })}
      </div>
    </>
  );
};

export default GetFilms;
