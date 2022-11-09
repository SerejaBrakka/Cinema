import { Link } from "react-router-dom";

import classes from "./HeaderMapHelper.module.css";

const HeaderMapHelper = ({ item }) => {
  return (
    <>
      {item.map((element) => {
        return (
          <div key={element[0]}>
            <h3>{element[0]}</h3>
            <ul>
              {element[1].map((item) => {
                return (
                  <li key={item.name}>
                    <Link className={classes.header__container_items}>
                      <img
                        src={item.src}
                        alt={item.src}
                        className={classes.header__container_icon}
                      />
                      {item.name}
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
