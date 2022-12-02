import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ConnectButton from "../../components/UI/button/ConnectButton/ConnectButton";
import {
  DeleteFindedFilmsAc,
  SetFindedFilmsAc,
} from "../../redux/action/Actions";
import classes from "./RightSideBarInputFindFilm.module.css";
const RightSideBarInputFindFilm = () => {
  let [value, setValue] = useState("");

  let [isHideTooltip, setIsHideTooltip] = useState(true);
  let [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  function makeRequest() {
    dispatch(DeleteFindedFilmsAc());

    setLoading(true);
    fetch(
      `https://api.kinopoisk.dev/movie?field=name&search=${value}&limit=1000&isStrict=false&token=9NZGZJ6-BVA402G-JTB9TEF-GFP6Q9V`
    )
      .then((res) => res.json())
      .then((json) => dispatch(SetFindedFilmsAc(json.docs)))
      .then((res) => setLoading(false));

    setIsHideTooltip(false);
  }
  const findedFilm = useSelector((state) => state.FindReducer.films);

  return (
    <div className={classes.wrapper}>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className={classes.input}
        placeholder={"Поиск фильма"}
      ></input>
      {value && <ConnectButton onClick={makeRequest} value={"Поиск"} />}

      {loading ? <div>Идет загрузка</div> : null}
      {!isHideTooltip && (
        <div
          className={classes.container}
          style={{ display: isHideTooltip ? "none" : "flex" }}
        >
          {findedFilm.length > 1 ? (
            findedFilm.slice(0, 6).map((e) => {
              return (
                <div className={classes.card} key={e.id}>
                  <Link to={`/film/${e.id}`}>
                    <p>{e.name.slice(0, 20) + "..."}</p>
                    <img
                      src={e.poster ? e.poster.url : null}
                      alt={"Фото не найдено :("}
                    />
                  </Link>
                </div>
              );
            })
          ) : findedFilm.length === 0 && !isHideTooltip ? (
            <h3>Ничего не найдено</h3>
          ) : null}

          {findedFilm.length > 1 && !isHideTooltip ? (
            <div className={classes.button__container}>
              <Link to="/AllFindedFilms" className={classes.link}>
                <ConnectButton value={"Все"} />
              </Link>
              <ConnectButton
                onClick={() => setIsHideTooltip(true)}
                value={"Скрыть"}
              />
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default RightSideBarInputFindFilm;
