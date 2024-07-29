import { getServerSession } from "next-auth";
import MainHome from "@/components/mainHome/mainHome";
import NavigateHome from "@/components/header/header";
import type { Metadata } from "next";
import { authOptions } from "@/app/(User)/utils/authOptions";

export const metadata: Metadata = {
  title: "Home page",
  description: "home page description",
};
export default async function HomePage() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <NavigateHome />
      <MainHome />
    </div>
  );
}
