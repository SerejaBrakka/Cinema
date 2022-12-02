import Logo from "../../../components/Logo/Logo";
import ConnectButton from "../../../components/UI/button/ConnectButton/ConnectButton";
import FooterSocial from "../FooterSocial/FooterSocial";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={classes.wrapper}>
      <div className={classes.one}>
        <h4>Техническая поддержка</h4>
        <p>
          Мы с удовольствием ответим на интересующие тебя вопросы
          serg538691@mail.com
        </p>
        <ConnectButton value={"Написать нам"} />
      </div>
      <div className={classes.two}>
        <div>
          <h4>Помощь</h4>
          <p>Информация</p>
          <p>Вопросы и ответы</p>
        </div>
        <div className={classes.logoC}>
          <Logo /> © 2022
        </div>
      </div>
      <div>
        <FooterSocial />
      </div>
    </footer>
  );
};

export default Footer;
