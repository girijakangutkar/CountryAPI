import React, { useState } from "react";
import CountryReducer from "./components/CountryReducer";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Home from "./components/Home";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
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
