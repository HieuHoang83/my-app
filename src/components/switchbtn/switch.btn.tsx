"use client";
import { useCallback, useEffect, useRef, useState } from "react";

function SwitchButton({ toggleTheme }: { toggleTheme: any }) {
  let storedTheme: string | null = null;
  if (typeof window !== "undefined" && window.localStorage) {
    storedTheme = window.localStorage.getItem("theme");
  }

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = useCallback(() => {
    if (inputRef) {
      if (inputRef.current) {
        inputRef.current.checked = !inputRef.current.checked; // Hoạt động bình thường
        toggleTheme();
      }
    }
    //@ts-ignore
  }, [inputRef, toggleTheme]);
  return (
    <div className={`relative flex items-center ml-4  w-14`}>
      <span
        className={`sun absolute  right-[8px] z-10 dark:hidden block cursor-pointer`}
        onClick={handleClick}
      >
        <i
          className="pi pi-sun"
          style={{ fontSize: "13px", color: "white" }}
        ></i>
      </span>

      <span
        className={`moon absolute  left-[7px] z-10 dark:block hidden cursor-pointer`}
        onClick={handleClick}
      >
        <i
          className="pi pi-moon"
          style={{ fontSize: "13px", color: "white" }}
        ></i>
      </span>
      <label
        htmlFor="switch"
        className="inline-flex relative items-center cursor-pointer"
      >
        <input
          type="checkbox"
          value=""
          id="switch"
          className="sr-only peer"
          ref={inputRef}
          checked={storedTheme === "dark"}
          onClick={handleClick}
        />
        <div className="relative  w-14 h-6  rounded-full  bg-orange-400 peer-checked:after:translate-x-[145%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[3px] after:bg-white  after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-gray-400 "></div>
      </label>
    </div>
  );
}

export default SwitchButton;
