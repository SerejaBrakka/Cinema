import React from "react";
import classes from "./MainActors.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
const MainActors = ({ max }) => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.kinopoisk.dev/person?field=id&search=300-315&limit=${max}&token=9NZGZJ6-BVA402G-JTB9TEF-GFP6Q9V`
    )
      .then((res) => res.json())
      .then((res) => setActors(res.docs));
  }, []);

  return (
    <div className={classes.wrapper} id="#actors">
      <h4>Известные актеры</h4>
      <div className={classes.acter__container}>
        {actors ? (
          actors.map((e) => {
            return (
              <Link to={`/actor/${e.id}`} className={classes.card} key={e.name}>
                <p>{e.name}</p>
                <img
                  src={e.photo}
                  alt={e.photo}
                  className={classes.actor__photo}
                />
              </Link>
            );
          })
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default MainActors;
