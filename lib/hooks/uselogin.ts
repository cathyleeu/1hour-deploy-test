import { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

/** check user login */
export const useLogin = () => {
  const [isOpenLogin, setIsOpenLogin] = useState(false);

  const toggleOpenLogin = () => setIsOpenLogin((p) => !p);

  const { data: authorize } = useSession();

  const login = () => signIn();
  const logout = () => signOut();

  return { isOpenLogin, authorize, login, logout, toggleOpenLogin };
};

export default useLogin;
