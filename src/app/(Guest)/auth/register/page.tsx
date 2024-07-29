import Login from "@/components/auth/auth.signin";
import Register from "@/components/auth/auth.register";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { authOptions } from "@/app/(User)/utils/authOptions";

export const metadata: Metadata = {
  title: "Register page",
  description: "Đăng ký tài khoản ",
};
export default async function SigninPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }
  return <Register></Register>;
}
