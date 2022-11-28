import { useState } from "react";
import classes from "./Pagination.module.css";
const Pagination = ({ paginate, itemsPerPage, totalItems }) => {
  const numbers = [];
  let [currentNumber, setCurrentNumber] = useState(1);
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    numbers.push(i);
  }

  return (
    <div className={classes.container}>
      {numbers.map((number, i) => {
        return (
          <a
            key={i}
            className={classes.pagelink}
            onClick={() => {
              paginate(number);
              setCurrentNumber(number);
            }}
            style={{ color: currentNumber === i + 1 ? "white" : "black" }}
          >
            {number}
          </a>
        );
      })}
    </div>
  );
};

export default Pagination;
