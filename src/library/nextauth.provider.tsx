"use client";
import { SessionProvider } from "next-auth/react";

export default function NextAuthWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider refetchInterval={5 * 600}>{children}</SessionProvider>
  );
}
