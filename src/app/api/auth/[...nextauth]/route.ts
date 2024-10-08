import NextAuth from "next-auth";
import type { NextAuthOptions, Session, User as NextAuthUser } from "next-auth";
import type { JWT } from "next-auth/jwt"; 
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import AzureADProvider from "next-auth/providers/azure-ad";
import CredentialsProvider from "next-auth/providers/credentials";
import DiscordProvider from "next-auth/providers/discord";
import { endPoints } from "@/utils/api/route";
import { postMethod } from "@/utils/api/postMethod";

interface CustomUser extends NextAuthUser {
  id: string;
  _id: string;
  username: string;
  role?: string | null;
  accessToken?: string | null;
  refreshToken?: string | null;
}

interface CustomSession extends Session {
  user: CustomUser;
  token: string;
  accessToken?: string;
  refreshToken?: string;

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

    async jwt({ token, user }) {
      if (user) {
        token.user = user as CustomUser;
        token.accessToken = (user as CustomUser).accessToken;
        token.refreshToken = (user as CustomUser).refreshToken;
      }
      return token;
    },



    async session({ session, token }: { session: Session; token: JWT }) {
      (session as CustomSession).user = token.user as CustomUser;
      (session as CustomSession).accessToken = token.accessToken as string;
      (session as CustomSession).refreshToken = token.refreshToken as string;
      return session as CustomSession;
    },
  },
  pages: {
    signIn: '/login',
    signOut: '/login',
    error: '/login', // Error code passed in query string as ?error=
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };