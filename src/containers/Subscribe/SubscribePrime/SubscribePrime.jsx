import ConnectButton from "../../../components/UI/button/ConnectButton/ConnectButton";
import HeaderSecond from "../../HeaderContainer/HeaderSecond/HeaderSecond";

import GetFilms from "../../../components/GetFilms/GetFilms";
import classes from "./SubscribePrime.module.css";
const SubscribePrime = () => {
  return (
    <div className={classes.wrapper}>
      <HeaderSecond />
      <div className={classes.subscribe__wrapper}>
        <div className={classes.info}>
          <h2>Тысячи фильмов и сериалов онлайн за 99 Р в месяц</h2>
          <span>
            C подпиской BRAKKACINEMA всегда есть ответ на вопрос "Что
            посмотреть?".
            <br />В вашем распоряжении - знаменитые сериалы, эксклюзивные
            премьеры, легендарное кино и культовые киновселенные. Без рекламы и
            в высоком качестве.
          </span>
        </div>
        <ConnectButton value={"Хочу, оформляем"} />
        <GetFilms
          direction={"row"}
          year={"2020-2021"}
          img={"img"}
          img1={"img1"}
        />
        <GetFilms
          direction={"row-reverse"}
          year={"2021-2022"}
          img={"img"}
          img1={"img1reverse"}
        />
      </div>
    </div>
  );
};

export default SubscribePrime;
