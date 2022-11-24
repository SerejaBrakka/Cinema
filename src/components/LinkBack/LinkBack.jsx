import { useNavigate } from "react-router-dom";
import arrowBack from "./img/arrowBack.svg";
import classes from "./LinkBack.module.css";
const LinkBack = () => {
  const navigate = useNavigate();

  const handleGoBack = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <a onClick={handleGoBack} className={classes.link}>
      <img className={classes.link__img} src={arrowBack} alt="arrowBack" />
      <span>Go back</span>
    </a>
  );
};

export default LinkBack;
