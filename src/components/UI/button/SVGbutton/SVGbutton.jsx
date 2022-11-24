import classes from "./SVGbutton.module.css";
const SVGbutton = ({ src, onClick, style, position, max, disabled }) => {
  return (
    <div
      onClick={onClick}
      className={classes.buttonNext}
      style={{ display: disabled ? "none" : "flex" }}
    >
      <img src={src} alt="slide" style={style} className={classes.UIbutton} />
    </div>
  );
};

export default SVGbutton;
