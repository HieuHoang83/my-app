"use client";

import { useSession } from "next-auth/react";

function MainHome() {
  const { data: session } = useSession();
  //@ts-ignore
  return (
    <div className="  text-6xl items-center justify-center h-main-size relative">
      <div
        className="bg-no-repeat bg-clip-border bg-cover brightness-55 absolute w-[100vw] h-[100vh]"
        style={{
          backgroundImage:
            "url(https://hanoispiritofplace.com/wp-content/uploads/2017/12/hinh-anh-hoa-anh-dao-29.jpg) ",
        }}
      ></div>

      <div className="brightness-100 flex flex-col text-4xl items-center justify-center h-main-size sm:flex-row sm:text-4xl md:text-5xl lg:text-6xl ">
        {session ? (
          <h1 className="text-white font-semibold sm:mb-0 mb-3">
            {session?.user?.name}
          </h1>
        ) : (
          <>
            <h1 className="text-white font-semibold sm:mb-0 mb-3 ">
              WELLCOME TO OUR
            </h1>
            <strong className="text-white ml-5 font-medium md:text-blue-800 ">
              WEBSIDE
            </strong>
          </>
        )}
      </div>
    </div>
  );
}

export default MainHome;
