import classes from "./Header.module.css";

import { useState } from "react";
import Accordeon from "../../../components/Accordeon/Accordeon";
import Logo from "../../../components/Logo/Logo";
import Input from "../../../components/UI/Input/Input";
import HeaderMap from "../HeaderMap/HeaderMap";
import { data } from "../../../dataBase/HeaderData/HeaderData";
const Header = () => {
  const [hideHeader, setHideHeader] = useState(false);

  const hideHeaderHandler = () => {
    setHideHeader(!hideHeader);
  };
  return (
    <div
      className={classes.accordeon}
      style={{ width: hideHeader ? "0px" : "250px" }}
    >
      <Accordeon
        hideHeaderHandler={hideHeaderHandler}
        hideHeader={hideHeader}
      />
      <div className={hideHeader ? classes.content_hide : classes.content}>
        <Logo />
        <HeaderMap data={data} />
      </div>
    </div>
  );
};

export default Header;
