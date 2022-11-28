import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ConnectButton from "../../../../components/UI/button/ConnectButton/ConnectButton";
import Input from "../../../../components/UI/Input/Input";
import { app } from "../../../../firebase/firebaseConfig";
import { SetUserAC } from "../../../../redux/action/Actions";
import classes from "./Auth.module.css";
import { setLocalStorage } from "../../../../utils/localStorage";
import { useSelector } from "react-redux";
const Auth = () => {
  let [isAuth, SetIsAuth] = useState(false);
  let [userEmail, setUserEmail] = useState("");
  let [userPassword, setUserPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.UsersReducer.email);
  function login() {
    const auth = getAuth(app);

    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        setLocalStorage("userEmail", userCredential.user.email);
        dispatch(SetUserAC(userCredential.user.email));

        SetIsAuth(true);
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  }
  return (
    <div className={classes.form__auth}>
      <h2>Рады вас видеть!</h2>
      <p>
        Чтобы оставаться на связи с нами, пожалуйста, войдите в систему, указав
        свои личные данные
      </p>
      <Input
        onChange={(e) => setUserEmail(e.target.value)}
        placeholder={"Почта"}
      />
      <Input
        onChange={(e) => setUserPassword(e.target.value)}
        placeholder={"Пароль"}
        type={"password"}
      />
      <ConnectButton onClick={() => login()} value={"Войти"} />
    </div>
  );
};

export default Auth;
