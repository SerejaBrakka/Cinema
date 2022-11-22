import React from "react";
import classes from "./MainActors.module.css";
import { useState, useEffect } from "react";
const MainActors = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.kinopoisk.dev/person?field=id&search=0-15&limit=15&token=ZQQ8GMN-TN54SGK-NB3MKEC-ZKB8V06"
    )
      .then((res) => res.json())
      .then((res) => setActors(res.docs));
  }, []);
  console.log(actors);
  return (
    <div className={classes.wrapper} id="#actors">
      <h4>Best Actors</h4>
      <div className={classes.acter__container}>
        {actors ? (
          actors.map((e) => {
            return (
              <div className={classes.card} key={e.name}>
                <p>{e.name}</p>
                <img
                  src={e.photo}
                  alt={e.photo}
                  className={classes.actor__photo}
                />
              </div>
            );
          })
        ) : (
          <div>Актеры сбежали</div>
        )}
      </div>
    </div>
  );
};

export default MainActors;
