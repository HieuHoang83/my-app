import { authOptions } from "@/app/(User)/api/auth/[...nextauth]/route";
import Login from "@/components/auth/auth.signin";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function SigninPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }

  return <Login></Login>;
}
