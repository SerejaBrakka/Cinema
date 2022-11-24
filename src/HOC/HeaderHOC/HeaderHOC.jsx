import HeaderSecond from "../../containers/HeaderContainer/HeaderSecond/HeaderSecond";
import classes from "./HeaderHOC.module.css";
const HeaderHOC = (Component) => {
  return (props) => {
    return (
      <div className={classes.wrapper}>
        <HeaderSecond />
        <div className={classes.items__container}>
          <Component {...props} />
        </div>
      </div>
    );
  };
};

export default HeaderHOC;
