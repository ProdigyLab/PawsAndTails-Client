import NextAuth from "next-auth";
import type { NextAuthOptions, Session } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import AzureADProvider from "next-auth/providers/azure-ad";
import CredentialsProvider from "next-auth/providers/credentials";
import DiscordProvider from "next-auth/providers/discord";
import { endPoints } from "@/utils/api/route";
import { postMethod } from "@/utils/api/postMethod";

interface User {
  name?: string | null;
  id: string;
  _id: string;
  username: string;
  email?: string | null;
  role?: string | null;
  accessToken?: string | null;
}

interface CustomSession extends Session {
  user: User;
  token: string;
}

const authOptions: NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID!,
      clientSecret: process.env.FACEBOOK_SECRET!,
    }),
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      tenantId: process.env.AZURE_AD_TENANT_ID!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        const user = { ...credentials };
        if (user) {
          return user as any;
        } else {
          console.log("check your credentials");
          return null;
        }
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "github" || account?.provider === "google") {
        const { id, name, email, image } = user;
        const RegisterData = {
          email,
          password: id,
          username: name,
          phone: "0123456",
          image,
          role: "Customer",
        };
        try {
          const registerResponse = await postMethod({
            route: endPoints.auth.register,
            postData: RegisterData,
          });
          if (registerResponse?.data?.statusCode === 200) {
            await postMethod({
              route: endPoints.auth.login,
              postData: { email, password: id },
            });
          } else {
            await postMethod({
              route: endPoints.auth.login,
              postData: { email, password: id },
            });
          }
        } catch (error) {
          console.error("Error during sign in:", error);
          await postMethod({
            route: endPoints.auth.login,
            postData: { email, password: id },
          });
        }
      }
      return true;
    },

    async jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }
      return { ...token, ...user };
    },

    async session({
      session,
      token,
    }: {
      session: CustomSession;
      token: Partial<User>;
    }) {
      (session as CustomSession).user = token as User;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };