"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errUser, setErrUser] = useState("");
  const [errpass, setErrpass] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    if (errUser) {
      return;
    }
    if (errpass) {
      console.log("return");

      return;
    }
    // Add your logic here to call the server to authenticate the user and handle the response.
    const res = await signIn("credentials", {
      username: username,
      password: password,
      redirect: false,
    });
    console.log(res);
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
      <div className="mb-10 sm:mb-0 sm:h-[250px] sm:pt-20 lg:h-[100px] lg:pt-5 xl:mb-4 2xl:h-[120px] 2xl:pt-10 2xl:mb-5">
        <h1 className="text-white text-6xl sm:text-4xl sm:text-blue-500 font-normal text-start  ml-4 2xl:mb-2">
          Hello,
        </h1>
        <h2 className="text-white text-6xl sm:text-4xl sm:text-blue-500 font-black text-start  ml-4 sm:mt-4 lg:mt-0">
          Wellcome!
        </h2>
      </div>
    );
  };
  const formInput = () => {
    return (
      <div className=" lg:mt-5 xl:mt-8">
        <div className="mt-4 ml-3 w-full">
          <label
            htmlFor="Username"
            className="text-xl font-semibold block mb-1   md:text-base xl:text-lg  "
          >
            Username
          </label>
          <input
            type="text"
            id="Username"
            placeholder="Enter Username..."
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
          {errUser ? (
            <span className="text-white  text-xl mt-3 mb-0 sm:text-red-500 block  h-7 items-center ">
              {errUser}
            </span>
          ) : (
            <></>
          )}
        </div>
        <div className=" mt-4 ml-3 text-base  xl:mt-4 ">
          <label
            htmlFor="Password "
            className="text-xl  block mb-1  font-semibold  md:text-base xl:text-lg  "
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

          {errpass ? (
            <span className=" text-white mt-3 mb-4 sm:text-red-500 block text-xl  items-center h-5 ">
              {errpass}
            </span>
          ) : (
            <></>
          )}
        </div>
        <h2 className="text-xl sm:text-lg text-end text-black sm:text-gray-500  ml-4  mt-2 hover:text-blue-500 hover:cursor-pointer ">
          Forget password?
        </h2>
      </div>
    );
  };
  const footerLogin = () => {
    return (
      <>
        <button
          className="block border-none rounded-[50px]  w-[60%] mx-auto text-xl text-white font-semibold bg-gradient-to-r from-blue-400  to-pink-400 hover:opacity-70 mt-10 sm:mt-10 lg:text-lg lg:py-[3px] lg:mt-2 xl:mt-5 2xl:mt-5 xl:py-[5px]"
          onClick={handleSubmit}
        >
          Login
        </button>
        <div className="flex justify-center text-center mt-10 text-lg font-medium flex-col sm:mt-15 lg:mt-3 xl:mt-5 2xl:10">
          <h2>Or Sign Up Using</h2>
          <div className="mt-3 flex justify-center">
            <button
              className="mr-3"
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
      <div className=" bg-gradient-login-main  sm:bg-none  h-[100vh] w-[100vw] shadow-lg bg-white rounded-md flex justify-center items-center sm:items-start lg:items-stretch sm:w-[450px] sm:h-[700px]  lg:w-[800px] lg:h-[450px] lg:grid-cols-2 xl:w-[1000px] xl:h-[500px] 2xl:w-[1300px] 2xl:h-[600px]">
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
