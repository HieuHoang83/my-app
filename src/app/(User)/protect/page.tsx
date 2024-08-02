import { getServerSession } from "next-auth";
import { authOptions } from "../utils/authOptions";
import { redirect } from "next/navigation";

async function BV() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/"); // chuyen huong ben server
    //chuyen huong ben client useRouter ->push
  }
  return <div className="w-[100vw] h-[100vh] bg-black"></div>;
}

export default BV;
