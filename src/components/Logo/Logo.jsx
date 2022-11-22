import classes from "./Logo.module.css";
import logotype from "./img/logotype.png";
const Logo = () => {
  return (
    <div className={classes.header__container_logo}>
      <img src={logotype} />
      <div>
        <h2>BRAKKACINEMA</h2>
      </div>
    </div>
  );
};

export default Logo;
