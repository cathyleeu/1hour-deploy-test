import { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

/** check user login */
export const useLogin = () => {
  const [isOpenLogin, setIsOpenLogin] = useState(false);

  const { data: user } = useSession();

  const toggleOpenLogin = () => setIsOpenLogin((p) => !p);
  const login = () => signIn('github');
  const logout = () => signOut();

  return {
    isOpenLogin,
    user,
    login,
    logout,
    toggleOpenLogin,
  };
};

export default useLogin;
