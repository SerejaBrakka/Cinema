import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import classes from "./Login.module.css";

import Input from "../../../../components/UI/Input/Input";
import ConnectButton from "../../../../components/UI/button/ConnectButton/ConnectButton";

import { app } from "../../../../firebase/firebaseConfig";
import { SetUserAC } from "../../../../redux/action/Actions";
import { setLocalStorage } from "../../../../utils/localStorage";

const Login = () => {
  let [userEmail, setUserEmail] = useState("");
  let [userPassword, setUserPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function login() {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        setLocalStorage("userEmail", userCredential.user.email);
        dispatch(SetUserAC(userCredential.user.email));

        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  }
  return (
    <div className={classes.reg}>
      <h2>Создать аккаунт</h2>
      <p>Используйте электронную почту для регистрации</p>
      <Input
        onChange={(e) => setUserEmail(e.target.value)}
        placeholder={"Почта"}
      />
      <Input
        onChange={(e) => setUserPassword(e.target.value)}
        type={"password"}
        placeholder={"Пароль не менее 6 знаков"}
      />
      <ConnectButton onClick={login} value={"Регистрация"} />
      <Link to="/">На главную</Link>
    </div>
  );
};

export default Login;
