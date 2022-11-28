import classes from "./Accordeon.module.css";
import show from "./img/show.svg";
const Accordeon = ({ hideHeaderHandler, hideHeader }) => {
  return (
    <div
      className={
        hideHeader ? classes.accordeon_wrapper : classes.accordeon_wrapper_hide
      }
    >
      <img
        src={show}
        onClick={hideHeaderHandler}
        alt="hide"
        className={
          hideHeader ? classes.accordeonIcon : classes.accordeonIcon_hide
        }
      />
    </div>
  );
};
export default Accordeon;
