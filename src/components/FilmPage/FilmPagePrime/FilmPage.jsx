import { useEffect, useState } from "react";
import { useParams } from "react-router";
import LinkBack from "../../LinkBack/LinkBack";
import FilmPageFilmInfo from "../FilmPageFilmInfo/FilmPageFilmInfo";
import FilmPageImgInfo from "../FilmPageImgInfo/FilmPageImgInfo";
import FilmPageRatingInfo from "../FilmPageRatingInfo/FilmPageRatingInfo";
import classes from "./FilmPage.module.css";

import SimilarFilm from "../SimilarFilm/SimilarFilm";
import Loader from "../../Loader/Loader";
const FilmPage = () => {
  const [film, setFilm] = useState(null);

  const param = useParams().id;

  useEffect(() => {
    fetch(
      `https://api.kinopoisk.dev/movie?field=id&search=${param}&token=9NZGZJ6-BVA402G-JTB9TEF-GFP6Q9V`
    )
      .then((res) => res.json())
      .then((json) => setFilm(json));
  }, [param]);

  return (
    <>
      {film ? (
        <div
          className={classes.wrapper}
          style={{
            backgroundImage: `url(${film.poster ? film.poster.url : null})`,
          }}
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
      ) : (
        <Loader />
      )}
    </>
  );
};

export default FilmPage;
