import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./../../routes/routesConfig";
import classes from "./App.module.css";
const App: FC = () => {
  return (
    <div className={classes.app}>
      <Routes>
        {routes.map((e) => {
          return <Route path={e.path} element={e.element} key={e.path}></Route>;
        })}
      </Routes>
    </div>
  );
};

export default App;
