import { BaseProps } from 'types';
import { Hamburger, Logo } from '@components/common/Icon';
import { useResponsiveContext } from '@components/Layout/ResponsiveContext';
import Avatar from './avatar';
import { useLogin } from 'lib/hooks';
import dynamic from 'next/dynamic';
import { useSession, signIn, signOut } from 'next-auth/react';

const LoginModal = dynamic(() => import('components/Layout/login-modal'));

export default function Header({ children }: BaseProps) {
  const { data: session } = useSession();
  const { IsMobileScreen, setIsMenuOpen } = useResponsiveContext();
  const { isOpenLogin, toggleOpenLogin } = useLogin();

  const openSidebar = () => {
    setIsMenuOpen(true);
  };

  console.log('session', session);

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
          {session ? (
            <Avatar />
          ) : (
            <p
              onClick={(e) => {
                e.stopPropagation();
                toggleOpenLogin();
              }}
              className="py-4 font-bold text-xl cursor-pointer"
            >
              로그인
            </p>
          )}
        </div>
      </div>
      <LoginModal {...{ isOpenLogin, toggleOpenLogin }} />
    </>
  );
}
