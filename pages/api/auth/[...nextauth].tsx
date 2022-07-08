
import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"


export const authOptions:NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },
  jwt: {
    secret: process.env.SECRET,
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // 예제 임시 추가
      console.log(user, account, profile, email, credentials);
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        return true
      } else {
        // Return false to display a default error message
        return false
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    }
  }
};

export default NextAuth(authOptions);