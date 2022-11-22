import classes from "./Input.module.css";

const Input = ({ placeholder, onChange, value, type }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className={classes.input}
      placeholder={placeholder}
      type={type}
    ></input>
  );
};

export default Input;
