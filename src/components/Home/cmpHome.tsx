"use client";
import { useSession } from "next-auth/react";
import MainHome from "./bodyHome/mainHome";
import NavigateHome from "../header/header";
import Loading from "../Loadingpage/loading";
import { useEffect, useState } from "react";
import { useThemeContext } from "@/library/ThemeProvider";
import FooterComponent from "../Footer/footer";

function CmpHome() {
  return (
    <>
      {status === "loading" ? (
        <Loading />
      ) : (
        <div>
          <NavigateHome />
          <MainHome />
          <FooterComponent />
        </div>
      )}
    </>
  );
}

export default CmpHome;
