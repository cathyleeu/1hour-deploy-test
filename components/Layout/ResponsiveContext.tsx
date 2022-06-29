import { createContext, useState, useContext } from "react";


interface ResponsiveContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: (menu: boolean) => void;
  IsMobileScreen: boolean;
  setIsMobileScreen: (screen: boolean) => void;
}

interface Props {
  children:React.ReactNode
}

export const ResponsiveContext = createContext<ResponsiveContextType>({} as ResponsiveContextType);

const ResponsiveProvider = ({children}:Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [IsMobileScreen, setIsMobileScreen] = useState(true);
  return (
    <ResponsiveContext.Provider value={{ 
      isMenuOpen,
      setIsMenuOpen,
      IsMobileScreen,
      setIsMobileScreen
     }}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export const useResponsiveContext = () => {
  return useContext(ResponsiveContext);
};

export default ResponsiveProvider;

