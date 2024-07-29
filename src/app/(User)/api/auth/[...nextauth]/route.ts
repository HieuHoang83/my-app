import axios, { AxiosResponse } from "axios";
import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { authOptions } from "@/app/(User)/utils/authOptions";
async function fetchData(url: string, body: any) {
  // You can await here
  try {
    const response: AxiosResponse = await axios.post(url, body);

    return response.data;
  } catch (error: any) {
    return {
      statusCode: error?.response?.data?.statusCode ?? 400,
      error: error?.response?.data?.error ?? "error",
      message: error?.response?.data?.message ?? "message",
    };
  }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
