import { phone, social } from "../../../dataBase/FooterData/FooterData";
import classes from "./FooterSocial.module.css";
import FooterSocialMap from "./FooterSocialMap/FooterSocialMap";
const FooterSocial = () => {
  return (
    <div className={classes.wrapper}>
      <FooterSocialMap item={social} name={"Связаться с нами"} />
      <FooterSocialMap item={phone} name={"Мы в социальных сетях"} />
    </div>
  );
};

export default FooterSocial;
