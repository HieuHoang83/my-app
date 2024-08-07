"use client";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { Toast } from "primereact/toast";
import { useEffect, useRef, useState } from "react";
import axios, { AxiosResponse } from "axios";
import SwitchButton from "@/components/switchbtn/switch.btn";
async function fetchData(url: string, body: any) {
  // You can await here
  try {
    const response: AxiosResponse = await axios.post(url, {}, body);

    return response.data;
  } catch (error: any) {
    return {
      statusCode: error?.response?.data?.statusCode ?? 400,
      error: error?.response?.data?.error ?? "error",
      message: error?.response?.data?.message ?? "message",
    };
  }
}
type Callback = () => void;
function NavigateHome({
  transparent,
  toggleTheme,
}: {
  transparent: string;
  toggleTheme: Callback;
}) {
  const { data: session, status, update } = useSession();
  //@ts-ignore

  const handleLogout = async () => {
    const response = await fetchData(
      "http://localhost:8000/api/v1/auth/logout",
      {
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      }
    ); //token
    //call api by token =>user

    if (response.error) {
      alert(response.message);
    } else {
      signOut();
    }
  };

  const Setting = ({ isShow = false }) => {
    return (
      <div className="relative  ml-2">
        <button
          className={`setting-button font-medium ${
            isShow ? "text-white" : "text-black"
          } dark:text-gray-200 px-4 py-2 rounded-md w-full `}
          onClick={() => {
            const settingMenu = document.querySelector(".setting-menu");
            //@ts-ignore
            settingMenu.classList.toggle("hidden");
          }}
        >
          Setting
        </button>
        <div className="setting-menu hidden bg-white dark:bg-[#c9c8c8] shadow-lg  rounded-l-md rounded-b-md  fixed top-[80px] right-0 w-[170px] overflow-hidden">
          <h3 className="text-lg font-medium  border-b dark:border-[#686868] px-3 py-1 text-center cursor-default">
            Setting Options
          </h3>
          <ul className=" ">
            <li className="text-lg pl-5 border-b dark:border-[#686868] flex items-center">
              <div>Them</div>
              <SwitchButton toggleTheme={toggleTheme} />
            </li>
            <li className="text-lg pl-5 border-b dark:border-[#686868]  ">
              Option 3
            </li>
            <li className=" border-b text-lg w-full ">
              {session ? (
                <button
                  onClick={handleLogout}
                  className="block w-full bg-[#cccccc98] text-center"
                >
                  Log out
                </button>
              ) : (
                <Link
                  href="/auth/login"
                  className="block w-full bg-[#cccccc65] hover:bg-[#cccccc48] dark:hover:bg-[#35323243] text-center py-1"
                >
                  Sign up
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    );
  };
  if (transparent != "show") {
    return (
      <header>
        <div className="flex z-50 items-center h-[80px] fixed top-0 left-0 right-0 brightness-70 ">
          <div className="flex text-xl mr-8 items-center relative w-full sm:ml-auto md:text-2xl md:justify-end lg:text-3xl  ">
            <Link
              className="text-white font-medium sm:ml-3 md:ml-8  ml-2"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-white font-medium sm:ml-3 md:ml-8  ml-2"
              href="/about"
            >
              About
            </Link>
            <button
              className="text-white font-medium sm:ml-3 md:ml-8  ml-2 "
              onClick={() => update({ name: "John Doe" })}
            >
              Edit name
            </button>

            <Setting isShow={true} />
          </div>
        </div>
      </header>
    );
  } else {
    return (
      <header>
        <div className="flex z-50 items-center h-[80px] fixed top-0 left-0 right-0  bg-gray-200 dark:bg-gray-700">
          <div className="flex text-xl mr-8 items-center relative w-full sm:ml-auto md:text-2xl md:justify-end lg:text-3xl  ">
            <Link
              className="text-black font-medium sm:ml-3 md:ml-8  ml-2 dark:text-gray-200"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-black dark:text-gray-200 font-medium sm:ml-3 md:ml-8  ml-2"
              href="/about"
            >
              About
            </Link>
            <Setting />
          </div>
        </div>
      </header>
    );
  }
}

export default NavigateHome;
