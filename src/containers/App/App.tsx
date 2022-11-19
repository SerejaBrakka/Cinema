import { FC } from "react";
import Header from "../HeaderContainer/HeaderPrime/Header";
import Main from "../MainContainer/MainPrime/Main";
import RightSidebar from "../RightSidebarContainer/RightSidebarPrime/RightSidebar";
import classes from "./App.module.css";
const App: FC = () => {
  return (
    <div className={classes.app}>
      <Header />
      <Main />
      <RightSidebar />
    </div>
  );
};

export default App;
