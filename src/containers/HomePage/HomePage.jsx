import FooterMain from "../FooterContainer/FooterMain/Footer";
import Footer from "../FooterContainer/FooterMain/Footer";
import Header from "../HeaderContainer/HeaderPrime/Header";
import Main from "../MainContainer/MainPrime/Main";
import RightSidebar from "../RightSidebarContainer/RightSidebarPrime/RightSidebar";
import classes from "./HomePage.module.css";
const HomePage = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <Header />
        <Main />
        <RightSidebar />
      </div>
      <div className={classes.footer}>
        <FooterMain />
      </div>
    </>
  );
};

export default HomePage;
