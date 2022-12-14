import classes from "./FilmPageImgInfo.module.css";
import { useMemo } from "react";
import AddToFavorites from "../AddToFavorites/AddToFavorites";
import FilmPageGetImage from "../FilmPageGetImage/FilmPageGetImage";
const FilmPageImgInfo = ({ film }) => {
  let result = useMemo(() => {
    let ssilka =
      film.videos.trailers.length === 0
        ? "false"
        : film.videos.trailers.filter((e) => e.url.includes("embed")).length !==
          0
        ? film.videos.trailers.filter((e) => e.url.includes("embed"))[0].url
        : film.videos.trailers.filter((e) => e.url.includes("watch")).length !==
          0
        ? film.videos.trailers.filter((e) => e.url.includes("watch"))[0].url
        : film.videos.trailers
        ? film.videos.trailers[0].url
        : "false";

    return (ssilka = ssilka.includes("watch")
      ? ssilka.replace("watch?v=", "embed/")
      : ssilka.includes("youtu.be")
      ? ssilka.replace("youtu.be/", "youtube.com/embed/")
      : ssilka === " false"
      ? "false"
      : ssilka);
  });

  return (
    <>
      <div className={classes.img__container}>
        {film.videos.trailers[0] ? (
          <>
            <iframe
              src={result}
              autoPlay
              controls
              loop
              className={classes.video}
              title="video"
            ></iframe>
            <FilmPageGetImage film={film} />
          </>
        ) : (
          <img
            src={film.poster ? film.poster.url : null}
            className={classes.imgBig}
            alt={"Фото не найдено :("}
          ></img>
        )}
        <AddToFavorites film={film} />
      </div>
    </>
  );
};

export default FilmPageImgInfo;
