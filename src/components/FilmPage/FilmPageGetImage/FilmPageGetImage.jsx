import { useEffect, useState, useMemo } from "react";
import Loader from "../../Loader/Loader";
import classes from "./FilmPageGetImage.module.css";
const FilmPageGetImage = ({ film }) => {
  const [filmImage, setFilmImage] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  let [count, setCount] = useState(0);
  useEffect(() => {
    fetch(
      `https://api.kinopoisk.dev/image?field=movieId&search=${film.id}&limit=15&token=9NZGZJ6-BVA402G-JTB9TEF-GFP6Q9V`
    )
      .then((res) => res.json())
      .then((json) =>
        setFilmImage(json.docs.filter((e) => !e.url.includes("themoviedb")))
      );
  }, [film]);

  return (
    <div className={classes.wrapper}>
      {filmImage &&
        filmImage.map((e, i) => {
          return (
            <div>
              <img
                onClick={() => {
                  setModalActive(true);
                  setCount(i);
                }}
                style={{ style: "width: 50%; max-width: 300px" }}
                className={classes.img}
                src={e.url}
                alt={"Фото не загрузилось :("}
                id="myImg"
              ></img>
              <div
                onClick={() => setModalActive(!modalActive)}
                className={
                  modalActive
                    ? `${classes.modal} ${classes.active}`
                    : classes.modal
                }
              >
                <div className={classes.modal_content}>
                  <img
                    src={filmImage[count].url}
                    alt={"Фото не загрузилось :("}
                  />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default FilmPageGetImage;
