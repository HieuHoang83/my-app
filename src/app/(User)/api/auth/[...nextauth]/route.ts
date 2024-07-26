import axios, { AxiosResponse } from "axios";
import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
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
export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  secret: process.env.NO_SECRET,

  providers: [
    //su ly dl cho callback jwt
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Username and Password",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied

        const response = await fetchData(
          "http://localhost:8000/api/v1/auth/loginByEmail",
          {
            username: credentials?.username,
            password: credentials?.password,
          }
        );

        if (response.error) {
          throw new Error(response.error);
        } else {
          return response.data as any;
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser, trigger }) {
      //neu dn bang ben thu 3
      if (trigger === "signIn" && account?.provider !== "credentials") {
        const response = await fetchData(
          "http://localhost:8000/api/v1/auth/loginbySocial",
          {
            email: user.email,
            name: user.name,
            type: account?.provider,
          }
        );

        if (response.error) {
          return response.data;
        } else {
          token.access_token = response.data.access_token;
          token.user = response.data.user;
          token.refreshToken = response.data.refreshToken;
        }
      }
      //neu dn bang tk mk
      if (trigger === "signIn" && account?.provider === "credentials") {
        //@ts-ignore
        token.access_token = user?.access_token;
        //@ts-ignore
        token.user = user?.user;
        //@ts-ignore
        token.refreshToken = user?.refreshToken;
      }
      //return token ve cho session ben duoi
      return token;
    },
    async session({ session, user, token }) {
      if (token) {
        session.access_token = token.access_token;
        session.user = token.user;
        session.refreshToken = token.refreshToken;
        return session;
      } else {
        throw new Error("khong co token");
      }
    },
  },
  // pages: {
  //   signIn: "/auth/login",
  //   signOut: "/auth/signout",
  //   error: "/auth/error", // Error code passed in query string as ?error=
  //   verifyRequest: "/auth/verify-request", // (used for check email message)
  //   newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  // },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
