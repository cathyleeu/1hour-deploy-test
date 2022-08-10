import { GithubAuthProvider, signOut, signInWithPopup, User, onIdTokenChanged } from "firebase/auth";
import { auth } from "../../firebaseClient";
import { useState, createContext, useContext, useEffect } from "react";
import type { PropsWithChildren } from 'react'
import nookies from 'nookies'

// Firebase Github Auth 
interface Auth {
  token?: string;
  user?: User;
}
interface AuthContextType extends Auth {
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [error, setError] = useState(null);
  const [token, setToken] = useState<string | undefined>();
  const [user, setUser] = useState<User>();

  const setupAuth = ({token, user }: Auth) => {
    nookies.set(undefined, "token", token ?? "", {})
    setToken(token)
    setUser(user)
  }

  useEffect(() => {
    onIdTokenChanged(auth, async(user) => {
      if(!user) {
        setupAuth({})
        return;
      }
      const idToken = await user.getIdToken()
      setupAuth({ token:idToken, user })
    }) 
  }, [])

  const login = async () => {
    const provider = new GithubAuthProvider();
    setError(null);

    try {
      const result = await signInWithPopup(auth, provider)
      if (result) {        
        setUser(result.user)
        const credential = GithubAuthProvider.credentialFromResult(result);
        if(credential) {
          setToken(credential.accessToken);
        }
      }

      if (!result) {
        throw new Error("Could not complete signup");
      }

    } catch (error: any) {
      console.log(error);
      setError(error.message);;
    } finally {
      location.reload()
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
      setupAuth({})
    } catch (error) {
      throw new Error("Logout Error");      
    } finally {
      location.reload()
    }
  }

  return (
    <AuthContext.Provider value={{ 
      token, 
      login,
      logout,
      user
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
