import React, { useContext, useState } from "react";
import CountryReducer from "./components/CountryReducer";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Home from "./components/Home";
import PrivateRoutes from "./components/PrivateRoutes";
import { themeContext } from "./context/ThemeContext";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const { selectTheme } = useContext(themeContext);
  return (
    <div
      className={selectTheme == "Light" ? "LightTheme" : "DarkTheme"}
      id="mainDiv"
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route
          path="/login"
          element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />}
        >
          Login
        </Route>
        <Route
          path="/explore"
          element={
            <PrivateRoutes isLogin={isLogin}>
              <CountryReducer />
            </PrivateRoutes>
          }
        >
          Explore
        </Route>
      </Routes>
    </div>
  );
}

export default App;
