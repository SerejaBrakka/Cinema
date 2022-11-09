import classes from "./Header.module.css";

import { useState } from "react";
import Accordeon from "../Accordeon/Accordeon";
import Logo from "../Logo/Logo";
import Input from "../UI/Input/Input";
import HeaderMap from "../../dataBase/headerData/HeaderMap/HeaderMap";
import { data } from "../../dataBase/headerData/HeaderData/HeaderData";
const Header = () => {
  const [hideHeader, setHideHeader] = useState(false);

  const hideHeaderHandler = () => {
    setHideHeader(!hideHeader);
  };
  return (
    <div className={classes.accordeon}>
      <Accordeon
        hideHeaderHandler={hideHeaderHandler}
        hideHeader={hideHeader}
      />
      <div className={hideHeader ? classes.content_hide : classes.content}>
        <Logo />
        <Input />
        <HeaderMap data={data} />
      </div>
    </div>
  );
};

export default Header;
