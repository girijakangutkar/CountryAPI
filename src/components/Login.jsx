import React, { useState } from "react";

function Login({ setIsLogin, isLogin }) {
  function loginTo() {
    setIsLogin(!isLogin);
  }
  return (
    <div>
      <h2>{isLogin ? "Logged in" : "Please log in"}</h2>
      <button onClick={loginTo}>Login</button>
    </div>
  );
}

export default Login;
