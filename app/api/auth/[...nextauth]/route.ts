import { prisma } from "@/prisma/prisma-client";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const values = {
          email: credentials?.email,
        };
        const findUser = await prisma.user.findFirst({ where: values });

        if (!findUser) return null;

        const isPasswordValid = await compare(credentials.password, findUser.password);

        if (!isPasswordValid) return null;

        return {
          id: String(findUser.id),
          login: findUser.fullName,
          email: findUser.email,
          role: findUser.role,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token }) {
      const findUser = await prisma.user.findFirst({
        where: {
          email: token?.email,
        },
      });

      if (findUser) {
        token.id = String(findUser.id);
        (token.login = findUser.fullName), (token.email = findUser.email), (token.role = findUser.role);
      }

      return token;
    },
    session({ session, token }) {
      if (session?.user) {
        (session.id = token.id), (session.role = token.role);
      }

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
