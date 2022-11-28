import { Link } from "react-router-dom";
import HeaderSecond from "../HeaderSecond/HeaderSecond";
import people from "./img/people.mp4";
import classes from "./Online.module.css";
const Online = () => {
  return (
    <div className={classes.wrapper}>
      <HeaderSecond />
      <div className={classes.wrapper_form}>
        <video
          src={people}
          autoPlay
          controls
          loop
          className={classes.wrapper__video}
        ></video>
      </div>
    </div>
  );
};

export default Online;
