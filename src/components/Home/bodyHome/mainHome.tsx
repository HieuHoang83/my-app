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
            "url(https://img.freepik.com/premium-photo/explore-world-through-delectable-culinary-diversity_128650-5522.jpg) ",
        }}
      ></div>
    </div>
  );
}

export default MainHome;
