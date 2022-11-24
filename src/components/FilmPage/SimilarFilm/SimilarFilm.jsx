import MainTrending from "../../../containers/MainContainer/MainTrending/MainTrending";

const SimilarFilm = ({ film }) => {
  return (
    <>
      {film.length > 1 ? (
        <MainTrending film={film} width={"48vw"} name="Похожие фильмы" />
      ) : (
        <div style={{ height: "100vh" }}>
          <h3>Подобные фильмы не найдены</h3>
        </div>
      )}
    </>
  );
};

export default SimilarFilm;
