import cn from "classnames";
import { useEffect, useState } from "react";
import Loader from "../../../../components/Loader/Loader";
import classes from "./GetFilms.module.css";
const GetFilms = ({ direction, year, img1, img }) => {
  let [filmsTop, setFilmsTop] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.kinopoisk.dev/movie?field=rating.kp&search=7-10&field=year&search=${year}&field=typeNumber&search=2&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&limit=100&token=9NZGZJ6-BVA402G-JTB9TEF-GFP6Q9V`
    )
      .then((res) => res.json())
      .then((json) => setFilmsTop(json.docs))
      .catch((err) => console.log(err));
  }, [year]);

  return (
    <>
      <div
        className={classes.photo_container1}
        style={{ flexDirection: `${direction}` }}
      >
        {filmsTop ? (
          filmsTop.map((e, i) => {
            console.log(e);
            return (
              <img
                key={i}
                src={e.poster ? e.poster.previewUrl : null}
                alt={e.name}
                className={cn(classes[img], classes[img1])}
              />
            );
          })
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default GetFilms;
