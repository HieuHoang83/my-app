import { getServerSession } from "next-auth";
import type { Metadata } from "next";
import { authOptions } from "@/app/(User)/utils/authOptions";
import CmpHome from "@/components/Home/cmpHome";

export const metadata: Metadata = {
  title: "Home page",
  description: "home page description",
};
export default async function HomePage() {
  const session = await getServerSession(authOptions);

  return <CmpHome />;
}
