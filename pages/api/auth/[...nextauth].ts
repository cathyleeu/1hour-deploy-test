import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

const options = {
  providers: [
    GitHubProvider({
      clientId: process.env.NEXTAUTH_ID,
      clientSecret: process.env.NEXTAUTH_SECRET,
    }),
  ],
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
