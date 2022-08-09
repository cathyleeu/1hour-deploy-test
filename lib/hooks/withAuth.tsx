import React from "react";
import { User } from 'firebase/auth'
import { useAuth } from "@components/auth/AuthProvide";

export interface withAuthProps {
  auth: User;
}

const withAuth = (WrappedComponent: React.FC<any>) => {
  const AuthComponent = (props: any) => {
    const { user } = useAuth();
    return <WrappedComponent {...props} auth={user} />
  };

  return AuthComponent;
}

export default withAuth;