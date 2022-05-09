import { createContext, ReactNode, useContext, useState } from "react";
import { useEffect } from "react";

const ThemeContext = createContext({});

export function ProviderTheme({ children }) {
  const [themeIsActive, setThemeIsActive] = useState(() => {

    const theme = localStorage.getItem("@THEME");

    if(!theme) {
      const date = new Date();

      const hour = date.getUTCHours() - 3;


      if(hour > 6 && hour < 18) {
          return false;
      } else {
          return true;
      }
    }

    if(theme === "true") return true;

    return false;
  });
  
  function changeTheme() {
    setThemeIsActive(!themeIsActive);
    localStorage.setItem("@THEME", JSON.stringify(!themeIsActive));
  }

  return (
    <ThemeContext.Provider value={{themeIsActive, changeTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const theme = useContext(ThemeContext);
  return theme;
}