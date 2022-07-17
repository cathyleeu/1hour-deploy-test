import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: User;
  }
  interface UserSession extends Session {
    expires: string;
  }
}

export interface User {
  name: string;
  email: string;
  image: string;
  id: string;
  token: string;
}