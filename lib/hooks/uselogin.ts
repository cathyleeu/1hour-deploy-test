import { useState } from 'react';

/** check user login */
export const useLogin = () => {
  const [isOpenLogin, setIsOpenLogin] = useState(false);

  const toggleOpenLogin = () => setIsOpenLogin((p) => !p);

  //TODO: check user login
  const isAuthorize = false;

  const login = () => {
    //TODO: login
  };

  const logout = () => {
    //TODO: logout
  };

  return { isOpenLogin, isAuthorize, login, logout, toggleOpenLogin };
};

export default useLogin;
