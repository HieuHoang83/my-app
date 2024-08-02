"use client";

import { useSession } from "next-auth/react";
function MainHome() {
  const { data: session } = useSession();
  const { status } = useSession({
    required: false,
  });
  //@ts-ignore
  //sd ->session
  return (
    <div className="  text-4xl  items-center justify-center h-main-size relative">
      <div
        className="bg-no-repeat bg-clip-border bg-center bg-cover brightness-55 absolute w-[100vw] h-[100vh]"
        style={{
          backgroundImage:
            "url(https://hanoispiritofplace.com/wp-content/uploads/2017/12/hinh-anh-hoa-anh-dao-29.jpg) ",
        }}
      ></div>

      <div className=" brightness-100 flex flex-col text-4xl items-center justify-center h-main-size sm:flex-row sm:text-4xl md:text-5xl lg:text-6xl ">
        {session ? (
          <h1 className="text-white font-semibold sm:mb-0 mb-3">
            {session?.user?.name}
          </h1>
        ) : (
          <>
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#d958ca]  to-[#B5FFFC]  font-semibold sm:mb-0 mb-3 translate-y-[-200%]">
              WELLCOME TO OUR WEBSIDE
            </h1>
          </>
        )}
      </div>
    </div>
  );
}

export default MainHome;
