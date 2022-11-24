import classes from "./FilmPageFilmInfo.module.css";
const FilmPageFilmInfo = ({ film }) => {
  return (
    <div className={classes.filmInfo}>
      <h1>{film.name}</h1>
      <p>Слоган: {film.slogan || "Отсутствует"}</p>

      <h3>О фильме:</h3>
      <p>
        <span>{film.year}</span>

        <p>{film.ageRating ? film.ageRating + "+" : null}</p>
      </p>
      <p>
        Страна:
        {film.countries.map((e, i) => (
          <span key={i}> {e.name},</span>
        ))}
      </p>
      <p>
        Жанр:
        {film.genres.map((e, i) => (
          <span key={i}> {e.name},</span>
        ))}
      </p>
      <p>Описание: {film.description || "Отсутствует"}</p>
      <div className={classes.pDangerous}>
        {film.facts.length > 3 ? (
          <div>
            Знаете ли вы что:
            {film.facts.slice(0, 3).map((e, i) => {
              return (
                <div
                  key={i}
                  dangerouslySetInnerHTML={{
                    __html: `<p >${e.value}</p>`,
                  }}
                ></div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FilmPageFilmInfo;
