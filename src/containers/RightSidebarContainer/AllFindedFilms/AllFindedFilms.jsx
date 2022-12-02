import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LinkBack from "../../../components/LinkBack/LinkBack";
import classes from "./AllFindedFilms.module.css";
import Pagination from "./pagination/Pagination";
const AllFindedFilms = () => {
  let [currentPage, setCurrentPage] = useState(1);
  let [itemsPerPage, setItemsPerPage] = useState(50);
  let [totalItems, setTotalItems] = useState(0);
  const findedFilm = useSelector((state) => state.FindReducer.films);
  const lastSiteIndex = currentPage * itemsPerPage;
  const firstSiteIndex = lastSiteIndex - itemsPerPage;
  let currentSite = findedFilm.slice(firstSiteIndex, lastSiteIndex);

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }
  return (
    <>
      <LinkBack />
      <div className={classes.wrapper}>
        <Pagination
          paginate={paginate}
          itemsPerPage={itemsPerPage}
          totalItems={findedFilm.length}
        />
        {currentSite ? (
          currentSite.map((e, i) => {
            return (
              <div className={classes.card} key={i}>
                <Link to={`/film/${e.id}`}>
                  <img
                    src={e.poster ? e.poster.url : null}
                    className={classes.img}
                    alt={"Фото не найдено :("}
                  />
                  <p>{e.name}</p>
                  <p>{e.rating && e.rating.kp !== 0 ? e.rating.kp : null}</p>
                </Link>
              </div>
            );
          })
        ) : (
          <LinkBack />
        )}
      </div>
    </>
  );
};

export default AllFindedFilms;
