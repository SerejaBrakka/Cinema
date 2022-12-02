import MainTrending from "../../../containers/MainContainer/MainTrending/MainTrending";

const SimilarFilm = ({ film }) => {
  return (
    <>
      {film.length > 1 ? (
        <MainTrending film={film} name="Похожие фильмы" />
      ) : (
        <div>
          <h3>Подобные фильмы не найдены</h3>
        </div>
      )}
    </>
  );
};

export default SimilarFilm;
