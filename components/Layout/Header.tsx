import { useState } from 'react';
import { BaseProps } from 'types';
import { Hamburger, Logo } from '@components/common/Icon';
import { useResponsiveContext } from '@components/Layout/ResponsiveContext';

const Avatar = () => {
  return (
    <div className="rounded-full bg-blue w-[60px] h-[60px]">
      <p className="text-center font-bold text-3xl leading-loose">A</p>
    </div>
  )
}


export default function Header({ children }: BaseProps) {
  const [isAuthorize, setAuthorize] = useState(false);
  const { IsMobileScreen, setIsMenuOpen } = useResponsiveContext();
  const handleClick = () => {
    setAuthorize(true)
    // TODO : Github Login 
  }
  const openSidebar = () => {
    setIsMenuOpen(true)
  }
  return (
    <div className="h-16 lg:h-24 lg:py-4 mb-6 lg:my-4 w-full flex items-center">
      <div 
        className={`
          mr-auto flex items-center
          ${IsMobileScreen ? 'opacity-100': 'opacity-0'}
        `}
      >
        <Hamburger className='h-4 mr-4' handleClick={openSidebar} />
        <Logo className="h-8" />
      </div>
      <div className="ml-auto">
        {isAuthorize 
          ? <Avatar />
          : <p onClick={handleClick} className='py-4 font-bold text-xl'>로그인</p>
        }
      </div>   
    </div>
  )
}
