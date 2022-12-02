import { useState } from "react";
import classes from "./Pagination.module.css";
import { FC } from "react";
import { IPagination } from "./IPagination";

const Pagination: FC<IPagination> = ({
  paginate,
  itemsPerPage,
  totalItems,
}) => {
  let [currentNumber, setCurrentNumber] = useState<number>(1);

  const numbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    numbers.push(i);
  }

  return (
    <div className={classes.container}>
      {numbers.map((number, i) => {
        return (
          <p
            key={i}
            className={classes.pagelink}
            onClick={() => {
              paginate(number);
              setCurrentNumber(number);
            }}
            style={{ color: currentNumber === i + 1 ? "white" : "black" }}
          >
            {number}
          </p>
        );
      })}
    </div>
  );
};

export default Pagination;
