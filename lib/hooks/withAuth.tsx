import React from "react";
import useLogin from "./uselogin";
import { User } from '../../types/next-auth';

export interface withAuthProps {
  auth: User;
}

const withAuth = (WrappedComponent: React.FC<any>) => {
  const AuthComponent = (props: any) => {
    const { user } = useLogin();
    return <WrappedComponent {...props} auth={user?.user} />
  };

  return AuthComponent;
}

export default withAuth;