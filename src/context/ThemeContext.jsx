import React, { createContext, useState } from "react";

export const themeContext = createContext("Light");

function ThemeContext({ children }) {
  const [selectTheme, setSelectTheme] = useState("Light");

  function selectTheming() {
    // localStorage.setItem('themeContext', selectTheme)
    setSelectTheme(selectTheme == "Dark" ? "Light" : "Dark");
  }
  return (
    <themeContext.Provider value={{ selectTheme, selectTheming }}>
      {children}
    </themeContext.Provider>
  );
}

export default ThemeContext;
