import { Hamburger, Logo } from '@components/common/Icon';
import { useResponsiveContext } from '@components/Layout/ResponsiveContext';
import Avatar from './avatar';
import dynamic from 'next/dynamic';
import { useAuth } from '@components/auth/AuthProvide';
import { useState } from 'react'

const LoginModal = dynamic(() => import('components/Layout/login-modal'));

export default function Header() {
  const { IsMobileScreen, setIsMenuOpen } = useResponsiveContext();
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsMenuOpen(true);
  };

  const handleLoginModal = (e: any) => {
    
    e.stopPropagation();
    setIsOpen(true)
  }

  return (
    <>
      <div className="h-16 lg:h-24 lg:py-4 mb-6 lg:my-4 w-full flex items-center">
        <div
          className={`
        mr-auto flex items-center
        ${IsMobileScreen ? 'opacity-100' : 'opacity-0'}
        `}
        >
          <Hamburger className="h-4 mr-4" handleClick={openSidebar} />
          <Logo className="h-8" />
        </div>
        <div className="ml-auto">
          {user ? (
            <Avatar />
          ) : (
            <p
              onClick={handleLoginModal}
              className="py-4 font-bold text-xl cursor-pointer"
            >
              로그인
            </p>
          )}
        </div>
      </div>
      <LoginModal {...{ 
        isOpenLogin: isOpen,  
        toggleOpenLogin: () => setIsOpen(false)
        }} />
    </>
  );
}
