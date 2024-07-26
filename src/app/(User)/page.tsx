import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import MainHome from "@/components/mainHome/mainHome";
import NavigateHome from "@/components/header/header";
export default async function HomePage() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <NavigateHome />
      <MainHome />
    </div>
  );
}
