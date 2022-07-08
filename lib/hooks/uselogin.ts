import { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

/** check user login */
export const useLogin = () => {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isAuthorize, setIsAuthorize] = useState(false);
  const { data: session } = useSession();

  const toggleOpenLogin = () => setIsOpenLogin((p) => !p);
  const login = () => signIn('github');
  const logout = () => signOut();

  useEffect(() => {
    if (session) {
      setIsAuthorize(true);
    }
  }, [session]);

  return {
    isOpenLogin,
    isAuthorize,
    session,
    login,
    logout,
    toggleOpenLogin,
  };
};

export default useLogin;
