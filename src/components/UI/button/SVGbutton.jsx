import classes from "./SVGbutton.module.css";
const SVGbutton = ({ src, onClick, position, style }) => {
  return (
    <img
      src={src}
      alt="slide"
      onClick={onClick}
      style={style}
      className={classes.UIbutton}
    />
  );
};

export default SVGbutton;
