import { GithubAuthProvider, signOut, signInWithPopup, User, onIdTokenChanged } from "firebase/auth";
import { auth } from "@/firebase/client";
import { useState, createContext, useContext, useEffect } from "react";
import type { PropsWithChildren } from 'react'
import nookies from 'nookies'
import { responseAPI, oneHourUrl } from 'lib/api'
// Firebase Github Auth 
interface Auth {
  token?: string;
  user?: User;
  favor?: AuthFavor;
}

// FIXME TYPE
interface AuthFavor {
  bookmarks: any[]
  likes: any[]
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
  const [favor, setFavors] = useState();

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

  useEffect(() => {
    if(user?.uid) {
      responseAPI(oneHourUrl.GET_USER_FAVORITES(user?.uid))
        .then((response:any) => {
          const [data] = response
          setFavors(data)
        })
    }
  }, [user])

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

    } catch (error) {
      // FIXME : Error handling
      setError(error);
      throw new Error("Logout Error");
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
      user,
      favor
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
