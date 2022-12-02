import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ConnectButton from "../../../components/UI/button/ConnectButton/ConnectButton";
import HeaderHOC from "../../../HOC/HeaderHOC/HeaderHOC";
import { DeleteUserAC } from "../../../redux/action/Actions";
import {
  clearLocalStorage,
  getLocalStorageEmail,
} from "../../../utils/localStorage";
import Auth from "./Auth/Auth";
import classes from "./Connect.module.css";
import Login from "./Login/Login";
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
      <div className={classes.wrapper__form}>
        {!!getLocalStorageEmail("userEmail").email ? (
          <div className={classes.logout}>
            <h2> Вы уже уходите ? {user}</h2>
            <ConnectButton
              onClick={logout}
              value={"Выйти"}
              className={classes.button}
            />
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

export default HeaderHOC(Connect);
