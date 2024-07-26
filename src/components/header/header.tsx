"use client";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { Toast } from "primereact/toast";
import { useRef } from "react";

function NavigateHome() {
  const { data: session } = useSession();
  //@ts-ignore
  return (
    <header className="flex z-50 items-center h-[80px] fixed top-0 left-0 right-0 brightness-70 ">
      <div className="flex text-xl mr-8 items-center relative w-full sm:ml-auto md:text-2xl md:justify-end lg:text-3xl  ">
        <Link className="text-white font-medium sm:ml-3 md:ml-8  ml-2" href="/">
          Home
        </Link>
        <Link
          className="text-white font-medium sm:ml-3 md:ml-8  ml-2"
          href="/about"
        >
          About
        </Link>
        <Link
          className="text-white font-medium sm:ml-3 md:ml-8  ml-2"
          href="/contact"
        >
          Contact
        </Link>

        {session ? (
          <button
            onClick={() => {
              signOut();
            }}
            className="text-white bg-white absolute top-[50%] translate-y-[-50%] right-[-10px] rounded-3xl px-2 py-1 text-center font-medium  bg-gradient-to-r from-indigo-500  to-blue-400 hover:opacity-80 hover:bg-gradient-to-r hover:from-green-300 hover:to-blue-300 hover:text-black sm:ml-2 sm:px-3 md:ml-8  md:top-0 md:relative md:translate-y-0  md:right-0   "
          >
            Log out
          </button>
        ) : (
          <Link
            className=" text-white bg-white absolute top-[50%] translate-y-[-50%] right-[-10px] rounded-3xl px-2 py-1 text-center font-medium  bg-gradient-to-r from-indigo-500  to-blue-400 hover:opacity-80 hover:bg-gradient-to-r hover:from-green-300 hover:to-blue-300 hover:text-black sm:ml-2 sm:px-3 md:ml-8  md:top-0 md:relative md:translate-y-0  md:right-0    "
            href="/auth/login"
          >
            Sign up
          </Link>
        )}
      </div>
    </header>
  );
}

export default NavigateHome;
