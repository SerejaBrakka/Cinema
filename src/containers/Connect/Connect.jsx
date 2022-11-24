import Auth from "./Auth/Auth";
import classes from "./Connect.module.css";
import Login from "./Login/Login";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../HeaderContainer/HeaderPrime/Header";
import ConnectButton from "./../../components/UI/button/ConnectButton/ConnectButton";
import { useDispatch } from "react-redux";
import { DeleteUserAC } from "../../redux/action/Actions";
import { clearLocalStorage, getLocalStorageEmail } from "../../utils/localStorage";
const Connect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logout() {
    dispatch(DeleteUserAC());
    clearLocalStorage("userEmail");
    navigate("/");
  }
  const user = useSelector((state) => state.UsersReducer.email);

  return (
    <div className={classes.wrapper}>
      <Header />
      <div className={classes.wrapper__form}>
        {!!getLocalStorageEmail("userEmail").email ? (
          <div className={classes.logout}>
            <h2> Вы уже уходите ? {user}</h2>
            <ConnectButton onClick={logout} value={"Выйти"} />
            <Link to="/">На главную</Link>
          </div>
        ) : (
          <>
            <Auth />
            <Login />
          </>
        )}
      </div>
    </div>
  );
};

export default Connect;
