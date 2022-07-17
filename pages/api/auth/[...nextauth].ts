import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

export const authOptions:NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.NEXTAUTH_ID,
      clientSecret: process.env.NEXTAUTH_SECRET,
    }),
  ],
  secret: process.env.SECRET,
  callbacks: {
    async jwt({ token, user, account }) {
      // set github id & token at token
      if (user) {
        token.id = user.id;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({session, token}: any) {
      session.user.id = token.sub;
      session.user.token = token.accessToken;
      return session
    } 
  }
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, authOptions);
