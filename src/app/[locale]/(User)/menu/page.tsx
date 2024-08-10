import { getServerSession } from "next-auth";
import type { Metadata } from "next";
import MenuPage from "@/components/Menu/Menu";

export const metadata: Metadata = {
  title: "Menu page",
  description: "About page description",
};
export default async function HomePage() {
  return <MenuPage />;
}
