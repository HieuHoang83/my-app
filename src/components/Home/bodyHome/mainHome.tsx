"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/image/4c629861-7991-447c-ba00-6aca97e09ebe-removebg-preview.png";
function MainHome() {
  const { data: session } = useSession();
  const { status } = useSession({
    required: false,
  });
  //@ts-ignore
  //sd ->session

  return (
    <div
      className={`relative  mt-[80px]  font-poppins bg-cover  h-[calc(100vh-80px)] flex justify-start dark:pl-0 items-center bg-[url('https://www.sidechef.com/category/4c629861-7991-447c-ba00-6aca97e09ebe.jpg')] dark:bg-none  bg-[top_50%_right_0px]`}
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-4 z-10 ml-[180px] dark:text-gray-200">
        Welcome to Delicious Recipes
      </h1>
      <Image
        src={logo}
        className="absolute  hidden dark:block object-cover h-full w-full"
        alt=""
      />
    </div>
  );
}

export default MainHome;
