"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errUser, setErrUser] = useState("");
  const [errpass, setErrpass] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    if (errUser && !username) {
      return;
    }
    if (errpass && !password) {
      return;
    }
    // Add your logic here to call the server to authenticate the user and handle the response.
    const res = await signIn("credentials", {
      username: username,
      password: password,
      redirect: false,
    });

    if (!res?.error) {
      setUsername("");
      setPassword("");
      router.push("/");
    } else {
      setErrpass(res?.error);
    }
  };
  const headertitle = () => {
    return (
      <>
        <div className="pl-5 pt-0 h-[160px] sm:pl-3 sm:pl-0 sm:mb-0 sm:h-[240px] sm:pt-6 lg:h-[165px]  lg:pt-3 xl:mb-4 xl:ml-0 xl:h-[180px] 2xl:pt-4 2xl:mb-5 ">
          <h1 className="text-white text-4xl  sm:text-blue-500 font-normal text-start  ml-4  sm:ml-3 sm:text-4xl lg:ml-0 lg:text-3xl 2xl:mb-2">
            Hello,
          </h1>
          <h2 className="text-white text-4xl sm:text-4xl lg:text-3xl sm:text-blue-500 font-black text-start  ml-4 sm:ml-3  sm:mt-2 lg:ml-0 lg:mt-0">
            Wellcome!
          </h2>
          <p className="text-white text-xl sm:text-lg  w-[380px] sm:text-base sm:text-black sm:w-[300px] ml-4 sm:ml-3 mt-3 h-[40px] block sm:mt-5 lg:mt-0 xl:mt-2 lg:ml-0">
            Don't have an account?{" "}
            <Link
              href="register"
              className="font-bold text-blue-600 sm:text-blue-500"
            >
              Create Your Acount
            </Link>{" "}
            it takes less than a minute
          </p>
        </div>
      </>
    );
  };
  const formInput = () => {
    return (
      <div className=" lg:mt-3 xl:mt-8">
        <div className="xl:mt-7 ml-3 w-full  pl-7 pr-14 sm:px-0">
          <label
            htmlFor="Username"
            className="text-lg sm:text-base font-semibold block mb-1 xl:text-base  "
          >
            Email
          </label>
          <input
            type="text"
            id="Username"
            placeholder="Enter Email..."
            className="border w-full  px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md"
            value={username}
            autoFocus
            onChange={(e) => {
              if (e.target.value.length !== 0) {
                setErrUser("");
              } else {
                setErrUser("Username is required");
              }
              setUsername(e.target.value);
            }}
          />

          <span className="text-white mt-3 font-medium sm:mt-1 sm:h-3 lg:mt-1 xl:mt-1 mb-0 sm:text-red-500 block lg:h-3 xl:h-5 xl:text-base xl:text-xl items-center ">
            {errUser}
          </span>
        </div>
        <div className="sm:mt-4 lg:mt-3 ml-3 w-full xl:mt-[6px] pl-7 pr-14 sm:px-0">
          <label
            htmlFor="Password "
            className="text-lg sm:text-base block mb-1  font-semibold  xl:text-base  "
          >
            Password
          </label>
          <input
            type="text"
            id="Password"
            placeholder="Enter Password..."
            className="border w-full  px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded-md"
            value={password}
            onChange={(e) => {
              if (e.target.value.length !== 0) {
                setErrpass("");
              } else {
                setErrpass("Password is required");
              }
              setPassword(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
          />

          <span className="text-white mt-3 font-medium sm:h-3  sm:mt-1 lg:mt-1 xl:mt-1 mb-0 sm:text-red-500 block lg:h-3 xl:h-5 xl:text-base xl:text-xl items-center ">
            {errpass}
          </span>
        </div>
        <h2 className=" w-[85%] sm:w-full text-xl sm:text-lg text-end  text-black sm:text-gray-500  ml-4 mt-[10px] xl:mt-1 hover:text-blue-500 hover:cursor-pointer ">
          Forget password?
        </h2>
      </div>
    );
  };
  const footerLogin = () => {
    return (
      <>
        <button
          className="block border-none rounded-[50px] py-[5px] w-[60%] mx-auto text-xl text-white font-semibold bg-gradient-to-r from-blue-400  to-pink-400 sm:hover:opacity-70 mt-10 sm:mt-6 lg:text-lg lg:py-[3px] lg:mt-4 xl:mt-5 2xl:mt-5 xl:py-[5px]"
          onClick={handleSubmit}
        >
          Login
        </button>
        <div className=" flex justify-center text-center text-lg text-white font-medium flex-col mt-10   sm:text-black sm:mt-8 lg:mt-3 xl:mt-5 2xl:10">
          <h2>Or Sign Up Using</h2>
          <div className="mt-3 xl:mt-5 flex justify-center">
            <button
              className="mr-3 scale-125 sm:scale-100"
              onClick={() => {
                signIn("google");
              }}
            >
              <img
                src="https://img.shields.io/badge/Google-lightgray?style=for-the-badge&logo=google&logoColor=white"
                alt="Google Sign-in"
                className="rounded-xl"
              />
            </button>

            <button
              className="ml-4 scale-125 sm:scale-100"
              onClick={() => {
                signIn("github");
              }}
            >
              <img
                src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                alt="GitHub Sign-in"
                className="ml-2 rounded-xl"
              />
            </button>
          </div>
        </div>
      </>
    );
  };
  const imgright = () => {
    return (
      <>
        <img
          src="https://image.freepik.com/free-vector/login-concept-illustration_114360-739.jpg"
          className="w-[100%] h-full xl:object-cover"
          alt=""
        />
      </>
    );
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className=" bg-gradient-login-main  sm:bg-none overflow-hidden h-[100vh] w-[100vw] px-10 shadow-lg bg-white rounded-md flex justify-center items-center sm:px-0 sm:items-start lg:items-stretch sm:w-[450px] sm:h-[700px]  lg:w-[800px] lg:h-[530px] lg:grid-cols-2 xl:w-[1000px] xl:h-[600px] 2xl:w-[1300px] 2xl:h-[600px]">
        <div className="">
          {headertitle()}
          {formInput()}
          {footerLogin()}
        </div>
        <div className=" ml-10 bg-gradient-to-r from-indigo-500  via-purple-500 to-pink-500 overflow-hidden hidden lg:block w-[50%]">
          {imgright()}
        </div>
      </div>
    </div>
  );
}

export default Login;
