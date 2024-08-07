"use client";
import { useSession } from "next-auth/react";
import MainHome from "./bodyHome/mainHome";
import NavigateHome from "./header/header";
import Loading from "../Loadingpage/loading";
import { useEffect, useState } from "react";

function CmpHome() {
  const { status } = useSession({
    required: false,
  });
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
    <>
      {status === "loading" ? (
        <Loading />
      ) : (
        <div className={`${theme}`}>
          <NavigateHome transparent={"transparent"} toggleTheme={toggleTheme} />
          <MainHome />
        </div>
      )}
    </>
  );
}

export default CmpHome;
