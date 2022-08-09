import { GithubAuthProvider, signOut, signInWithPopup, User, setPersistence, browserLocalPersistence, signInWithRedirect, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useState, createContext, useContext, useEffect } from "react";
import type { PropsWithChildren } from 'react'

// Firebase Github Auth 
interface AuthContextType {
  login: () => void;
  logout: () => void;
  token: string | undefined;
  user: User | undefined;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({ children }: PropsWithChildren) => {

  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  
  const [token, setToken] = useState<string | undefined>();
  const [user, setUser] = useState<User>();

  const setTokenServer = async(idToken:string) => {
    // FIXME
    await fetch(`/api/token`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ idToken }),
    })
  }
  useEffect(() => {
    onAuthStateChanged(auth, async(user) => {
      if (user) {
        const idToken = await user.getIdToken()
        setTokenServer(idToken)
        setToken(idToken)
        setUser(user)
      } else {
      }
    })
  }, [])
  const login = async () => {
    const provider = new GithubAuthProvider();
    setError(null);
    setIsPending(true);
    
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

      setIsPending(false)
    } catch (error: any) {
      console.log(error);
      setError(error.message);
      setIsPending(false);
    }

    onAuthStateChanged
  }

  const logout = async () => {
    try {
      const res = await signOut(auth)
      console.log(res);
      setToken(undefined)
      setUser(undefined)
    } catch (error) {
      throw new Error("Logout Error");      
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
