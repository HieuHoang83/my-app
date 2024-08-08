"use client";
import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext,
} from "react";
export interface ThemeContextInterface {
  theme: string;
  toggleTheme: () => any;
}
export const ThemeContext = createContext({} as ThemeContextInterface);

type Props = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Lấy theme từ Local Storage khi component được mount
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    console.log("old", theme);
    const newTheme = theme === "light" ? "dark" : "light";
    console.log("new", newTheme);

    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
