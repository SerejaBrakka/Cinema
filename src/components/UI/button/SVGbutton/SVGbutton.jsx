import classes from "./SVGbutton.module.css";
const SVGbutton = ({ src, onClick, style, position, max }) => {
  return (
    <div
      onClick={onClick}
      className={classes.buttonNext}
      style={{ display: position == max ? "none" : "flex" }}
    >
      <img
        src={src}
        alt="slide"
        onClick={onClick}
        style={style}
        className={classes.UIbutton}
      />
    </div>
  );
};

export default SVGbutton;
