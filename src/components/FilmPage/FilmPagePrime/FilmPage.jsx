import { useMemo, useState } from "react";
import { useParams } from "react-router";
import LinkBack from "../../LinkBack/LinkBack";
import FilmPageFilmInfo from "../FilmPageFilmInfo/FilmPageFilmInfo";
import FilmPageImgInfo from "../FilmPageImgInfo/FilmPageImgInfo";
import FilmPageRatingInfo from "../FilmPageRatingInfo/FilmPageRatingInfo";
import classes from "./FilmPage.module.css";

import SimilarFilm from "../SimilarFilm/SimilarFilm";
const FilmPage = () => {
  const [film, setFilm] = useState(null);

  const param = useParams().id;

  let result = useMemo(() => {
    fetch(
      `https://api.kinopoisk.dev/movie?field=id&search=${param}&token=ZQQ8GMN-TN54SGK-NB3MKEC-ZKB8V06`
    )
      .then((res) => res.json())
      .then((json) => setFilm(json));
  }, [param]);

  return (
    <>
      {film && (
        <div
          className={classes.wrapper}
          style={{ backgroundImage: `url(${film.poster.url})` }}
        >
          <LinkBack />
          <>
            <div className={classes.container}>
              <FilmPageImgInfo film={film} />
              <FilmPageFilmInfo film={film} />
              <FilmPageRatingInfo film={film} />
            </div>
            <SimilarFilm film={film.similarMovies} />
          </>
        </div>
      )}
    </>
  );
};

export default FilmPage;
