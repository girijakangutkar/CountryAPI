import React, { useState } from "react";

function Login({ setIsLogin, isLogin }) {
  function loginTo() {
    setIsLogin(!isLogin);
  }
  return (
    <div className="loginDiv">
      <h2>{isLogin ? "Logged in" : "Please log in to explore"}</h2>
      <button id="loginBtn" onClick={loginTo}>
        Login
      </button>
    </div>
  );
}

export default Login;
