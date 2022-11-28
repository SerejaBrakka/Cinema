import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LinkBack from "../../LinkBack/LinkBack";
import Loader from "../../Loader/Loader";
import classes from "./ActorPage.module.css";
const ActorPage = () => {
  const [actor, setActor] = useState("");
  const param = useParams().id;
  useEffect(() => {
    fetch(
      `https://api.kinopoisk.dev/person?field=id&search=${param}&token=ZQQ8GMN-TN54SGK-NB3MKEC-ZKB8V06`
    )
      .then((res) => res.json())
      .then((json) => setActor(json));
  }, [param]);

  return (
    <div className={classes.wrapper}>
      <LinkBack />
      {actor ? (
        <div className={classes.card}>
          <div>
            <img src={actor.photo} className={classes.img} />
          </div>
          <div>
            <h1>{actor.name}</h1>
            <p>О персоне</p>
            <p>
              Карьера:
              {actor.profession.map((e, i) => (
                <span key={i}> {e.value} </span>
              ))}
            </p>
            <p>Рост: {actor.growth}</p>
            <p>
              Дата Рождения:
              {actor.birthday ? (
                <span> {new Date(actor.birthday).toLocaleDateString()}</span>
              ) : (
                <span> {"Неизвестно"}</span>
              )}
            </p>
            <p>
              Возраст:{" "}
              {actor.age !== 0
                ? actor.age
                : actor.birthday
                ? new Date(actor.birthday).getFullYear()
                : "Неизвестно"}
            </p>
            <p>Всего фильмов: {actor.movies.length}</p>
            <h4>
              {actor.facts ? actor.facts.map((e) => <p>{e.value}</p>) : null}
            </h4>
          </div>
          <div className={classes.actorFilms}>
            <p>Участие в фильмах</p>
            {actor.movies
              .filter((e, i) => {
                if (i !== actor.movies.length - 1) {
                  return actor.movies[i].id !== actor.movies[i + 1].id;
                }
              })
              .filter((e) => e.name !== null)
              .slice(0, 10)
              .map((e, i) => {
                return (
                  <Link to={`/film/${e.id}`} className={classes.card} key={i}>
                    <p>{e.name}</p>
                  </Link>
                );
              })}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ActorPage;
