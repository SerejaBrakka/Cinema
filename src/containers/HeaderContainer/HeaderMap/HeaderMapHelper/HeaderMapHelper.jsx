import { Link } from "react-router-dom";

import classes from "./HeaderMapHelper.module.css";

const HeaderMapHelper = ({ item }) => {
  return (
    <>
      {item.map((element) => {
        return (
          <div key={element[0]} className={classes.wrapper}>
            <h3>{element[0]}</h3>
            <ul>
              {element[1].map((item) => {
                return (
                  <li key={item.name}>
                    <Link className={classes.header__container_items}>
                      {item.src}
                      <span className={classes.span}>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default HeaderMapHelper;
